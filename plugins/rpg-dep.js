import db from '../lib/database.js';

let handler = async (m, { args }) => {
   let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
   
   let users =  global.db.data.users[m.sender];
   if (!args[0]) return m.reply('[❌] Ingresa la cantidad de dinero que deseas Depositar.');
   if (args[0] == '--all') {
      let count = parseInt(users.dolares);
      users.dolares -= count * 1
      users.limit += count * 1
      await m.reply(`*Depositaste ${limit} de diamantes al Banco.*`);
      return !0;
   };
   if (!Number(args[0])) return m.reply('[⚠️] La cantidad debe ser un Numero.');
   let count = parseInt(args[0]);
   if (!users.dolares) return m.reply('[🥺] No tienes dolares en la Cartera.');
   if (users.dolares < count) return m.reply(`[❌] Solo tienes ${users.dolares} dolares en el banco.`);
   users.dolares -= count * 1;
   users.limit += count * 1;
   await m.reply(`*Depositaste ${limit} diamantes al Banco.*`);
};

handler.help = ['deposit'];
handler.tags = ['economy'];
handler.command = ['deposit', 'depositar', 'dep'];

export default handler
