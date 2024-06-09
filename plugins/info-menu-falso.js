import fs from 'fs'
import moment from 'moment-timezone'
import ct from 'countries-and-timezones'
import fetch from 'node-fetch'
import { parsePhoneNumber } from 'libphonenumber-js'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let pp = gataVidMenu.getRandom()
let pareja = global.db.data.users[m.sender].pasangan 
let fkontak55 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}}
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
const numberToEmoji = { "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣", "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣", }
let lvl = level
let emoji = Array.from(lvl.toString()).map((digit) => numberToEmoji[digit] || "❓").join("")

let fechaMoment, formatDate, nombreLugar, ciudad = null
const phoneNumber = '+' + m.sender
const parsedPhoneNumber = parsePhoneNumber(phoneNumber)
const countryCode = parsedPhoneNumber.country
const countryData = ct.getCountry(countryCode)
const timezones = countryData.timezones
const zonaHoraria = timezones.length > 0 ? timezones[0] : 'UTC'
moment.locale(mid.idioma_code)
let lugarMoment = moment().tz(zonaHoraria)
if (lugarMoment) {
fechaMoment = lugarMoment.format('llll [(]a[)]')
formatDate = fechaMoment.charAt(0).toUpperCase() + fechaMoment.slice(1) 
nombreLugar = countryData.name
const partes = zonaHoraria.split('/')
ciudad = partes[partes.length - 1].replace(/_/g, ' ')
}else{
lugarMoment = moment().tz('America/Lima')
fechaMoment = lugarMoment.format('llll [(]a[)]')
formatDate = fechaMoment.charAt(0).toUpperCase() + fechaMoment.slice(1) 
nombreLugar = 'America'
ciudad = 'Lima'
}      
            m.react('📚') 
