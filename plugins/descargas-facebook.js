import fg from 'api-dylux';
import fetch from 'node-fetch';
import { savefrom, facebookdl, facebookdlv2 } from '@bochilteam/scraper';
import fbDownloader from 'fb-downloader-scrapper';

let handler = async (m, { conn, args, command, usedPrefix }) => {
  let user = global.db.data.users[m.sender];
  let fkontak = {
    "key": { "participants": "0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" },
    "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }},
    "participant": "0@s.whatsapp.net"
  };

  if (!args[0]) return conn.reply(m.chat, `Ingrese el enlace del video que desee descargar, ejemplo:\n*${usedPrefix + command} https://www.facebook.com/watch?v=636541475139`, fkontak, m);
  if (!args[0].match(/www.facebook.com|fb.watch/g)) return conn.reply(m.chat, `Ingrese un enlace válido de Facebook, ejemplo:\n*${usedPrefix + command} https://www.facebook.com/watch?v=636541475139*`, fkontak, m);

  try {
    await conn.reply(m.chat, `SU VIDEO SE ESTA DESCARGANDO ESPERE UN MOMENTO PORFAVOR `, fkontak, m);

    let res = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkeysapi}&url=${args[0]}`);
    let json = await res.json();
    let videoUrl = json.result[0] || json.result[1];

    if (!videoUrl) throw 'No se pudo obtener el video';

    await conn.sendVideo(m.chat, videoUrl, 'AQUI ESTA SU VIDEO DE FACCEBOK', m);
  } catch (err1) {
    console.log('Error en la API de lolhuman: ' + err1);

    try {
      let res = await fg.fbdl(args[0]);
      let videoUrl = res.data[0].url;

      await conn.sendVideo(m.chat, videoUrl, 'AQUI ESTA SU VIDEO DE FACCEBOK', m);
    } catch (err2) {
      console.log('Error en fg.fbdl: ' + err2);

      try {
        let res = await fbDownloader(args[0]);
        for (let result of res.download) {
          let videoUrl = result.url;
          await conn.sendVideo(m.chat, videoUrl, 'AQUI ESTA SU VIDEO DE FACCEBOK', m);
        }
      } catch (err3) {
        console.log('Error en fbDownloader: ' + err3);

        try {
          let res = await fetch(`https://api.violetics.pw/api/downloader/facebook?apikey=beta&url=${args[0]}`);
          let json = await res.json();
          let videoUrl = json.result.hd.url || json.result.sd.url;

          await conn.sendVideo(m.chat, videoUrl, 'Video de Facebook', m);
        } catch (err4) {
          console.log('Error en Violetics API: ' + err4);

          try {
            let res = await fetch(`https://latam-api.vercel.app/api/facebookdl?apikey=brunosobrino&q=${args[0]}`);
            let json = await res.json();
            let videoUrl = json.video;

            await conn.sendVideo(m.chat, videoUrl, 'Video de Facebook', m);
          } catch (err5) {
            console.log('Error en Latam API: ' + err5);

            try {
              const { result } = await facebookdl(args[0]).catch(async () => await facebookdlv2(args[0])).catch(async () => await savefrom(args[0]));
              for (const { url, isVideo } of result.reverse()) {
                await conn.sendVideo(m.chat, url, 'Video de Facebook', m);
              }
            } catch (err6) {
              console.log('Error en las APIs de respaldo: ' + err6);
              await m.reply(`Algo salió mal, por favor asegúrese de ingresar un enlace válido de Facebook.`);
            }
          }
        }
      }
    }
  }
};

handler.command = /^(facebook|fb|facebookdl|fbdl|facebook2|fb2|facebookdl2|fbdl2|facebook3|fb3|facebookdl3|fbdl3|facebook4|fb4|facebookdl4|fbdl4|facebook5|fb5|facebookdl5|fbdl5)$/i;
handler.limit = 3;

export default handler;
