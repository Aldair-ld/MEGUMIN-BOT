

let handler = async (m, { conn, text}) => {

m.reply(`╔╦══• •✠•${wm}•✠ • •══╦╗\n┊\n *😹 ${pickRandom(global.chiste)} 😹*\n┊\n*╚╩══• •✠•${author}•✠ • •══╩╝*`)
}
handler.tags = ['humor']
handler.command = ['chiste']
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

global.chiste = ["CALLA NIÑO MONGOL NO SOY PAYASO PA CONTAR CHISTE OE GIL", "¿Cómo se dice pañuelo en japonés? NO SEEEEEE JAAAAAAA", "ELLA ESTA KCHANDO CON OTROOOO", "MANO ELLA NO TE AMA", "CALLA KCHERA", "OLVIDALA ELLA NO TE AMA", "QUE LE DICE UN PERRO A OTRO PERRO ? GUA JAJAJAJA RIETE P MIRA COMO TU VIEJA APLAUDE DESDE MI CUARTO IMBECIL", "AQUI NO AHI CHISTE ", "TODAS SON PERRAS", "A Juanito le dice la maestra: Juanito, ¿qué harías si te estuvieses ahogando en la piscina? Juanito le responde: Me pondría a llorar mucho para desahogarme.", "Hijo, me veo gorda, fea y vieja. ¿Qué tengo hijo, qué tengo? Mamá, tienes toda la razón.", "¿Cómo se dice pelo sucio en chino? Chin cham pu.", "Había una vez un niño tan, tan, tan despistado que... ¡da igual, me he olvidado del chiste!", "Una amiga le dice a otra amiga: ¿Qué tal va la vida de casada? Pues no me puedo quejar, dice ella. ¿O sea que va muy bien, no? No, no me puedo quejar porque mi marido está aquí al lado.", "¿Por qué las focas miran siempre hacia arriba? ¡Porque ahí están los focos!", "Camarero, ese filete tiene muchos nervios. Pues normal, es la primera vez que se lo comen.", "¿Cómo se llama el primo de Bruce Lee? Broco Lee.", "Una madre le dice a su hijo: Jaimito, me ha dicho un pajarito que te drogas. La que te drogas eres tú, que hablas con pajaritos."]







