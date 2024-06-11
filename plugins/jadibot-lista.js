import ws from 'ws';
async function handler(m, { conn: _envio, usedPrefix }) {
const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
function convertirMsADiasHorasMinutosSegundos(ms) {
var segundos = Math.floor(ms / 1000);
var minutos = Math.floor(segundos / 60);
var horas = Math.floor(minutos / 60);
var días = Math.floor(horas / 24);
segundos %= 60;
minutos %= 60;
horas %= 24;
var resultado = "";
if (días !== 0) {
resultado += días + " días, ";
}
if (horas !== 0) {
resultado += horas + " horas, ";
}
if (minutos !== 0) {
resultado += minutos + " minutos, ";
}
if (segundos !== 0) {
resultado += segundos + " segundos";
}
return resultado;
}
const message = users.map((v, index) => `(${index + 1})\n🌷 wa.me/${v.user.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}estado\n* 𝙽𝙾𝙼𝙱𝚁𝙴 :* *${v.user.name || '-'}*\n*𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾 :* ${ v.uptime ? convertirMsADiasHorasMinutosSegundos(Date.now() - v.uptime) : "Desconocido"}`).join('\n\n••••••••••••••••••••••••••••••••••••\n\n');
  const replyMessage = message.length === 0 ? '*NO HAY SUB BOTS DISPONIBLE. VERIFIQUE MÁS TARDE.*' : message;
const totalUsers = users.length;
const responseMessage = `*CARGANDO LA LISTA DE BOTS ACTIVOS*\n\n\n █▒▒▒▒▒▒▒▒▒10%\n ████▒▒▒▒▒▒30%\n █████▒▒▒▒▒50%\n ████████▒▒80%\n ██████████100%\n\n *ESTA ES LA LISTA DE SUBOTS ACTIVOS🌷* \n\n𝚂𝚄𝙱 𝙱𝙾𝚃𝚂 𝙰𝙲𝚃𝙸𝚅𝙾𝚂 : ${totalUsers || '0'}\n\n${replyMessage.trim()}`.trim();
await _envio.sendMessage(m.chat, {text: responseMessage, mentions: _envio.parseMention(responseMessage)}, {quoted: m})}
handler.command = handler.help = ['listjadibot', 'bots', 'subsbots'];
handler.tags = ['jadibot'];
export default handler;
