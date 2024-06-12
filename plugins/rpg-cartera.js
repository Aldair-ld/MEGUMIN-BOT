import fetch from 'node-fetch';

// Inicializa el banco de diamantes si no existe
if (!global.diamondBank) {
    global.diamondBank = {};
}

let handler = async (m, { usedPrefix, command, conn, args }) => {
    let who;
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
    else who = m.sender;

    let name = conn.getName(who);
    let fkontak = { "key": { "participants": "0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` } }, "participant": "0@s.whatsapp.net" } };
    let grupos = ['nna', 'nn', 'nnn', 'nnnt']; // Define tus enlaces de grupo aquí
    let gata = ['img5', 'img6', 'img7', 'img8', 'img9']; // Define tus enlaces de imagen aquí
    let pp = './media/menus/Menu1.jpg';
    let enlace = { contextInfo: { externalAdReply: { title: wm + ' 🐈', body: 'support group', sourceUrl: grupos[Math.floor(Math.random() * grupos.length)], thumbnail: await (await fetch(gata[Math.floor(Math.random() * gata.length)])).buffer() } } };
    let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '𝐅𝐚𝐧𝐭𝐚𝐬𝐲𝐁𝐨𝐭-𝐌𝐃 ', thumbnailUrl: await (await fetch(img)).buffer(), sourceUrl: yt } } };
    let dos = [enlace, enlace2];

    let user = global.db.data.users[who];
    if (!user) {
        // Inicializa el usuario si no existe
        global.db.data.users[who] = { money: 0, premium: false };
        user = global.db.data.users[who];
    }
    let premium = user.premium;
    const cartera = {
        economia: {
            exp: true,
            limit: true,
            money: true,
        },
    };
    const recursos = Object.keys(cartera.economia).map(v => user[v] && `*${global.rpgshop.emoticon(v)} ⇢ ${user[v]}*`).filter(v => v).join('\n').trim();
    let cart = ` 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ${premium ? '✅' : '❌'}\n${wm}\n\n𝚄𝚂𝚄𝙰𝚁𝙸𝙾: ⇢ ${name}\n${recursos}`;

    // Si no hay argumentos, muestra el balance actual
    if (!args || args.length === 0) {
        conn.sendMessage(m.chat, { image: { url: pp }, caption: cart, mentions: conn.parseMention(cart) }, { quoted: fkontak, ephemeralExpiration: 24 * 60 * 100, disappearingMessagesInChat: 24 * 60 * 100 });
        return;
    }

    const action = args[0];
    const amount = parseInt(args[1]);

    if (!['guardar', 'retirar', 'banco'].includes(action)) {
        return conn.sendMessage(m.chat, 'Uso incorrecto del comando. Por favor, usa: *!guardar <cantidad>*, *!retirar <cantidad>* o *!banco*', { quoted: m });
    }

    if (action !== 'banco' && (isNaN(amount) || amount <= 0)) {
        return conn.sendMessage(m.chat, 'Por favor, ingresa una cantidad válida.', { quoted: m });
    }

    if (!global.diamondBank[who]) {
        global.diamondBank[who] = 0;
    }

    if (action === 'guardar') {
        if (user.money < amount) {
            return conn.sendMessage(m.chat, '¡No tienes suficientes diamantes para guardar esa cantidad!', { quoted: m });
        }
        user.money -= amount;
        global.diamondBank[who] += amount;
        conn.sendMessage(m.chat, `¡Has guardado ${amount} diamantes en tu cuenta bancaria!`, { quoted: m });
    } else if (action === 'retirar') {
        if (global.diamondBank[who] < amount) {
            return conn.sendMessage(m.chat, '¡No tienes suficientes diamantes en tu cuenta bancaria para retirar esa cantidad!', { quoted: m });
        }
        user.money += amount;
        global.diamondBank[who] -= amount;
        conn.sendMessage(m.chat, `¡Has retirado ${amount} diamantes de tu cuenta bancaria!`, { quoted: m });
    } else if (action === 'banco') {
        conn.sendMessage(m.chat, `Tienes ${global.diamondBank[who]} diamantes guardados en tu cuenta bancaria.`, { quoted: m });
    }
};

handler.help = ['bal', 'guardar', 'retirar', 'banco'];
handler.tags = ['xp'];
handler.command = ['bal2', 'cartera', 'wallet', 'cartera2', 'balance2', 'guardar', 'retirar', 'banco'];

export default handler;
