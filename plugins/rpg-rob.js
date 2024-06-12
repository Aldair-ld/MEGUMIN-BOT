let ro = 3000; // Valor máximo a robar
let diamantesARobar = 5; // Cantidad de diamantes a robar

let handler = async (m, { conn, usedPrefix, command}) => {
  let time = global.db.data.users[m.sender].lastrob + 7200000; // Tiempo de espera para volver a robar (2 horas)
  
  // Verificar si el usuario ha esperado el tiempo suficiente para volver a robar
  if (new Date - global.db.data.users[m.sender].lastrob < 7200000) {
    throw `⏱️ ¡Hey! Espera ${msToTime(time - new Date())} para volver a robar`;
  }
  
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
  else who = m.chat;

  // Verificar si se ha mencionado a alguien para robar
  if (!who) {
    throw `¡Debes mencionar a alguien para robar!`;
  }

  // Verificar si el usuario objetivo existe en la base de datos
  if (!(who in global.db.data.users)) {
    throw `El usuario al que intentas robar no está registrado en la base de datos.`;
  }

  let users = global.db.data.users[who];
  
  // Calcular el monto a robar
  let rob = Math.floor(Math.random() * ro);
  
  // Verificar si el usuario objetivo tiene suficientes diamantes
  if (users.money < diamantesARobar) {
    return m.reply(`¡@${who.split`@`[0]} tiene menos de *${diamantesARobar} diamantes*! No puedes robar a alguien con tan pocos diamantes.`);
  }    

  // Actualizar la experiencia y el dinero del usuario que roba y del objetivo
  global.db.data.users[m.sender].exp += rob;
  global.db.data.users[who].exp -= rob;
  global.db.data.users[m.sender].money += diamantesARobar;
  global.db.data.users[who].money -= diamantesARobar;
  
  // Enviar mensaje de confirmación del robo
  m.reply(`¡Robaste ${diamantesARobar} diamantes a @${who.split`@`[0]}!`, null, { mentions: [who] });
  
  // Actualizar el tiempo del último robo del usuario que roba
  global.db.data.users[m.sender].lastrob = new Date * 1;
}

// Función para convertir milisegundos a tiempo
function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  return hours + " Hora(s) " + minutes + " Minuto(s)";
}

handler.help = ['robar'];
handler.tags = ['economía'];
handler.command = ['robar'];
handler.group = true;
handler.register = true;

export default handler;
