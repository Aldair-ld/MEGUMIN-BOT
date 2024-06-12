import fetch from 'node-fetch';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let timeout = 60000; // 1 minuto para responder
global.suit = global.suit ? global.suit : {};

let handler = async (m, { conn, usedPrefix, command }) => {
  if (!m.isGroup) return m.reply('Este comando solo se puede usar en grupos.');

  let who;
  if (m.mentionedJid[0]) {
    who = m.mentionedJid[0];
  } else {
    return m.reply('Por favor, etiqueta a un usuario para retarlo.');
  }

  let challenger = m.sender;
  let opponent = who;

  let challengerName = conn.getName(challenger);
  let opponentName = conn.getName(opponent);

  let challengerUser = global.db.data.users[challenger];
  let opponentUser = global.db.data.users[opponent];

  if (opponentUser.banco < 10) {
    return m.reply(`${opponentName} no tiene suficientes diamantes en su banco.`);
  }

  let id = 'suit_' + new Date() * 1;

  let caption = `${challengerName} te ha retado a un duelo de Piedra, Papel o Tijera con una apuesta de 10 diamantes. ¿Aceptas?\n\nEscribe "aceptar" para aceptar o "rechazar" para rechazar el desafío.`;

  conn.suit[id] = {
    challenger,
    opponent,
    status: 'wait',
    timestamp: Date.now(),
    chat: await conn.sendMessage(m.chat, { text: caption, mentions: [opponent] }),
    timeout: setTimeout(() => {
      if (conn.suit[id]) {
        conn.sendMessage(m.chat, { text: `El desafío ha expirado por falta de respuesta de ${opponentName}.` }, { quoted: m });
        delete conn.suit[id];
      }
    }, timeout)
  };

  const responseHandler = async (chatUpdate) => {
    if (!conn.suit[id]) return;

    let message = chatUpdate.messages[0];
    if (message.key.remoteJid === opponent && ['aceptar', 'rechazar'].includes(message.message.conversation.toLowerCase())) {
      clearTimeout(conn.suit[id].timeout);

      if (message.message.conversation.toLowerCase() === 'rechazar') {
        conn.sendMessage(m.chat, { text: `${opponentName} ha rechazado el desafío.` }, { quoted: m });
        delete conn.suit[id];
      } else if (message.message.conversation.toLowerCase() === 'aceptar') {
        // Enviar opciones a los jugadores
        await conn.sendMessage(challenger, { text: 'Escribe tu elección: piedra, papel o tijera.' });
        await conn.sendMessage(opponent, { text: 'Escribe tu elección: piedra, papel o tijera.' });

        conn.suit[id].status = 'playing';
        conn.suit[id].choices = {};

        // Handler para recoger las opciones de los jugadores
        const choiceHandler = async (chatUpdate) => {
          let message = chatUpdate.messages[0];
          if (!conn.suit[id]) return;

          if (message.key.remoteJid === challenger || message.key.remoteJid === opponent) {
            let choice = message.message.conversation.toLowerCase();
            if (['piedra', 'papel', 'tijera'].includes(choice)) {
              conn.suit[id].choices[message.key.remoteJid] = choice;

              if (Object.keys(conn.suit[id].choices).length === 2) {
                // Ambos jugadores han hecho su elección
                let challengerChoice = conn.suit[id].choices[challenger];
                let opponentChoice = conn.suit[id].choices[opponent];

                let resultMessage = `*${challengerName} vs ${opponentName}*\n`;
                resultMessage += `${challengerName} eligió: ${challengerChoice}\n`;
                resultMessage += `${opponentName} eligió: ${opponentChoice}\n`;

                if (challengerChoice === opponentChoice) {
                  resultMessage += '¡Es un empate! Ambos conservan sus diamantes.';
                } else if (
                  (challengerChoice === 'piedra' && opponentChoice === 'tijera') ||
                  (challengerChoice === 'papel' && opponentChoice === 'piedra') ||
                  (challengerChoice === 'tijera' && opponentChoice === 'papel')
                ) {
                  resultMessage += `¡${challengerName} gana el duelo! 10 diamantes se transfieren a su banco.`;
                  challengerUser.banco += 10;
                  opponentUser.banco -= 10;
                } else {
                  resultMessage += `¡${opponentName} gana el duelo! 10 diamantes se transfieren a su banco.`;
                  challengerUser.banco -= 10;
                  opponentUser.banco += 10;
                }

                conn.sendMessage(m.chat, { text: resultMessage }, { quoted: m });
                delete conn.suit[id];
              }
            }
          }
        };

        conn.on('chat-update', choiceHandler);
      }

      conn.off('chat-update', responseHandler);
    }
  };

  conn.on('chat-update', responseHandler);
};

handler.help = ['guerrabanco @user'];
handler.tags = ['games', 'economia'];
handler.command = ['guerrabanco'];

export default handler;
