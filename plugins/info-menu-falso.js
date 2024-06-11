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
            m.react('💮') 
let menu = `
╭──────༺♡༻──────╮
   𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙾 𝙰𝙻 𝙼𝙴𝙽𝚄 𝙳𝙴  

   ♡ 𝐌𝐄𝐆𝐔𝐌𝐈𝐍 - 𝐁𝐎𝐓 ♡
╰──────༺♡༻──────╯

 • ${fantasy}${conn.user.jid == global.conn.user.jid ? '' : `\n ♡ 𝐌𝐄𝐆𝐔𝐌𝐈𝐍 - 𝐁𝐎𝐓 ♡ 𝑺𝒖𝒃 𝑩𝒐𝒕 ⇢ wa.me/+${global.conn.user.jid.split`@`[0]}`}

➯ *HOLA: ⁨${taguser}*
➯ *FECHA ACTUAL:* \`${formatDate}\`


𝙲𝙰𝙽𝙰𝙻:  https://whatsapp.com/channel/0029VafZvB6J3jv3qCnqNu3x

𝙲𝚁𝙴𝙰𝙳𝙾𝚁: https://wa.me/+51925015528


╭──────༺♡༻──────╮
         *ESTADISTICAS*
         
➢ 🎱 𝙽𝙸𝚅𝙴𝙻 ${emoji} || ${user.exp - min}/${xp}
➢ 🥇 𝙴𝚇𝙿𝙴𝚁𝙸𝙴𝙽𝙲𝙸𝙰  ➪ ${exp}
➢  ♠ 𝚁𝙰𝙽𝙶𝙾 ➪ ${role}
➢ 💎 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂 ➪ ${limit}
➢ ✨ 𝙼𝙴𝙶𝚄𝙲𝙾𝙸𝙽𝚂 ➪ ${money}
➢ 💵 𝙳𝙾𝚕𝙰𝚁𝙴𝚂  ➪ ${joincount}
➢ 👑 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 ➪ ${user.premiumTime > 0 ? '✅' : '❌ _' + usedPrefix + 'pase premium_'}

╰──────༺♡༻──────╯

╭──────༺♡༻──────╮
        INFO SOBRE EL BOT

.terminosycondiciones
.grupos
.estado
.infobot
.speed
.donar
.owner

╰──────༺♡༻──────╯

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
╭──────༺♡༻──────╮
    REPORTAR COMANDOS

.reporte texto 

╰──────༺♡༻──────╯



╭──────༺♡༻──────╮
   SER USUARIO PREMIUM

.listapremium | listprem
.pase premium

╰──────༺♡༻──────╯



╭──────༺♡༻──────╮
                 JUEGOS

.mates noob   
.ppt @tag
.ttt nombre de tu sala
.deltt salir de la sala
.topgays
.topotakus
.toppajer@s
.topput@s
.topintegrantes
.toplindos
.topfamosos
.topparejas
.gay @tag
.gay2 nombre @tag
.lesbiana @tag
.pajero @tag
.pajera @tag
.puto @tag
.puta @tag
.love @tag
.rata @tag
.doxear @tag
.apostar cantidad
.formarpareja
.verdad
.reto 

╰──────༺♡༻──────╯



╭──────༺♡༻──────╮
       CONFIGURACIONES

.on : off bienvenida 
.on : off avisos 
.on : off autonivel
.on : off restringir 
.on : off antillamar
.on : off publico 
.on : off autovisto
.on : off temporal
.on : off stickers
.on : off autosticker
.on : off reacciones
.on : off audios 
.on : off modocaliente
.on : off antitoxicos
.on : off antiver
.on : off delete
.on : off antifake
.on : off antilink
.on : off antilink2
.on : off antitiktok
.on : off antiyoutube
.on : off antitelegram
.on : off antifacebook
.on : off antiinstagram
.on : off pconly
.on : off gconly

╰──────༺♡༻──────╯



╭──────༺♡༻──────╮
             DESCARGAS

 .imagen texto
 .pinterest texto
 .wallpaper texto
 .play texto 
 .play2 texto
 .ytmp3 link
 .ytmp4 link 
 .pdocaudio link
 .pdocvieo link
 .tiktok link
 .mediafire link
 .consejo
 .morse codificar texto
 .morse decodificar morse
 .fraseromantica
 .historia
 
╰──────༺♡༻──────╯



╭──────༺♡༻──────╮
       CHATS ANONIMOS

.start
.next
.leave

╰──────༺♡༻──────╯



╭──────༺♡༻──────╮
   COMANDOS DE GRUPOS

 .add numero 
 .sacar | ban | kick @tag
 .grupo abrir
 .grupo cerrar
 .daradmin @tag
 .quitar @tag
 .banchat
 .unbanchat
 .banuser @tag
 .unbanuser @tag
 .admins texto
 .invocar texto
 .tagall texto
 .hidetag texto
 .infogrupo
 .grupotiempo cantidad
 .advertencia @tag
 .deladvertencia @tag
 .enlace link 
 .newnombre texto
 .newdesc texto
 .setwelcome texto de bienvenida
 .setbye texto de despedida 
 .nuevoenlace

╰──────༺♡༻──────╯



╭──────༺♡༻──────╮
        CONVERTIDORES

 .img sticker
 .toanime texto
 .tovn audio o video
 .tovideo audios 
 .tourl
 .toenlace video o audio 
 .tts texto 

╰──────༺♡༻──────╯



╭──────༺♡༻──────╮
                EFECTOS

.simpcard @tag
.hornycard @tag
.lolice @tag
.ytcomment texto
.itssostupid

╰──────༺♡༻──────╯



╭──────༺♡༻──────╮
                RANDOM

.chica
.chico
.cristianoronaldo
.messi
.meme
.meme2
.itzy
.blackpink
.lolivid
.loli
.navidad
.ppcouple
.neko
.waifu
.chiho
.elaina
.eba
.cosplay

╰──────༺♡༻──────╯



╭──────༺♡༻──────╮
     EFECTOS DE AUDIOS

.bass
.blown
.deep
.earrape
.fast
.fat
.nightcore
.reverse
.robot
.slow
.smooth
.tupai

╰──────༺♡༻──────╯



╭──────༺♡༻──────╮
              ECONOMIA

.pase premium
.pass premium
.listapremium
.tranferir tipo cantidad @tag
.dar tipo cantidad @tag
.enviar tipo cantidad @tag
.balance 
.cartera
.experiencia
.top 
.nivel
.rol
.inventario
.aventura
.caza
.pescar
.animales
.alimentos 
.curar
.buy
.sell
.verificar
.perfil
.myns
.unreg número de serie
.minardiamantes
.minarexperiencia
.minar : minar2 : minar3
.reclamar 
.cadahora
.cadasemana
.cadames
.cofre
.trabajar

╰──────༺♡༻──────╯



╭──────༺♡༻──────╮
                 OWNER

.autoadmin
.grouplist
.chetar
.addowner @tag
.delowner @tag
.block @tag
.unblock @tag
.msg texto
.banchat
.unbanchat
.banuser @tag
.unbanuser @tag
.dardiamantes @tag cantidad 
.añadirxp @tag cantidad 
.bc texto
.bcchats texto
.bcgc texto
.bcgc2 audio
.bcgc2 video
.bcgc2 imagen 
.bcbot texto
.restart
.update
.banlist
.addprem @tag
.addprem2 @tag
.addprem3 @tag
.addprem4 @tag
.delprem @tag
.listcmd
.setppbot
.addcmd texto
.delcmd
.saveimage
.viewimage

╰──────༺♡༻──────╯




╭──────༺♡༻──────╮
ESO ES TODOS LOS COMANDOS
╰──────༺♡༻──────╯

█▒▒▒▒▒▒▒▒▒10%
████▒▒▒▒▒▒30%
█████▒▒▒▒▒50%
████████▒▒80%
██████████100%

ALDAIR`.trim()
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
