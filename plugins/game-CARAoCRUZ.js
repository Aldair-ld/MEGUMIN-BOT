var handler = async (m, { conn }) => {
  const players = [];
  const impostor = Math.floor(Math.random() * 3); // Se elige aleatoriamente quién será el impostor

  conn.sendMessage(m.chat, { text: `🔍 Bienvenido a "Encuentra al Impostor" 🔍\n\nEnvía "yo" para participar.` }, { quoted: m });

  conn.on('chat-update', async (msg) => {
    if (!msg.hasNewMessage) return;
    let message = msg.messages.all()[0];
    if (!message.message || message.key.fromMe) return;

    let response = message.message.conversation || message.message.extendedTextMessage.text;

    if (response.toLowerCase() === 'yo' && !players.includes(message.key.remoteJid)) {
      players.push(message.key.remoteJid);
      conn.sendMessage(m.chat, { text: `✅ ${message.key.participant || message.key.remoteJid.split('@')[0]} se ha unido al juego.` }, { quoted: m });
    }

    if (players.length >= 3) { // Cuando hay al menos 3 jugadores
      if (players.includes(message.key.remoteJid) && response.toLowerCase() !== 'yo') {
        if (players.indexOf(message.key.remoteJid) === impostor) {
          conn.sendMessage(m.chat, { text: `❌ ${message.key.participant || message.key.remoteJid.split('@')[0]} ¡Has sido eliminado! Eres el impostor.` }, { quoted: m });
        } else {
          conn.sendMessage(m.chat, { text: `✅ ${message.key.participant || message.key.remoteJid.split('@')[0]} ¡Estás a salvo! No eres el impostor.` }, { quoted: m });
        }
      }
    }

    if (players.length >= 3 && players.includes(message.key.remoteJid) && response.toLowerCase() !== 'yo') {
      if (players.indexOf(message.key.remoteJid) !== impostor && players.length > 1) {
        conn.sendMessage(m.chat, { text: `🎉 ¡Felicidades! Has encontrado al impostor.` }, { quoted: m });
        conn.sendMessage(m.chat, { text: `🔍 El impostor era ${players[impostor].split('@')[0]}.` }, { quoted: m });
        conn.closeChat(m.chat);
      }
    }
  });
};

handler.help = ['impostor'];
handler.tags = ['game'];
handler.command = /^impostor$/i;
handler.group = true;

export default handler;
