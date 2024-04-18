let media = './media/menus/Menuvid3.mp4'
let handler = async (m, { conn, command }) => {
let fakemek = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616969743@g.us","inviteCode": "m","groupName": "P", "caption": '𝐅𝐚𝐧𝐭𝐚𝐬𝐲𝐁𝐨𝐭-𝐌𝐃', 'jpegThumbnail': null}}}
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `*ESTOS SON LOS GRUPOS OFICIALES*
 𝐌𝐢 𝐂𝐚𝐧𝐚𝐥 𝐨𝐟𝐢𝐜𝐢𝐚𝐥
 *https://whatsapp.com/channel/0029VaWZeyJJENxvi5Q6OQ2q*

⏤͟͟͞͞★꙲⃝͟🌹 ─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🌻❈┉━━━━─
 𝐆𝐫𝐮𝐩𝐨 𝐎𝐟𝐢𝐜𝐢𝐚𝐥
*https://chat.whatsapp.com/CZHOvEJpekOH6qMfwJXTXz*

⏤͟͟͞͞★꙲⃝͟🌹 ─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🌻❈┉━━━━─

*BILL -BOT*
*https://whatsapp.com/channel/0029VaWZeyJJENxvi5Q6OQ2q*

⏤͟͟͞͞★꙲⃝͟🌹 ─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🌻❈┉━━━━─

*BILL - BOT*
⏤͟͟͞͞★꙲⃝͟🌹 *https://chat.whatsapp.com/CZHOvEJpekOH6qMfwJXTXz*

─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🌻❈┉━━━━─`
await conn.sendFile(m.chat, media, 'fantasy.mp4', str, fakemek)}

handler.command = /^linkgc|grupos|gruposfantasy|groupofc$/i
handler.exp = 33

export default handler
