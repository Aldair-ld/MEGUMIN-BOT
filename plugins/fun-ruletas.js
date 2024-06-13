let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    const ruletaresultado = "https://i.ibb.co/Bq57njn/OIG4.jpg";

    let amount = parseInt(args[0]);
    let color = args[1]?.toLowerCase();
    if (args.length < 2 || !color) throw `Error, ingrese el monto y el color rojo o negro.`;
    
    let colores = ['rojo', 'negro'];
    let colour = colores[Math.floor(Math.random() * colores.length)];
    let user = global.db.data.users[m.sender];

    if (isNaN(amount) || amount < 10) throw `Lo mínimo para apostar son 10 💎.`;
    if (!colores.includes(color)) throw 'Debes especificar un color válido: rojo o negro';
    if (user.limit < amount) throw `¡No tienes suficiente límite para apostar! Tienes ${user.limit} 💎 pero necesitas al menos ${amount} 💎.`;

    let result = '';
    if (colour == color) {
        user.limit += amount;
        result = `𝙻𝙰 𝚁𝚄𝙻𝙴𝚃𝙰 𝙿𝙰𝚁𝙾 𝙴𝙽 𝙴𝙻 𝙲𝙾𝙻𝙾𝚁: ${colour == 'rojo' ? '🔴' : '⚫'}\n\n` +
                 `𝚄𝚂𝚃𝙴𝙳 𝙶𝙰𝙽𝙾: ${amount} 💎\n` +
                 `💎 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂: ${user.limit}`;
    } else {
        user.limit -= amount;
        result = `𝙻𝙰 𝚁𝚄𝙻𝙴𝚃𝙰 𝙿𝙰𝚁𝙾 𝙴𝙽 𝙴𝙻 𝙲𝙾𝙻𝙾𝚁: ${colour == 'rojo' ? '🔴' : '⚫'}\n\n` +
                 `𝚄𝚂𝚃𝙴𝙳 𝙿𝙴𝚁𝙳𝙸𝙾: ${amount} 💎\n` +
                 `💎 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂: ${user.limit}`;
    }

    conn.sendMessage(m.chat, { image: { url: ruletaresultado }, caption: result }, { quoted: m });
};

handler.help = ['ruleta apuesta/color'];
handler.tags = ['game'];
handler.command = ['ruleta', 'rt'];

export default handler;
