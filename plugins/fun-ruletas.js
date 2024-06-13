const handler = async (m, { conn, text, isPrems }) => {
    if (!db.data.chats[m.chat].game) throw `${lenguajeGB['smsAvisoAG']()} Este juego está desactivado por los admins del grupo. Si eres admin y quieres activarlo usa: #on juegos`;

    const user = global.db.data.users[m.sender];
    if (!user) throw `Usuario no encontrado.`;

    const date = user.juegos + 5000; // 5000 = 5 segundos
    if (new Date - user.juegos < 5000) throw `⏰ Espera: ${msToTimeInSeconds(date - new Date())} para volver a jugar.`;

    if (user.diamantes < 0) return m.reply(`${lenguajeGB['smsAvisoAG']()} No tienes suficientes diamantes.`);

    let [_, apuesta, color] = text.split(' ');
    apuesta = parseInt(apuesta);
    color = color.toLowerCase();

    if (isNaN(apuesta) || apuesta <= 0) return m.reply('La cantidad de apuesta debe ser un número positivo.');
    if (user.diamantes < apuesta) return m.reply('No tienes suficientes diamantes para hacer esta apuesta.');
    if (!['rojo', 'negro', 'azul'].includes(color)) return m.reply('Color no válido. Los colores válidos son rojo, negro y azul.');

    const colores = ['rojo', 'negro', 'azul'];
    const resultado = pickRandom(colores);

    user.juegos = new Date * 1;
    let mensaje = `La ruleta ha girado y ha salido ${resultado}.\n`;
    let imagenURL = ''; 

    if (color === resultado) {
        user.diamantes += apuesta;
        mensaje += `¡Felicidades! Has ganado ${apuesta * 2} diamantes.`;
        imagenURL = 'https://telegra.ph/file/75e6dbb2f6d30b9e16d17.jpg'; // URL de la imagen de ganar
    } else {
        user.diamantes -= apuesta;
        mensaje += `Lo siento, has perdido ${apuesta} diamantes.`;
        imagenURL = 'https://telegra.ph/file/75e6dbb2f6d30b9e16d17.jpg'; // URL de la imagen de perder
    }

    mensaje += `\nAhora tienes ${user.diamantes} diamantes.`;

    await conn.sendMessage(m.chat, { image: { url: imagenURL }, caption: mensaje });

};

handler.help = ['ruleta'];
handler.tags = ['game'];
handler.command = /^(ruleta|ruletas)$/i;
handler.fail = null;
handler.group = true;
handler.register = true;
export default handler;

function msToTimeInSeconds(duration) {
    var seconds = Math.floor(duration / 1000);
    return seconds + " Segundo(s)";
}

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())];
}
