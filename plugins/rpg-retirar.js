import fetch from 'node-fetch';

let handler = async (m, { usedPrefix, command, args, conn }) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
  let name = conn.getName(who);
  let db = await conn.profilePictureUrl(who, "image").catch((_) => "https://telegra.ph/file/51196406f47824ae14ddc.jpg");

  let user = global.db.data.users[who];
  let target = m.mentionedJid[0];
  
  if (!target) {
    return conn.reply(m.chat, `Debes etiquetar a un usuario para robarle los diamantes de su banco.`, m);
  }
  
  let targetUser = global.db.data.users[target];
  
  // Verificar si el usuario tiene diamantes en el banco
  if (!targetUser || !targetUser.banco || targetUser.banco <= 0) {
    return conn.reply(m.chat, `El usuario etiquetado no tiene diamantes en su banco para robar.`, m);
  }
  
  // Juego de adivinar la palabra
  let palabras = ["gato", "perro", "pájaro", "pez", "elefante", "tigre", "león", "jirafa"];
  let palabraAdivinar = palabras[Math.floor(Math.random() * palabras.length)];
  
  let mensajeJuego = `🔍 Para robar los diamantes de ${conn.getName(target)} del banco, adivina la siguiente palabra:

*${palabraAdivinar.split('').join(' ')}*

Responde con la palabra correcta en este chat para continuar.`;
  
  conn.sendMessage(m.chat, mensajeJuego, m);

  // Esperar la respuesta del usuario hasta dos intentos
  let intentos = 0;
  let response = null;
  
  while (intentos < 2) {
    try {
      response = await conn.waitForMessage(m.chat, {
        fromMe: false,
        content: palabraAdivinar,
        quoted: m,
        wait: 60000, // 60 segundos por intento
      });
    } catch (error) {
      console.error(error);
      break; // Salir del bucle si hay un error
    }
    
    if (response) {
      break; // Salir del bucle si la respuesta es correcta
    } else {
      intentos++;
      if (intentos < 2) {
        conn.reply(m.chat, `Respuesta incorrecta. Tienes una oportunidad más para adivinar la palabra.`, m);
      }
    }
  }

  // Verificar si se adivinó correctamente
  if (!response) {
    return conn.reply(m.chat, `⌛ Se agotaron los intentos. No se pudo realizar el robo.`, m);
  }

  // Realizar el robo exitosamente
  let amountToSteal = Math.min(targetUser.banco, 100); // Máximo se pueden robar 100 diamantes
  targetUser.banco -= amountToSteal;
  user.limit = (user.limit || 0) + amountToSteal;
  
  conn.reply(m.chat, `🎉 ¡Has robado ${amountToSteal} diamantes del banco de ${conn.getName(target)}! Ahora tienes ${user.limit} diamantes en tu cuenta.`, m);
};

handler.help = ['robarbanco @usuario'];
handler.tags = ['economia'];
handler.command = ['robarbanco'];

export default handler;
