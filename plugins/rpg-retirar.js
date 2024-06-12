import db from '../lib/database.js';

let handler = async (m, { args }) => {
   
   let user =  global.db.data.users[m.sender]; if (!args[0]) return m.reply('*Ingresa la cantidad de diamante que deseas Retirar.*');
   if (args[0] == '--all') {
      let count = parseInt(user.limit);
      user.limit -= count * 1
      user.dolares += count * 1
      await m.reply(`*Retiraste ${limit} diamantes del Banco.*`);
      return !0
   }
   if (!Number(args[0])) return m.reply('[⚠️] La cantidad debe ser un Numero.');
   let count = parseInt(args[0]);
   if (!user.limit) return m.reply('[😿] No tienes suficiente diamantes en el Banco.')
   if (user.limit < count) return m.reply(`[❌] Solo tienes ${user.limit} de diamantes en el Banco.`)
   user.limit -= count * 1
   user.dolares += count * 1
   await m.reply(`*Retiraste ${count} de dinero del Banco.* 💸`)
}

handler.help = ['withdraw']
handler.tags = ['economy']
handler.command = ['withdraw', 'retirar'] 

export default handler
