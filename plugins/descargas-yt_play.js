import { WAConnection, MessageType, Mimetype, ButtonsMessage } from '@adiwajshing/baileys'
import fetch from 'node-fetch'
import yts from 'yt-search'
import ytdl from 'ytdl-core'
import axios from 'axios'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'

const conn = new WAConnection()

conn.on('open', () => {
    console.log('Connected to WhatsApp')
    console.log('Credentials:', conn.base64EncodedAuthInfo())
})

conn.connect()

let handler = async (m) => {
    let { command, args, text } = m

    if (!text) throw 'Debes escribir el nombre de una canción o video'

    const yt_play = await search(args.join(" "))
    let additionalText = ''
    if (command === 'play') { 
        additionalText = '𝐀𝐮𝐝𝐢𝐨'
    } else if (command === 'play2') {
        additionalText = '𝐕𝐢𝐝𝐞𝐨'
    }

    let captionvid = `
        𝑻𝑰𝑻𝑼𝑳𝑶
        ${yt_play[0].title}

        𝑷𝑼𝑩𝑳𝑰𝑪𝑨𝑫𝑶
        ${yt_play[0].ago}

        𝑫𝑼𝑹𝑨𝑪𝑰𝑶𝑵
        ${secondString(yt_play[0].duration.seconds)}

        𝑽𝑰𝑺𝑻𝑨𝑺
        ${MilesNumber(yt_play[0].views)}

        𝑼𝑹𝑳
        𖤍 ${yt_play[0].url}
    `

    const buttons = [
        { buttonId: 'audio', buttonText: { displayText: 'Audio' }, type: 1 },
        { buttonId: 'video', buttonText: { displayText: 'Video' }, type: 1 }
    ]

    const buttonMessage = {
        contentText: captionvid,
        footerText: 'Elige una opción:',
        buttons: buttons,
        headerType: 1
    }

    await conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)

    conn.on('chat-update', async (chat) => {
        if (!chat.hasNewMessage) return
        if (!chat.messages) return
        if (chat.key && chat.key.remoteJid == 'status@broadcast') return

        const m = chat.messages.all()[0]

        if (m.message.buttonsResponseMessage) {
            const selectedButton = m.message.buttonsResponseMessage.selectedButtonId

            if (selectedButton === 'audio') {
                // Lógica para enviar el audio
                await sendAudio(conn, m, yt_play[0].url, yt_play[0].title)
            } else if (selectedButton === 'video') {
                // Lógica para enviar el video
                await sendVideo(conn, m, yt_play[0].url, yt_play[0].title)
            }
        }
    })
}

const sendAudio = async (conn, m, url, title) => {
    try {
        const yt = await youtubedl(url).catch(async _ => await youtubedlv2(url))
        const dl_url = await yt.audio['128kbps'].download()
        await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: 'audio/mpeg' }, { quoted: m })
    } catch (error) {
        console.error(error)
    }
}

const sendVideo = async (conn, m, url, title) => {
    try {
        const yt = await youtubedl(url).catch(async _ => await youtubedlv2(url))
        const dl_url = await yt.video['360p'].download()
        await conn.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4', caption: title }, { quoted: m })
    } catch (error) {
        console.error(error)
    }
}

async function search(query, options = {}) {
    const search = await yts.search({ query, hl: "es", gl: "ES", ...options })
    return search.videos
}

function MilesNumber(number) {
    const exp = /(\d)(?=(\d{3})+(?!\d))/g
    const rep = "$1."
    let arr = number.toString().split(".")
    arr[0] = arr[0].replace(exp, rep)
    return arr[1] ? arr.join(".") : arr[0]
}

function secondString(seconds) {
    seconds = Number(seconds)
    var d = Math.floor(seconds / (3600 * 24))
    var h = Math.floor((seconds % (3600 * 24)) / 3600)
    var m = Math.floor((seconds % 3600) / 60)
    var s = Math.floor(seconds % 60)
    var dDisplay = d > 0 ? d + (d == 1 ? " día, " : " días, ") : ""
    var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " horas, ") : ""
    var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " minutos, ") : ""
    var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " segundos") : ""
    return dDisplay + hDisplay + mDisplay + sDisplay
}
