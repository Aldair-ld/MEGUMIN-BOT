

let handler = async (m, { conn, text}) => {

m.reply(`╔╦══• •✠•${wm}•✠ • •══╦╗\n┊\n *😹 ${pickRandom(global.chiste)} 😹*\n┊\n*╚╩══• •✠•${author}•✠ • •══╩╝*`)
}
handler.tags = ['humor']
handler.command = ['chiste']
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

global.chiste = ["CALLA NIÑO MONGOL NO SOY PAYASO PA CONTAR CHISTE OE GIL", "¿Cómo se dice pañuelo en japonés? NO SEEEEEE JAAAAAAA", "ELLA ESTA KCHANDO CON OTROOOO", "MANO ELLA NO TE AMA", "CALLA KCHERA", "OLVIDALA ELLA NO TE AMA", "QUE LE DICE UN PERRO A OTRO PERRO ? GUA JAJAJAJA RIETE P MIRA COMO TU VIEJA APLAUDE DESDE MI CUARTO IMBECIL", "AQUI NO AHI CHISTE ", "TODAS SON PERRAS", "COMO HAGO PARA QUE ME QUIERA PIPIPI", "CONTRATEN A CHUPETIN TRUJILLO GAAAAAAAAAA"]







