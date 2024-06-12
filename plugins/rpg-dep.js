const acertijos = [
    { pregunta: "¿Qué cosa puede estar vacía y llena al mismo tiempo?", respuesta: "Un guante" },
    { pregunta: "¿Cuántas letras tiene el abecedario?", respuesta: "Once" },
    { pregunta: "¿Qué pesa más, un kilo de algodón o un kilo de plomo?", respuesta: "Ninguno, ambos pesan lo mismo" },
    // Agrega más acertijos aquí
];

// Números de teléfono que no tienen que esperar el tiempo de enfriamiento
const whitelist = [
    "1234567890", // Agrega los números aquí
    "9876543210",
    // Añade más números si es necesario
];

let handler = async (m, { conn, args }) => {
    let user = global.db.data.users[m.sender];
    if (!user) user = global.db.data.users[m.sender] = {};
    let cooldownKey = 'cooldown_' + m.sender;

    let cooldown = args[0] ? parseInt(args[0]) * 60000 : 600000; // Multiplicar por 60000 para convertir minutos a milisegundos

    if (!whitelist.includes(m.sender.split`@`[0]) && Date.now() - (user[cooldownKey] || 0) < cooldown) {
        let time = (cooldown - (Date.now() - (user[cooldownKey] || 0))) / 1000;
        return m.reply(`Debes esperar ${time.toFixed(0)} segundos antes de volver a utilizar este comando.`);
    }

    let acertijo = acertijos[Math.floor(Math.random() * acertijos.length)];

    conn.sendMessage(m.chat, `
*🎩 Acertijo 🎩*

${acertijo.pregunta}

*Responde en el chat en los próximos 30 segundos.*`, 'conversation');

    let msgs = await conn.msgs.wait(m.chat, 30000);
    if (!msgs) return m.reply(`Lo siento, el tiempo se ha agotado. El acertijo era: ${acertijo.respuesta}`);

    user[cooldownKey] = Date.now(); // Actualiza el tiempo del último uso del comando
    global.db.data.users[m.sender] = user;
    db.save();

    if (msgs.text.toLowerCase() == acertijo.respuesta.toLowerCase()) {
        user.banco = (user.banco || 0) + 5;
        conn.reply(m.chat, `¡Felicidades! Has respondido correctamente. Se han añadido 5 diamantes a tu banco.`, m);
    } else {
        m.reply(`Lo siento, tu respuesta es incorrecta. El acertijo era: ${acertijo.respuesta}`);
    }
};
handler.help = ['aumentarbanco <minutos>'];
handler.tags = ['game'];
handler.command = /^aumentarbanco$/i;
handler.group = true;
module.exports = handler;
