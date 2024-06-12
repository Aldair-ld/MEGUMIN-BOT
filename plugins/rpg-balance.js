import fetch from 'node-fetch';

let handler = async (m, { usedPrefix, command, args, conn }) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
  let name = conn.getName(who);
  let db = await conn.profilePictureUrl(who, "image").catch((_) => "https://telegra.ph/file/51196406f47824ae14ddc.jpg");

  let user = global.db.data.users[who];
  let action = command.toLowerCase();
  
  switch (action) {
    case 'depositar':
      if (!args[0] || isNaN(args[0])) return m.reply(`Por favor, ingresa la cantidad de diamantes que deseas depositar.`);
      let depositAmount = parseInt(args[0]);
      if (user.limit < depositAmount) return m.reply(`No tienes suficientes diamantes. Tienes ${user.limit} diamantes.`);
      user.limit -= depositAmount;
      user.banco = (user.banco || 0) + depositAmount;
      m.reply(`Has depositado ${depositAmount} diamantes en el banco. Ahora tienes ${user.banco} diamantes en el banco.`);
      break;
      
    case 'retirar':
      if (!args[0] || isNaN(args[0])) return m.reply(`Por favor, ingresa la cantidad de diamantes que deseas retirar.`);
      let withdrawAmount = parseInt(args[0]);
      if ((user.banco || 0) < withdrawAmount) return m.reply(`No tienes suficientes diamantes en el banco. Tienes ${user.banco || 0} diamantes.`);
      user.banco -= withdrawAmount;
      user.limit += withdrawAmount;
      m.reply(`Has retirado ${withdrawAmount} diamantes del banco. Ahora tienes ${user.limit} diamantes y ${user.banco} en el banco.`);
      break;

    case 'banco':
      let bankMessage = `
       ╭──────༺♡༻──────╮
       *𝙱𝙰𝙽𝙲𝙾 𝙳𝙴 𝙼𝙴𝙶𝚄𝙼𝙸𝙽 - 𝙱𝙾𝚃*
        
    *👤 𝚄𝚂𝚄𝙰𝚁𝙸𝙾:* ${name}
    *💎 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂 DISPONIBLES:* ${user.limit} 💎
    *☯️ 𝚃𝙾𝙺𝙴𝙽𝚂:* ${user.joincount} ☯️


    *💰 DIAMANTES EN EL BANCO:* ${user.banco || 0} 💰

    *CON EL BANCO DE MEGUMIN - BOT SUS DIAMANTES ESTARÁN A SALVO*
       ╰──────༺♡༻──────╯`.trim();

      conn.sendMessage(
        m.chat,
        {
          image: {
            url: db,
          },
          caption: bankMessage,
          contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
              title: `RPG - BANK`,
              sourceUrl: "http://paypal.me/DorratBotOficial",
              mediaType: 1,
              showAdAttribution: true,
              thumbnailUrl: "https://telegra.ph/file/51196406f47824ae14ddc.jpg",
            },
          },
        },
        {
          quoted: m,
        }
      );
      break;

   case 'aumentarbanco':
      let questions = [
        { question: '¿Cuál es la capital de Francia?', answer: 'parís' },
        { question: '¿Cuántos jugadores hay en un equipo de fútbol?', answer: '11' },
        { question: '¿Cuál es el animal más grande del mundo?', answer: 'ballena azul' },
      ];

      // Elegir una pregunta aleatoria
      let question = questions[Math.floor(Math.random() * questions.length)];

      // Envío de la pregunta al usuario
      await conn.sendMessage(m.chat, question.question, m);

      try {
        // Esperar la respuesta del usuario
        let msg = await conn.waitForMessage(m.chat, {
          fromMe: false,
          author: who,
          quoted: m,
        });

        if (msg.text.toLowerCase().trim() === question.answer) {
          // Si la respuesta es correcta, aumentar 5 diamantes al banco del usuario
          user.banco = (user.banco || 0) + 5;
          m.reply(`¡Respuesta correcta! Has ganado 5 diamantes. Ahora tienes ${user.banco} diamantes en el banco.`);
        } else {
          m.reply('Respuesta incorrecta. ¡Inténtalo de nuevo!');
        }
      } catch (error) {
        console.error(error);
        m.reply('Ha ocurrido un error al procesar tu respuesta. Por favor, inténtalo de nuevo más tarde.');
      }
      break;
