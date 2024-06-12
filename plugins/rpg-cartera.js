import fetch from 'node-fetch';

let diamondBank = {};

let handler = async (m, { usedPrefix, conn }) => {
    const args = m.text.trim().split(' ');

    let who;
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
    else who = m.sender;

    let name = conn.getName(who);
    let fkontak = { "key": { "participants": "0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` } }, "participant": "0@s.whatsapp.net" };
    let grupos = ['nna', 'nn', 'nnn', 'nnnt']; // Define tus enlaces de grupo aquí
    let gata = ['img5', 'img6', 'img7', 'img8', 'img9']; // Define tus enlaces de imagen aquí
    let pp = './media/menus/Menu1.jpg';
    let enlace = { contextInfo: { externalAdReply: { title: wm + ' 🐈', body: 'support group', sourceUrl: grupos.getRandom(), thumbnail: await (await fetch(gata.getRandom())).buffer() } } };
    let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '𝐅𝐚𝐧𝐭𝐚𝐬𝐲𝐁𝐨𝐭-𝐌𝐃 ', thumbnailUrl: await (await fetch(img)).buffer(), sourceUrl: yt } } };
    let dos = [enlace, enlace2];

    let user = global.db.data.users[who];
    let premium = user.premium;
    const cartera = {
        economia: {
            exp: true,
            limit: true,
            money: true,
        },
    }
    const recursos = Object.keys(cartera.economia).map(v => user[v] && `*${global.rpgshop.emoticon(v)} ⇢ ${user[v]}*`).filter(v => v).join('\n').trim();
    let cart = ` 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ${premium ? '✅' : '❌'}\n${wm}\n\n𝚄𝚂𝚄𝙰𝚁𝙸𝙾: ⇢ ${name}\n${recursos}`;
    
    // Mostrar el menú con el balance actual
    conn.sendMessage(m.chat, { image: { url: pp }, caption: cart, mentions: conn.parseMention(cart) }, { quoted: fkontak, ephemeralExpiration: 24 * 60 * 100, disappearingMessagesInChat: 24 * 60 * 100 });

    // Función para guardar o retirar diamantes del banco
    const action = args[1];
    const amount = parseInt(args[2]);

    if (!['guardar', 'retirar'].includes(action)) {
        return conn.sendMessage(m.chat, 'Uso incorrecto del comando. Por favor, usa: *!guardar <cantidad>* o *!retirar <cantidad>*', { quoted: m });
    }

    if (isNaN(amount) || amount <= 0) {
        return conn.sendMessage(m.chat, 'Por favor, ingresa una cantidad válida.', { quoted: m });
    }

    if (!diamondBank[who]) {
        diamondBank[who] = 0;
    }

    if (action === 'guardar') {
        if (user.money < amount) {
            return conn.sendMessage(m.chat, '¡No tienes suficientes diamantes para guardar esa cantidad!', { quoted: m });
        }
        user.money -= amount;
        diamondBank[who] += amount;
        conn.sendMessage(m.chat, `¡Has guardado ${amount} diamantes en tu cuenta bancaria!`, { quoted: m });
    } else if (action === 'retirar') {
        if (diamondBank[who] < amount) {
            return conn.sendMessage(m.chat, '¡No tienes suficientes diamantes en tu cuenta bancaria para retirar esa cantidad!', { quoted: m });
        }
        user.money += amount;
        diamondBank[who] -= amount;
        conn.sendMessage(m.chat, `¡Has retirado ${amount} diamantes de tu cuenta bancaria!`, { quoted: m });
    }
};

handler.help = ['bal'];
handler.tags = ['xp'];
handler.command = ['bal2', 'cartera', 'wallet', 'cartera2', 'balance2