let menu = `𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙾 𝙰 

♡ 𝐌𝐄𝐆𝐔𝐌𝐈𝐍 - 𝐁𝐎𝐓 ♡

𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂  ☟

 • ${fantasy}${conn.user.jid == global.conn.user.jid ? '' : `\n║˚₊·˚₊· ͟͟͞͞➳* *_MEGUMIN - BOT_* 𝑺𝒖𝒃 𝑩𝒐𝒕 ⇢ wa.me/+${global.conn.user.jid.split`@`[0]}`}
」
┃➯ *HOLA: ⁨${taguser}*
┃➯ *FECHA ACTUAL:* \`${formatDate}\`


𝙲𝙰𝙽𝙰𝙻:  https://whatsapp.com/channel/0029VafZvB6J3jv3qCnqNu3x

𝙲𝚁𝙴𝙰𝙳𝙾𝚁: https://wa.me/+51925015528


✿❀   𝙴𝚂𝚃𝙰𝙳𝙸𝚂𝚃𝙸𝙲𝙰𝚂   ❀✿＊
├➽ *${lenguajeCD['smsBotonM6']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM6']().slice(1).toLowerCase()} »* ${emoji} || ${user.exp - min}/${xp}
➢ 𝙴𝚇𝙿𝙴𝚁𝙸𝙴𝙽𝙲𝙸𝙰 ➪ ${exp}
➢ 𝚁𝙰𝙽𝙶𝙾 ➪ ${role}
➢ 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂 ➪ ${limit}
➢ 𝙼𝙴𝙶𝚄𝙲𝙾𝙸𝙽𝚂 ➪ ${money}
➢ 𝙳𝙾𝚕𝙰𝚁𝙴𝚂 ➪ ${joincount}
├➽ ${lenguajeCD['smsBotonM7']().charAt(0).toUpperCase() + lenguajeCD['smsBotonM7']().slice(1).toLowerCase()} »* ${user.premiumTime > 0 ? '✅' : '❌ _' + usedPrefix + 'pase premium_'}


＊✿❀   𝙸𝙽𝙵𝙾 𝚂𝙾𝙱𝚁𝙴 𝙴𝙻 𝙱𝙾𝚃   ❀✿＊

➼  .𝚝𝚎𝚛𝚖𝚒𝚗𝚘𝚜𝚢𝚌𝚘𝚗𝚍𝚒𝚌𝚒𝚘𝚗𝚎𝚜 
➼  .𝚐𝚛𝚞𝚙𝚘𝚜
➼  .𝚎𝚜𝚝𝚊𝚍𝚘 
➼  .𝚒𝚗𝚏𝚘𝚋𝚘𝚝
➼  .𝚜𝚙𝚎𝚎𝚍
➼  .𝚍𝚘𝚗𝚊𝚛 
➼  .𝚘𝚠𝚗𝚎𝚛


＊✿❀   𝚁𝙴𝙿𝙾𝚁𝚃𝙴 𝙳𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂   ❀✿＊

.𝚛𝚎𝚙𝚘𝚛𝚝𝚎 𝚝𝚎𝚡𝚝𝚘 


＊✿❀   𝚂𝙴𝚁 𝚄𝚂𝚄𝙰𝚁𝙸@ 𝙿𝚁𝙴𝙼𝙸𝚄𝙼   ❀✿＊

.𝚕𝚒𝚜𝚝𝚊𝚙𝚛𝚎𝚖𝚒𝚞𝚖 | 𝚕𝚒𝚜𝚝𝚙𝚛𝚎𝚖
.𝚙𝚊𝚜𝚎 𝚙𝚛𝚎𝚖𝚒𝚞𝚖 | 𝚙𝚊𝚜𝚜 𝚙𝚛𝚎𝚖𝚒𝚞𝚖 

＊✿❀   𝙹𝚄𝙴𝙶𝙾𝚂   ❀✿＊

.𝚖𝚊𝚝𝚎𝚜 𝚗𝚘𝚘𝚋  |  𝚎𝚊𝚜𝚢  |  𝚖𝚎𝚍𝚒𝚞𝚖  |  𝚑𝚊𝚛𝚍  |  𝚎𝚡𝚝𝚛𝚎𝚖𝚎  |  𝚒𝚖𝚙𝚘𝚜𝚜𝚒𝚋𝚕𝚎  |  𝚒𝚖𝚙𝚘𝚜𝚜𝚒𝚋𝚕𝚎𝟸
.𝚙𝚙𝚝 @𝚝𝚊𝚐 | 𝚙𝚒𝚎𝚍𝚛𝚊 : 𝚙𝚊𝚙𝚎𝚕 : 𝚝𝚒𝚓𝚎𝚛𝚊 
.𝚝𝚝𝚝 𝚗𝚘𝚖𝚋𝚛𝚎 𝚍𝚎 𝚝𝚞 𝚜𝚊𝚕𝚊 | 𝚝𝚛𝚎𝚜 𝚎𝚗 𝚛𝚊𝚢𝚊 
.𝚍𝚎𝚕𝚝𝚝𝚝 | 𝚜𝚊𝚕𝚒𝚛 𝚍𝚎 𝚕𝚊 𝚜𝚊𝚕𝚊 
.𝚝𝚘𝚙𝚐𝚊𝚢𝚜
.𝚝𝚘𝚙𝚘𝚝𝚊𝚔𝚞𝚜
.𝚝𝚘𝚙𝚙𝚊𝚓𝚎𝚛@𝚜
.𝚝𝚘𝚙𝚙𝚞𝚝𝚊@𝚜
.𝚝𝚘𝚙𝚒𝚗𝚝𝚎𝚐𝚛𝚊𝚗𝚝𝚎𝚜 
.𝚝𝚘𝚙𝚕𝚒𝚗𝚍𝚘𝚜 
.𝚝𝚘𝚙𝚏𝚊𝚖𝚘𝚜𝚘𝚜
.𝚝𝚘𝚙𝚙𝚊𝚛𝚎𝚓𝚊𝚜
.𝚐𝚊𝚢 @𝚝𝚊𝚐 
.𝚐𝚊𝚢𝟸 𝚗𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
.𝚕𝚎𝚜𝚋𝚒𝚊𝚗𝚊 @𝚝𝚊𝚐
.𝚙𝚊𝚓𝚎𝚛𝚘 @𝚝𝚊𝚐 
.𝚙𝚊𝚓𝚎𝚛𝚊 @𝚝𝚊𝚐
.𝚙𝚞𝚝𝚘 @𝚝𝚊𝚐
.𝚙𝚞𝚝𝚊 @𝚝𝚊𝚐 
.𝚕𝚘𝚟𝚎 @𝚝𝚊𝚐
𝚛𝚊𝚝𝚊 @𝚝𝚊𝚐
.𝚍𝚘𝚡𝚎𝚊𝚛 @𝚝𝚊𝚐 
.𝚊𝚙𝚘𝚜𝚝𝚊𝚛 | 𝚜𝚕𝚘𝚝 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍 
.𝚏𝚘𝚛𝚖𝚊𝚛𝚙𝚊𝚛𝚎𝚓𝚊
.𝚟𝚎𝚛𝚍𝚊𝚍
.𝚛𝚎𝚝𝚘

＊✿❀   𝙲𝙾𝙽𝙵𝙸𝙶𝚄𝚁𝙰𝙲𝙸𝙾𝙽   ❀✿＊

.𝚘𝚗 : 𝚘𝚏𝚏 𝚋𝚒𝚎𝚗𝚟𝚎𝚗𝚒𝚍𝚊 | 𝚠𝚎𝚕𝚌𝚘𝚖𝚎
.𝚘𝚗 : 𝚘𝚏𝚏 𝚊𝚟𝚒𝚜𝚘𝚜 | 𝚍𝚎𝚝𝚎𝚌𝚝
.𝚘𝚗 : 𝚘𝚏𝚏 𝚊𝚞𝚝𝚘𝚗𝚒𝚟𝚎𝚕 | 𝚊𝚞𝚝𝚘𝚕𝚎𝚟𝚎𝚕𝚞𝚙
.𝚘𝚗 : 𝚘𝚏𝚏 𝚛𝚎𝚜𝚝𝚛𝚒𝚗𝚐𝚒𝚛 | 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝
.𝚘𝚗 : 𝚘𝚏𝚏 𝚊𝚗𝚝𝚒𝚕𝚕𝚊𝚖𝚊𝚛 | 𝚊𝚗𝚝𝚒𝚌𝚊𝚕𝚕
.𝚘𝚗 : 𝚘𝚏𝚏 𝚙𝚞𝚋𝚕𝚒𝚌𝚘 | 𝚙𝚞𝚋𝚕𝚒𝚌
.𝚘𝚗 : 𝚘𝚏𝚏 𝚊𝚞𝚝𝚘𝚟𝚒𝚜𝚝𝚘 | 𝚊𝚞𝚝𝚘𝚛𝚎𝚊𝚍
.𝚘𝚗 : 𝚘𝚏𝚏 𝚝𝚎𝚖𝚙𝚘𝚛𝚊𝚕
.𝚘𝚗 : 𝚘𝚏𝚏 𝚜𝚝𝚒𝚌𝚔𝚎𝚛𝚜 
.𝚘𝚗 : 𝚘𝚏𝚏 𝚊𝚞𝚝𝚘𝚜𝚝𝚒𝚌𝚔𝚎𝚛
.𝚘𝚗 : 𝚘𝚏𝚏 𝚛𝚎𝚊𝚌𝚌𝚒𝚘𝚗𝚎𝚜 | 𝚛𝚎𝚊𝚌𝚝𝚒𝚘𝚗
.𝚘𝚗 : 𝚘𝚏𝚏 𝚊𝚞𝚍𝚒𝚘𝚜
.𝚘𝚗 : 𝚘𝚏𝚏 𝚖𝚘𝚍𝚘𝚌𝚊𝚕𝚒𝚎𝚗𝚝𝚎 | 𝚖𝚘𝚍𝚘𝚑𝚘𝚛𝚗𝚢
.𝚘𝚗 : 𝚘𝚏𝚏 𝚊𝚗𝚝𝚒𝚝𝚘𝚡𝚒𝚌𝚘𝚜 | 𝚊𝚗𝚝𝚒𝚝𝚘𝚡𝚒𝚌
.𝚘𝚗 : 𝚘𝚏𝚏 𝚊𝚗𝚝𝚒𝚟𝚎𝚛 | 𝚊𝚗𝚝𝚒𝚟𝚒𝚎𝚠𝚘𝚗𝚌𝚎
.𝚘𝚗 : 𝚘𝚏𝚏 𝚊𝚗𝚝𝚒𝚎𝚕𝚒𝚖𝚒𝚗𝚊𝚛 | 𝚊𝚗𝚝𝚒𝚍𝚎𝚕𝚎𝚝𝚎
.𝚘𝚗 : 𝚘𝚏𝚏 𝚊𝚗𝚝𝚒𝚗𝚝𝚎𝚛𝚗𝚊𝚌𝚒𝚘𝚗𝚊𝚕 | 𝚊𝚗𝚝𝚒𝚏𝚊𝚔𝚎
.𝚘𝚗 : 𝚘𝚏𝚏 𝚊𝚗𝚝𝚒𝚎𝚗𝚕𝚊𝚌𝚎 | 𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔
.𝚘𝚗 : 𝚘𝚏𝚏 𝚊𝚗𝚝𝚒𝚎𝚗𝚕𝚊𝚌𝚎𝟸 | 𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔𝟸
.𝚘𝚗 : 𝚘𝚏𝚏 𝚊𝚗𝚝𝚒𝚝𝚒𝚔𝚝𝚘𝚔 | 𝚊𝚗𝚝𝚒𝚝𝚔
.𝚘𝚗 : 𝚘𝚏𝚏 𝚊𝚗𝚝𝚒𝚢𝚘𝚞𝚝𝚞𝚋𝚎 | 𝚊𝚗𝚝𝚒𝚢𝚝
.𝚘𝚗 : 𝚘𝚏𝚏 𝚊𝚗𝚝𝚒𝚝𝚎𝚕𝚎𝚐𝚛𝚊𝚖 | 𝚊𝚗𝚝𝚒𝚝𝚎𝚕
.𝚘𝚗 : 𝚘𝚏𝚏 𝚊𝚗𝚝𝚒𝚏𝚊𝚌𝚎𝚋𝚘𝚘𝚔 | 𝚊𝚗𝚝𝚒𝚏𝚋
.𝚘𝚗 : 𝚘𝚏𝚏 𝚊𝚗𝚝𝚒𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖 | 𝚊𝚗𝚝𝚒𝚐
.𝚘𝚗 : 𝚘𝚏𝚏 𝚊𝚗𝚝𝚒𝚝𝚠𝚒𝚝𝚝𝚎𝚛 | 𝚊𝚗𝚝𝚒𝚝𝚠
.𝚘𝚗 : 𝚘𝚏𝚏 𝚜𝚘𝚕𝚘𝚙𝚛𝚒𝚟𝚊𝚍𝚘𝚜 | 𝚙𝚌𝚘𝚗𝚕𝚢
.𝚘𝚗 : 𝚘𝚏𝚏 𝚜𝚘𝚕𝚘𝚐𝚛𝚞𝚙𝚘𝚜 | 𝚐𝚌𝚘𝚗𝚕𝚢


＊✿❀   𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚂   ❀✿＊

 .𝚒𝚖𝚊𝚐𝚎𝚗 | 𝚒𝚖𝚊𝚐𝚎 𝚝𝚎𝚡𝚝𝚘
 .𝚙𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝 | 𝚍𝚕𝚙𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝 𝚝𝚎𝚡𝚝𝚘
 .𝚠𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛|𝚠𝚙 𝚝𝚎𝚡𝚝𝚘
 .𝚙𝚕𝚊𝚢 | 𝚙𝚕𝚊𝚢𝟸 𝚝𝚎𝚡𝚝𝚘 𝚘 𝚕𝚒𝚗𝚔
 .𝚙𝚕𝚊𝚢.𝟷 𝚝𝚎𝚡𝚝𝚘 𝚘 𝚕𝚒𝚗𝚔
 .𝚙𝚕𝚊𝚢.𝟸 𝚝𝚎𝚡𝚝𝚘 𝚘 𝚕𝚒𝚗𝚔 
 .𝚢𝚝𝚖𝚙𝟹 | 𝚢𝚝𝚊 𝚕𝚒𝚗𝚔
 .𝚢𝚝𝚖𝚙𝟺 | 𝚢𝚝𝚟 𝚕𝚒𝚗𝚔
 .𝚙𝚍𝚘𝚌𝚊𝚞𝚍𝚒𝚘 | 𝚢𝚝𝚊𝚍𝚘𝚌 𝚕𝚒𝚗𝚔
 .𝚙𝚍𝚘𝚌𝚟𝚒𝚎𝚘 | 𝚢𝚝𝚟𝚍𝚘𝚌 𝚕𝚒𝚗𝚔
 .𝚝𝚠 |𝚝𝚠𝚍𝚕 | 𝚝𝚠𝚒𝚝𝚝𝚎𝚛 𝚕𝚒𝚗𝚔
 .𝚏𝚊𝚌𝚎𝚋𝚘𝚘𝚔 | 𝚏𝚋 𝚕𝚒𝚗𝚔
 .𝚝𝚒𝚔𝚝𝚘𝚔 𝚕𝚒𝚗𝚔
 .𝚝𝚒𝚔𝚝𝚘𝚔𝚒𝚖𝚊𝚐𝚎𝚗 | 𝚝𝚝𝚒𝚖𝚊𝚐𝚎𝚗 𝚕𝚒𝚗𝚔
 .𝚖𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎 | 𝚍𝚕𝚖𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎 𝚕𝚒𝚗𝚔
 .𝚌𝚕𝚘𝚗𝚊𝚛𝚎𝚙𝚘 | 𝚐𝚒𝚝𝚌𝚕𝚘𝚗𝚎 𝚕𝚒𝚗𝚔
 .𝚌𝚘𝚗𝚜𝚎𝚓𝚘
 .𝚖𝚘𝚛𝚜𝚎 𝚌𝚘𝚍𝚒𝚏𝚒𝚌𝚊𝚛 𝚝𝚎𝚡𝚝𝚘
 .𝚖𝚘𝚛𝚜𝚎 𝚍𝚎𝚌𝚘𝚍𝚒𝚏𝚒𝚌𝚊𝚛 𝚖𝚘𝚛𝚜𝚎
 .𝚏𝚛𝚊𝚜𝚎𝚛𝚘𝚖𝚊𝚗𝚝𝚒𝚌𝚊
 .𝚑𝚒𝚜𝚝𝚘𝚛𝚒𝚊


＊✿❀   𝙲𝙷𝙰𝚃𝚂 𝙰𝙽𝙾𝙽𝙸𝙼𝙾𝚂   ❀✿＊

.𝚜𝚝𝚊𝚛𝚝
.𝚗𝚎𝚡𝚝
.𝚕𝚎𝚊𝚟𝚎


＊✿❀   𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂   ❀✿＊

 .𝚊𝚍𝚍 𝚗𝚞𝚖𝚎𝚛𝚘
 .𝚜𝚊𝚌𝚊𝚛 | 𝚋𝚊𝚗 | 𝚔𝚒𝚌𝚔  @𝚝𝚊𝚐
 .𝚐𝚛𝚞𝚙𝚘 𝚊𝚋𝚛𝚒𝚛 : 𝚌𝚎𝚛𝚛𝚊𝚛
 .𝚐𝚛𝚘𝚞𝚙 𝚘𝚙𝚎𝚗 : 𝚌𝚕𝚘𝚜𝚎
 .𝚍𝚊𝚛𝚊𝚍𝚖𝚒𝚗 | 𝚙𝚛𝚘𝚖𝚘𝚝𝚎 @𝚝𝚊𝚐
 .𝚚𝚞𝚒𝚝𝚊𝚛 | 𝚍𝚎𝚖𝚘𝚝𝚎 @𝚝𝚊𝚐
 .𝚋𝚊𝚗𝚌𝚑𝚊𝚝
 .𝚞𝚗𝚋𝚊𝚗𝚌𝚑𝚊𝚝
 .𝚋𝚊𝚗𝚞𝚜𝚎𝚛 @𝚝𝚊𝚐
 .𝚞𝚗𝚋𝚊𝚗𝚞𝚜𝚎𝚛 @𝚝𝚊𝚐
 .𝚊𝚍𝚖𝚒𝚗𝚜 𝚝𝚎𝚡𝚝𝚘
 .𝚒𝚗𝚟𝚘𝚌𝚊𝚛 𝚝𝚎𝚡𝚝𝚘
 .𝚝𝚊𝚐𝚊𝚕𝚕 𝚝𝚎𝚡𝚝𝚘
 .𝚑𝚒𝚍𝚎𝚝𝚊𝚐 𝚝𝚎𝚡𝚝𝚘
 .𝚒𝚗𝚏𝚘𝚐𝚛𝚞𝚙𝚘 | 𝚒𝚗𝚏𝚘𝚐𝚛𝚘𝚞𝚙
 .𝚐𝚛𝚞𝚙𝚘𝚝𝚒𝚎𝚖𝚙𝚘 | 𝚐𝚛𝚘𝚞𝚙𝚝𝚒𝚖𝚎 𝙲𝚊𝚗𝚝𝚒𝚍𝚊𝚍
 .𝚊𝚍𝚟𝚎𝚛𝚝𝚎𝚗𝚌𝚒𝚊 @𝚝𝚊𝚐
 .𝚍𝚎𝚕𝚊𝚍𝚟𝚎𝚛𝚝𝚎𝚗𝚌𝚒𝚊 @𝚝𝚊𝚐
 .𝚍𝚎𝚕𝚠𝚊𝚛𝚗 @𝚝𝚊𝚐
 .𝚌𝚛𝚎𝚊𝚛𝚟𝚘𝚝𝚘 | 𝚜𝚝𝚊𝚛𝚝𝚟𝚘𝚝𝚘 𝚝𝚎𝚡𝚝𝚘
 .𝚜𝚒𝚟𝚘𝚝𝚊𝚛 | 𝚞𝚙𝚟𝚘𝚝𝚎
 .𝚗𝚘𝚟𝚘𝚝𝚊𝚛 | 𝚍𝚎𝚟𝚘𝚝𝚎
 .𝚟𝚎𝚛𝚟𝚘𝚝𝚘𝚜 | 𝚌𝚎𝚔𝚟𝚘𝚝𝚘
 .𝚍𝚎𝚕𝚟𝚘𝚝𝚘 | 𝚍𝚎𝚕𝚎𝚝𝚎𝚟𝚘𝚝𝚘
 .𝚎𝚗𝚕𝚊𝚌𝚎 | 𝚕𝚒𝚗𝚔
 .𝚗𝚎𝚠𝚗𝚘𝚖𝚋𝚛𝚎 | 𝚗𝚞𝚎𝚟𝚘𝚗𝚘𝚖𝚋𝚛𝚎 𝚝𝚎𝚡𝚝𝚘
 .𝚗𝚎𝚠𝚍𝚎𝚜𝚌 | 𝚍𝚎𝚜𝚌𝚛𝚒𝚙𝚌𝚒𝚘𝚗 𝚝𝚎𝚡𝚝𝚘
 .𝚜𝚎𝚝𝚠𝚎𝚕𝚌𝚘𝚖𝚎 | 𝚋𝚒𝚎𝚗𝚟𝚎𝚗𝚒𝚍𝚊 𝚝𝚎𝚡𝚝𝚘
 .𝚜𝚎𝚝𝚋𝚢𝚎 | 𝚍𝚎𝚜𝚙𝚎𝚍𝚒𝚍𝚊 𝚝𝚎𝚡𝚝𝚘
 .𝚗𝚞𝚎𝚟𝚘𝚎𝚗𝚕𝚊𝚌𝚎 | 𝚛𝚎𝚜𝚎𝚝𝚕𝚒𝚗𝚔


＊✿❀   𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝙳𝙾𝚁𝙴𝚂   ❀✿＊

 .𝚝𝚘𝚒𝚖𝚐 | 𝚒𝚖𝚐 | 𝚓𝚙𝚐 𝚜𝚝𝚒𝚌𝚔𝚎𝚛
 .𝚝𝚘𝚊𝚗𝚒𝚖𝚎 | 𝚓𝚊𝚍𝚒𝚊𝚗𝚒𝚖𝚎 𝚏𝚘𝚝𝚘
 .𝚝𝚘𝚟𝚗 | 𝚟𝚗 𝚟𝚒𝚍𝚎𝚘 𝚘 𝚊𝚞𝚍𝚒𝚘
 .𝚝𝚘𝚟𝚒𝚍𝚎𝚘 𝚊𝚞𝚍𝚒𝚘
 .𝚝𝚘𝚞𝚛𝚕 𝚟𝚒𝚍𝚎𝚘, 𝚒𝚖𝚊𝚐𝚎𝚗
 .𝚝𝚘𝚎𝚗𝚕𝚊𝚌𝚎  𝚟𝚒𝚍𝚎𝚘, 𝚒𝚖𝚊𝚐𝚎𝚗 𝚘 𝚊𝚞𝚍𝚒𝚘
 .𝚝𝚝𝚜 𝚎𝚜 𝚝𝚎𝚡𝚝𝚘


＊✿❀   𝙴𝙵𝙴𝙲𝚃𝙾𝚂   ❀✿＊

 .𝚜𝚒𝚖𝚙𝚌𝚊𝚛𝚍 @𝚝𝚊𝚐
 .𝚑𝚘𝚛𝚗𝚢𝚌𝚊𝚛𝚍 @𝚝𝚊𝚐
 .𝚕𝚘𝚕𝚒𝚌𝚎 @𝚝𝚊𝚐
 .𝚢𝚝𝚌𝚘𝚖𝚖𝚎𝚗𝚝 𝚝𝚎𝚡𝚝𝚘
 .𝚒𝚝𝚜𝚜𝚘𝚜𝚝𝚞𝚙𝚒𝚍


＊✿❀   𝚁𝙰𝙽𝙳𝙾𝙼   ❀✿＊

 .𝚌𝚑𝚒𝚌𝚊
 .𝚌𝚑𝚒𝚌𝚘
 .𝚌𝚛𝚒𝚜𝚝𝚒𝚊𝚗𝚘𝚛𝚘𝚗𝚊𝚕𝚍𝚘
 .𝚖𝚎𝚜𝚜𝚒
 .𝚖𝚎𝚖𝚎
 .𝚖𝚎𝚖𝚎𝟸
 .𝚒𝚝𝚣𝚢
 .𝚋𝚕𝚊𝚌𝚔𝚙𝚒𝚗𝚔
 .𝚔𝚙𝚘𝚙 𝚋𝚕𝚊𝚌𝚔𝚙𝚒𝚗𝚔 : 𝚎𝚡𝚘 : 𝚋𝚝𝚜
 .𝚕𝚘𝚕𝚒𝚟𝚒𝚍
 .𝚕𝚘𝚕𝚒
 .𝚗𝚊𝚟𝚒𝚍𝚊𝚍
 .𝚙𝚙𝚌𝚘𝚞𝚙𝚕𝚎
 .𝚗𝚎𝚔𝚘
 .𝚠𝚊𝚒𝚏𝚞_
 .𝚌𝚑𝚒𝚑𝚘
 .𝚎𝚕𝚊𝚒𝚗𝚊
 .𝚎𝚋𝚊
 .𝚎𝚖𝚒𝚕𝚒𝚊
 .𝚌𝚘𝚜𝚙𝚕𝚊𝚢


＊✿❀   𝙴𝙵𝙴𝙲𝚃𝙾𝚂 𝙳𝙴 𝙰𝚄𝙳𝙸𝙾   ❀✿＊

 .𝚋𝚊𝚜𝚜
 .𝚋𝚕𝚘𝚠𝚗
 .𝚍𝚎𝚎𝚙
 .𝚎𝚊𝚛𝚛𝚊𝚙𝚎
 .𝚏𝚊𝚜𝚝
 .𝚏𝚊𝚝
 .𝚗𝚒𝚐𝚑𝚝𝚌𝚘𝚛𝚎
 .𝚛𝚎𝚟𝚎𝚛𝚜𝚎
 .𝚛𝚘𝚋𝚘𝚝
 .𝚜𝚕𝚘𝚠
 .𝚜𝚖𝚘𝚘𝚝𝚑
 .𝚝𝚞𝚙𝚊𝚒


＊✿❀   𝙴𝙲𝙾𝙽𝙾𝙼𝙸𝙰   ❀✿＊

  .𝚙𝚊𝚜𝚎 𝚙𝚛𝚎𝚖𝚒𝚞𝚖
  .𝚙𝚊𝚜𝚜 𝚙𝚛𝚎𝚖𝚒𝚞𝚖
  .𝚕𝚒𝚜𝚝𝚊𝚙𝚛𝚎𝚖𝚒𝚞𝚖 | 𝚕𝚒𝚜𝚝𝚙𝚛𝚎𝚖
  .𝚝𝚛𝚊𝚗𝚜𝚏𝚎𝚛 𝚝𝚒𝚙𝚘 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍 @𝚝𝚊𝚐
  .𝚍𝚊𝚛 𝚝𝚒𝚙𝚘 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍 @𝚝𝚊𝚐
  .𝚎𝚗𝚟𝚒𝚊𝚛 𝚝𝚒𝚙𝚘 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍 @𝚝𝚊𝚐
  .𝚋𝚊𝚕𝚊𝚗𝚌𝚎
  .𝚌𝚊𝚛𝚝𝚎𝚛𝚊 | 𝚠𝚊𝚕𝚕𝚎𝚝
  .𝚎𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚒𝚊 | 𝚎𝚡𝚙
  .𝚝𝚘𝚙 | 𝚕𝚋 | 𝚕𝚎𝚊𝚍𝚎𝚛𝚋𝚘𝚊𝚛𝚍
  .𝚗𝚒𝚟𝚎𝚕 | 𝚕𝚎𝚟𝚎𝚕 | 𝚕𝚟𝚕
  .𝚛𝚘𝚕 | 𝚛𝚊𝚗𝚐𝚘
  .𝚒𝚗𝚟𝚎𝚗𝚝𝚊𝚛𝚒𝚘 | 𝚒𝚗𝚟𝚎𝚗𝚝𝚘𝚛𝚢
  .𝚊𝚟𝚎𝚗𝚝𝚞𝚛𝚊 | 𝚊𝚍𝚟𝚎𝚗𝚝𝚞𝚛𝚎
  .𝚌𝚊𝚣𝚊 | 𝚌𝚊𝚣𝚊𝚛 | 𝚑𝚞𝚗𝚝
  .𝚙𝚎𝚜𝚌𝚊𝚛 | 𝚏𝚒𝚜𝚑𝚒𝚗𝚐
  .𝚊𝚗𝚒𝚖𝚊𝚕𝚎𝚜
  .𝚊𝚕𝚒𝚖𝚎𝚗𝚝𝚘𝚜
  .𝚌𝚞𝚛𝚊𝚛 | 𝚑𝚎𝚊𝚕
  .𝚋𝚞𝚢
  .𝚜𝚎𝚕𝚕
  .𝚟𝚎𝚛𝚒𝚏𝚒𝚌𝚊𝚛 | 𝚛𝚎𝚐𝚒𝚜𝚝𝚛𝚊𝚛
  .𝚙𝚎𝚛𝚏𝚒𝚕 | 𝚙𝚛𝚘𝚏𝚒𝚕𝚎
  .𝚖𝚢𝚗𝚜
  .𝚞𝚗𝚛𝚎𝚐 𝚗𝚞𝚖𝚎𝚛𝚘 𝚍𝚎 𝚜𝚎𝚛𝚒𝚎
  .𝚖𝚒𝚗𝚊𝚛𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜 | 𝚖𝚒𝚗𝚊𝚛𝚐𝚎𝚖𝚊𝚜
  .𝚖𝚒𝚗𝚊𝚛𝚐𝚊𝚝𝚊𝚌𝚘𝚒𝚗𝚜 | 𝚖𝚒𝚗𝚊𝚛𝚌𝚘𝚒𝚗𝚜
  .𝚖𝚒𝚗𝚊𝚛𝚎𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚒𝚊 | 𝚖𝚒𝚗𝚊𝚛𝚎𝚡𝚙
  .𝚖𝚒𝚗𝚊𝚛 : 𝚖𝚒𝚗𝚊𝚛𝟸 : 𝚖𝚒𝚗𝚊𝚛𝟹
  .𝚛𝚎𝚌𝚕𝚊𝚖𝚊𝚛 | 𝚛𝚎𝚐𝚊𝚕𝚘 | 𝚌𝚕𝚊𝚒𝚖
  .𝚌𝚊𝚍𝚊𝚑𝚘𝚛𝚊 | 𝚑𝚘𝚞𝚛𝚕𝚢
  .𝚌𝚊𝚍𝚊𝚜𝚎𝚖𝚊𝚗𝚊 | 𝚜𝚎𝚖𝚊𝚗𝚊𝚕 | 𝚠𝚎𝚎𝚔𝚕𝚢
  .𝚌𝚊𝚍𝚊𝚖𝚎𝚜 | 𝚖𝚎𝚜 | 𝚖𝚘𝚗𝚝𝚑𝚕𝚢
  .𝚌𝚘𝚏𝚛𝚎 | 𝚊𝚋𝚛𝚒𝚛𝚌𝚘𝚏𝚛𝚎 | 𝚌𝚘𝚏𝚏𝚎𝚛
  .𝚝𝚛𝚊𝚋𝚊𝚓𝚊𝚛 | 𝚠𝚘𝚛𝚔


＊✿❀   𝙾𝚆𝙽𝙴𝚁   ❀✿＊

 .𝚊𝚞𝚝𝚘𝚊𝚍𝚖𝚒𝚗
 .𝚐𝚛𝚘𝚞𝚙𝚕𝚒𝚜𝚝
 .𝚌𝚑𝚎𝚝𝚊𝚛
 .𝚋𝚕𝚘𝚌𝚔𝚕𝚒𝚜𝚝
 .𝚊𝚍𝚍𝚘𝚠𝚗𝚎𝚛 <@𝚝𝚊𝚐>
 .𝚍𝚎𝚕𝚘𝚠𝚗𝚎𝚛 <@𝚝𝚊𝚐
 .𝚋𝚕𝚘𝚌𝚔 <@𝚝𝚊𝚐
 .𝚞𝚗𝚋𝚕𝚘𝚌𝚔 <@𝚝𝚊𝚐
 .𝚖𝚜𝚐 <𝚝𝚎𝚡𝚝𝚘>
 .𝚋𝚊𝚗𝚌𝚑𝚊𝚝
 .𝚞𝚗𝚋𝚊𝚗𝚌𝚑𝚊𝚝
 .𝚋𝚊𝚗𝚞𝚜𝚎𝚛 <@𝚝𝚊𝚐>
 .𝚞𝚗𝚋𝚊𝚗𝚞𝚜𝚎𝚛 @𝚝𝚊𝚐_
 .𝚍𝚊𝚛𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜 <@𝚝𝚊𝚐>
 _.𝚊𝚗̃𝚊𝚍𝚒𝚛𝚡𝚙 *<@𝚝𝚊𝚐> 
 .𝚋𝚊𝚗𝚞𝚜𝚎𝚛 <@𝚝𝚊𝚐>
 .𝚋𝚌 <𝚝𝚎𝚡𝚝𝚘>
 .𝚋𝚌𝚌𝚑𝚊𝚝𝚜 <𝚝𝚎𝚡𝚝𝚘>
 .𝚋𝚌𝚐𝚌 <𝚝𝚎𝚡𝚝𝚘>
 .𝚋𝚌𝚐𝚌𝟸 <𝚊𝚞𝚍𝚒𝚘>
 .𝚋𝚌𝚐𝚌𝟸 <𝚟𝚒𝚍𝚎𝚘>
 .𝚋𝚌𝚐𝚌𝟸 <𝚒𝚖𝚊𝚐𝚎𝚗>
 .𝚋𝚌𝚋𝚘𝚝 <𝚝𝚎𝚡𝚝𝚘>
.𝚌𝚕𝚎𝚊𝚛𝚝𝚙𝚖
.𝚛𝚎𝚜𝚝𝚊𝚛𝚝
.𝚞𝚙𝚍𝚊𝚝𝚎
.𝚋𝚊𝚗𝚕𝚒𝚜𝚝
.𝚊𝚍𝚍𝚙𝚛𝚎𝚖 *<@𝚝𝚊𝚐> 
.𝚊𝚍𝚍𝚙𝚛𝚎𝚖𝟸 <@𝚝𝚊𝚐>
.𝚊𝚍𝚍𝚙𝚛𝚎𝚖𝟹 <@𝚝𝚊𝚐>
.𝚊𝚍𝚍𝚙𝚛𝚎𝚖𝟺 <@𝚝𝚊𝚐>
.𝚍𝚎𝚕𝚙𝚛𝚎𝚖 <@𝚝𝚊𝚐>
.𝚕𝚒𝚜𝚝𝚌𝚖𝚍
.𝚜𝚎𝚝𝚙𝚙𝚋𝚘𝚝
.𝚊𝚍𝚍𝚌𝚖𝚍 *<𝚝𝚎𝚡𝚝𝚘> 
.𝚍𝚎𝚕𝚌𝚖𝚍
.𝚜𝚊𝚟𝚎𝚒𝚖𝚊𝚐𝚎
.𝚟𝚒𝚎𝚠𝚒𝚖𝚊𝚐𝚎`.trim()
await conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', menu, fkontak55)

} catch (e) {
await m.reply(lenguajeCD['smsMalError3']() + '\n*' + lenguajeCD.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeCD.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeCD.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeCD['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(prueba00|m|menú|Menú|menu|Menu|menucompleto|menubot|\?)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
