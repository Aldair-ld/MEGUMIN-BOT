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

  // Esperar la respuesta del usuario
  let response;
  try {
    response = await conn.waitForMessage(m.chat, {
      fromMe: false,
      content: palabraAdivinar,
      quoted: m,
      wait: 60000, // Aumentar a 60 segundos
    });
  } catch (error) {
    console.error(error);
    return conn.reply(m.chat, `⏳ Tiempo agotado. No se pudo realizar el robo.`, m);
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
