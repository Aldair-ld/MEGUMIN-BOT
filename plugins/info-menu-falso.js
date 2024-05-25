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
let menu = `¡HOLA! 👋🏻 • ${fantasy}${conn.user.jid == global.conn.user.jid ? '' : `\n║˚₊·˚₊· ͟͟͞͞➳* *_𝙼𝚎𝚗𝚌𝚑𝚊 - 𝚂𝚎𝚗𝚔𝚞_* 𝑺𝒖𝒃 𝑩𝒐𝒕 ⇢ wa.me/+${global.conn.user.jid.split`@`[0]}`}
╭「➻❥𝙼𝚎𝚗𝚌𝚑𝚊 - 𝚂𝚎𝚗𝚔𝚞➻❥」
┃➯👋🏻 *HOLA: ⁨${taguser}*
┃➯📅 *FECHA ACTUAL:* \`${formatDate}\`
︎├──────────⋆
┃❮❮❮ *CREADOR OFC* ❱❱❱
wa.me/+51925015528

┃ INFO SOBRE EL BOT
︎╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「➻❥ *Estadísticas* ➻❥」
├➽ *${lenguajeCD['smsBotonM6']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM6']().slice(1).toLowerCase()} »* ${emoji} || ${user.exp - min}/${xp}
├➽ *📃Experiencia:* ${exp}
├➽ *🛡Rango:* ${role}
├➽ *💎Diamantes:* ${limit}
├➽ *🧑🏻‍💻𝙼𝚎𝚗𝚌𝚑𝚊-Coins:* ${money}
├➽ *💵dolares:* ${joincount}
├➽ ${lenguajeCD['smsBotonM7']().charAt(0).toUpperCase() + lenguajeCD['smsBotonM7']().slice(1).toLowerCase()} »* ${user.premiumTime > 0 ? '✅' : '❌ _' + usedPrefix + 'pase premium_'}
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *ACERCA DE:📝*
├➽ *.join <se une el bot a tu grupo>*
├➽ *.logos <menu de logos>*
├➽ *.link <de del grupo actual>*
├➽ *.menu2 <audios del bot>*
├➽ *.animes [imagenes]*
├➽ *.grupos <grupos del creador>*
├➽ *.owner [creador]*
├➽ *.enable [Opciones para admin"s]*
├➽ *.hidetag <texto>
├➽ *.tagall*
├➽ *.shop [tienda]*
├➽ *.reporte [reportar cmd con errores]*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *JUEGOS* 🎮
├➽ *tictactoe <nombre de la sala>*
├➽ *.Mates <modo>*
├➽ *.ppt <papel/piedra/tijera>*
├➽ *.gay* <@tag> [perfil gay]*
├➽ *.doxear <@tag>*
├➽ *.Top <ejemplo: <.top pendejos>*
├➽ *.love <@tag>*
├➽ *.pvp <@tag>*
├➽ *.juego [piedra/papel/tijera]*
├➽ *.acertijo*
├➽ *.formarpareja [parejas ramdon]*
├➽ *.slot [ruleta]*
︎╰───────────────
✫᭢━━━━━━━━━᭥✫᭢
╭──「❥ *CHATGPT* 📡
├➽ *.ia *<Chatgpt>*
├➽ *.ia2 <Regenerador de imágenes>*
├➽ *.iavoz <respuesta con audio>*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭──「❥ *REGISTRO* 🧑🏻‍💻
├➽ *.reg <nombre.edad>*
├➽ *.unreg <número de serie>*
├➽ *.mysn <Tú número de serie>*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *STICKERS* ❥」
├➽ *.s*
├➽ *.sticker*
├➽ *.stickersearch <buscador de 📦 de stickers>
├➽ *.sermoverbg [sticker sin fondo]*
├➽ *.scircle [sticker circular]*
├➽ *.emojimix ☺&😈*
├➽ *.attp*
├➽ *.dados*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *FUN* 🤖
├➽ *.lolice @tag*
├➽ *.simpcard @tag*
├➽ *.hornycard <licencia virtual FUN>*
├➽ *.estúpido @tag*
├➽ *.meme*
├➽ *.toimg*
├➽ *.mp3 <vídeo a Audio>*
├➽ *.readvo*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *PREMIUM* 🏆 
├➽ *.join <se une el bot a tu grupo>* 
├➽ *.mediafire <link>*
├➽ *.ia2 <Regenerador de imágenes*
├➽ *.horario <de todos los países>*
︎╰────────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *MAKER* ❥」
├➽ *.lolivid*
├➽ *.loli*
├➽ *.neko*
├➽ *.waifu*
├➽ *.messi*
├➽ *.cr7*
├➽ *.kpop*
├➽ *.blackpink*
├➽ *.cat*
├➽ *.wallpaper*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *GRUPO*  ❥」
├➽ *.promote @tag*
├➽ *.demote @tag*
├➽ *.infogp <info del grupo>*
├➽ *.hidetag*
├➽ *.afk <razón>
├➽ *.delete*
├➽ *.warn @tag*
├➽ *.unwarn @tag*
├➽ *.ban @tag*
├➽ *.unban @tag*
├➽ *.kick @tag*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *TRANSFERENCIA"S*
├➽ *.transferjoincount <cantidad>* @tag
├➽ *.transferlimit <cantidad>* @tag
├➽ *.transferxp <cantidad>* @tag
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *ECONOMÍA Y RECOMPENSAS* ❥」
├➽ *.minar*
├➽ *.minar2*
├➽ *.minar3*
├➽ *.claim*
├➽ *.coffer*
├➽ *.bal* 
├➽ *.busyall*
├➽ *.bus <cantidad>* 
├➽ *.buyall*
├➽ *.buy <cantidad>*
├➽ *.dolares*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *REACCIONES* ❥」
├➽ *.kiss <tag>*
├➽ *.pat* <tag>*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭──「❥ *DESCARGAS ⎙*
├➽ *.wikipedia <busqueda>*
├➽ *.animeinfo <nombre>*
├➽ *.audio* <nombre de la música>
├➽ *.video* <nombre del video>
├➽ *.ytmp3 <url>
├➽ *.ytmp4 <url>*
├➽ *.tiktok* <link>
├➽ *.mediafire <link>*
├➽ *.twitter*
├➽ *.google*
├➽ *.ytbuscar*
├➽ *.gdrive*
╰────────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *TOOLS* 🧑🏻‍💻
├➽ *.hd <imagen>*
├➽ *.calculadora*
├➽ *.perfil*
├➽ *.clima*
├➽ *.styletext <texto>
├➽ *.covid*
├➽ *.horario*
︎╰────────────────╯
 *\`©ALDAIR-OFC\`*`.trim()
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
