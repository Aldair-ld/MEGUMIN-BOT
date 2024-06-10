import fetch from 'node-fetch';
let { areJidsSameUser } = (await import(global.baileys)).default;

let handler = async (m, { conn, text, participants, groupMetadata }) => {
    let fkontak = {
        "key": { "participants": "0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" },
        "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` } },
        "participant": "0@s.whatsapp.net"
    };
    let grupos = [nna, nn, nnn, nnnt];
    let gata = [img5, img6, img7, img8, img9];
    let enlace = { contextInfo: { externalAdReply: { title: wm + ' 🐈', body: 'support group', sourceUrl: grupos.getRandom(), thumbnail: await (await fetch(gata.getRandom())).buffer() } } };
    let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', thumbnailUrl: await (await fetch(global.img)).buffer(), sourceUrl: yt } } };
    let dos = [enlace, enlace2];

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let mentionedJid = [who];
    var number = text.split`@`[1];

    if (!text && !m.quoted) {
        return await conn.reply(m.chat, `${mg}𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝙀 𝙊 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀 𝘼𝙇 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝘿𝙀 𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝙌𝙐𝙀 𝙌𝙐𝙄𝙀𝙍𝙀 𝙌𝙐𝙀 𝙎𝙀𝘼 𝙎𝙐 𝙋𝘼𝙍𝙀𝙅𝘼\n\n𝙏𝘼𝙂 𝙊𝙍 𝙍𝙀𝙋𝙇𝙔 𝙏𝙊 𝙏𝙃𝙀 𝙈𝙀𝙎𝙎𝘼𝙂𝙀 𝙁𝙍𝙊𝙈 𝙏𝙃𝙀 𝙋𝙀𝙍𝙎𝙊𝙉 𝙔𝙊𝙐 𝙒𝘼𝙉𝙏 𝙏𝙊 𝘽𝙀 𝙔𝙊𝙐𝙍 𝙋𝘼𝙍𝙏𝙉𝙀𝙍`, fkontak, m);
    }

    try {
        if (text) {
            var user = number + '@s.whatsapp.net';
        } else if (m.quoted.sender) {
            var user = conn.getName(m.quoted.sender);
        } else if (m.mentionedJid) {
            var user = number + '@s.whatsapp.net';
        }
    } catch (e) {
        console.error(e);
    } finally {
        let users = m.isGroup ? participants.find(v => areJidsSameUser(v.jid == user)) : {};
        let yo = conn.getName(m.sender);
        let tu = conn.getName(who);

        if (!users) {
            return await conn.reply(m.chat, `${fg}𝙉𝙊 𝙎𝙀 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝙊 𝘼 𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼, 𝘿𝙀𝘽𝙀 𝘿𝙀 𝙀𝙎𝙏𝘼𝙍 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙏𝙃𝙀 𝙋𝙀𝙍𝙎𝙊𝙉 𝙒𝘼𝙎 𝙉𝙊𝙏 𝙁𝙊𝙐𝙉𝘿, 𝙏𝙃𝙀𝙔 𝙈𝙐𝙎𝙏 𝘽𝙀 𝙄𝙉 𝙏𝙃𝙄𝙎 𝙂𝙍𝙊𝙐𝙋`, fkontak, m);
        }

        if (user === m.sender) {
            return await conn.reply(m.chat, `${fg}𝙐𝙎𝙏𝙀𝘿 𝙈𝙄𝙎𝙈𝙊 𝙉𝙊 𝙋𝙐𝙀𝘿𝙀 𝙎𝙀𝙍 𝙋𝘼𝙍𝙀𝙅𝘼\n\n𝙔𝙊𝙐 𝙔𝙊𝙐𝙍𝙎𝙀𝙇𝙁 𝘾𝘼𝙉𝙉𝙊𝙏 𝘽𝙀 𝘼 𝙋𝘼𝙍𝙏𝙉𝙀𝙍`, fkontak, m);
        }

        if (user === conn.user.jid) {
            return await conn.reply(m.chat, `${fg}𝙔𝙊 𝙉𝙊 𝙋𝙐𝙀𝘿𝙊 𝙎𝙀𝙍 𝙎𝙐 𝙋𝘼𝙍𝙀𝙅𝘼 😹\n\n𝙒𝙄𝙏𝙃 𝙈𝙀 𝙔𝙊𝙐 𝘾𝘼𝙉𝙉𝙊𝙏 𝘽𝙀 𝘼 𝘾𝙊𝙐𝙋𝙇𝙀`, fkontak, m);
        }

        if (!global.db.data.users[m.sender]) {
            return await conn.reply(m.chat, `${fg}𝙐𝙨𝙩𝙚𝙙 𝙣𝙤 𝙚𝙨𝙩𝙖 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙙𝙤.\n\n𝙔𝙤𝙪 𝙖𝙧𝙚 𝙣𝙤𝙩 𝙧𝙚𝙜𝙞𝙨𝙩𝙚𝙧𝙚𝙙.`, fkontak, m);
        }

        if (!global.db.data.users[user]) {
            return await conn.reply(m.chat, `𝙀𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙣𝙤 𝙚𝙭𝙞𝙨𝙩𝙚 𝙚𝙣 𝙡𝙖 𝙗𝙖𝙨𝙚 𝙙𝙚 𝙙𝙖𝙩𝙤𝙨.\n\n𝙏𝙝𝙚 𝙪𝙨𝙚𝙧 𝙙𝙤𝙚𝙨 𝙣𝙤𝙩 𝙚𝙭𝙞𝙨𝙩 𝙞𝙣 𝙩𝙝𝙚 𝙙𝙖𝙩𝙖𝙗𝙖𝙨𝙚.`, fkontak, m);
        }

        if (global.db.data.users[user].pasangan != m.sender) {
            return await conn.reply(m.chat, `${fg}𝙀𝙇𝙇𝘼/𝙀𝙇 𝙉𝙊 𝙀𝙎 𝙏𝙐 𝙋𝘼𝙍𝙀𝙅𝘼\n\n𝙃𝙀/𝙎𝙃𝙀 𝙄𝙎 𝙉𝙊𝙏 𝙔𝙊𝙐𝙍 𝙋𝘼𝙍𝙏𝙉𝙀𝙍`, fkontak, m);
        }

        if (global.db.data.users[m.sender].pasangan != user) {
            global.db.data.users[m.sender].pasangan = user;
            return await conn.reply(m.chat, `${eg}𝙁𝙀𝙇𝙄𝘾𝙄𝘿𝘼𝘿𝙀𝙎!!! @${user.split('@')[0]} 𝙖𝙝𝙤𝙧𝙖 𝙚𝙨 𝙩𝙪 𝙣𝙪𝙚𝙫𝙖 𝙥𝙖𝙧𝙚𝙟𝙖 💖\n\n𝘾𝙊𝙉𝙂𝙍𝘼𝙏𝙐𝙇𝘼𝙏𝙄𝙊𝙉𝙎!!! @${user.split('@')[0]} 𝙞𝙨 𝙣𝙤𝙬 𝙮𝙤𝙪𝙧 𝙣𝙚𝙬 𝙥𝙖𝙧𝙩𝙣𝙚𝙧 💖`, m, { mentions: [user] });
        } else {
            global.db.data.users[m.sender].pasangan = '';
            return await conn.reply(m.chat, `${eg}@${user.split('@')[0]} 𝙖𝙝𝙤𝙧𝙖 𝙚𝙨 𝙩𝙪 𝙣𝙪𝙚𝙫𝙤 𝙚𝙭 💔\n\n@${user.split('@')[0]} 𝙞𝙨 𝙣𝙤𝙬 𝙮𝙤𝙪𝙧 𝙣𝙚𝙬 𝙚𝙭 💔`, m, { mentions: [user] });
        }
    }
}

handler.command = /^(accept|aceptar|Aceptar|Accept|ACCEPT)$/i;
handler.group = true;
handler.botAdmin = true;
handler.register = true;

export default handler;
