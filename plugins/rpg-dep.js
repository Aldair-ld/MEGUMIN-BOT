import Minesweeper from '../lib/minesweeper.js'; // Importa la clase Minesweeper desde lib/minesweeper.js

let handler = async (m, { conn, usedPrefix }) => {
    // Mensaje de ayuda
    const helpMessage = `
🔲 *Juego de Minas con Diamantes 💎*

¡Bienvenido al juego de minas con diamantes!

Para comenzar a jugar, simplemente responde con un número del 1 al 32 para seleccionar una casilla.

*Comandos:*
.minas - Comenzar un nuevo juego de minas.

_Ejemplo:_
.minas

*Nota:* Una vez que encuentres una mina, el juego terminará automáticamente y los números revelados se sumarán como diamantes ganados.
    `;

    // Verificar si el comando es ".minas"
    if (!m.text.startsWith(".minas")) {
        return; // No hacer nada si el mensaje no empieza con ".minas"
    }

    // Verificar si el juego ya está en curso para el usuario
    if (conn.game && conn.game[m.sender]) {
        throw `Ya estás jugando un juego de minas. Por favor, termina el juego actual antes de comenzar uno nuevo.`;
    }

    // Crear un nuevo juego de minas
    let game = new Minesweeper(4, 8, 6); // Ejemplo: 4 filas, 8 columnas, 6 minas

    // Inicializar el juego para el usuario actual
    conn.game = conn.game ? conn.game : {};
    conn.game[m.sender] = {
        game: game,
        over: false,
        diamonds: 0,
    };

    // Mostrar el tablero inicial al usuario
    let boardMessage = game.printNumbers(); // Muestra los números ocultos del 1 al 9
    let response = `${boardMessage}\nSelecciona una casilla para revelar su contenido (ej. 4):`;

    // Enviar el mensaje al usuario
    await conn.reply(m.chat, response, m);

    // Manejar la jugada del usuario
    conn.onMessage(m.chat, async (msg) => {
        try {
            // Verificar si el mensaje es un número válido
            if (msg.text && !isNaN(msg.text) && !conn.game[m.sender].over) {
                let column = parseInt(msg.text) - 1; // Convertir el texto a número de columna (ajustar a base 0)
                if (column >= 0 && column < 8) { // Ajustar el límite de columnas según tu configuración de tablero
                    let result = conn.game[m.sender].game.reveal(column);
                    if (result === 'MINE') {
                        conn.game[m.sender].over = true;
                        response = "¡Encontraste una mina! Juego terminado.\n";
                    } else {
                        conn.game[m.sender].diamonds += parseInt(result); // Sumar los números revelados como diamantes ganados
                        boardMessage = conn.game[m.sender].game.printNumbers(); // Actualizar el tablero
                        response = `${boardMessage}\nSelecciona otra casilla (ej. 3):`;
                    }
                    // Enviar respuesta al usuario
                    await conn.reply(m.chat, response, m);
                }
            }
        } catch (error) {
            console.error(error);
            throw `Ha ocurrido un error en el juego de minas. Inténtalo de nuevo.`;
        }
    });
};

handler.help = ['minas'];
handler.tags = ['game'];
handler.command = ['minas'];

export default handler;
