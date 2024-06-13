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
  
  // Verificar tiempo desde el último robo
  let lastRobbed = user.lastRobbed || 0;
  let hoursSinceLastRob = (Date.now() - lastRobbed) / (1000 * 60 * 60); // Convertir milisegundos a horas
  
  if (hoursSinceLastRob < 24) {
    let remainingHours = 24 - Math.ceil(hoursSinceLastRob);
    return conn.reply(m.chat, `Debes esperar ${remainingHours} horas antes de poder robar nuevamente.`, m);
  }
  
  // Realizar el robo exitosamente
  let amountToSteal = Math.min(targetUser.banco, 5); // Máximo se pueden robar 5 diamantes
  targetUser.banco -= amountToSteal;
  user.limit = (user.limit || 0) + amountToSteal;
  user.lastRobbed = Date.now(); // Registrar el tiempo del último robo
  
  conn.sendFile(
    m.chat,
    "URL_DE_LA_IMAGEN_QUE_QUIERES_USAR", // Reemplazar con la URL de la imagen deseada
    "robado.jpg", // Nombre del archivo a mostrar
    `🎉 𝙷𝙰𝚉 𝚁𝙾𝙱𝙰𝙳𝙾 ${amountToSteal} 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂 𝙰 ${conn.getName(target)}

💎 𝚃𝚄𝚂 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂: ${user.limit}

💎 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂 𝙳𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝚀𝚄𝙴 𝚁𝙾𝙱𝙰𝚂𝚃𝙴: ${targetUser.banco}`,
    m,
    { quoted: m }
  );
  
  // Actualizar los datos en la base global
  global.db.data.users[who] = user;
  global.db.data.users[target] = targetUser;
};

handler.help = ['robarbanco @usuario'];
handler.tags = ['economia'];
handler.command = ['robarbanco'];

export default handler;
