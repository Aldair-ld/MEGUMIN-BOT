import { createBoard, placeMines, printHiddenBoard, printRevealedBoard, countAdjacentMines } from '../utils/minesweeperUtils.js'; // Importa las funciones necesarias

let gameSessions = new Map();

async function revealCell(conn, m, x, y, userId) {
  const userSession = gameSessions.get(userId);
  if (userSession.revealedBoard[x][y]) {
    conn.reply(m.chat, 'Esta celda ya ha sido revelada.', m);
  } else if (userSession.gameBoard[x][y] === 'M') {
    userSession.revealedBoard[x][y] = true;
    printRevealedBoard(conn, m, userSession.revealedBoard, userSession.gameBoard, true); // Mostrar tablero con emoji de mina
    conn.reply(m.chat, '¡Has perdido! Has encontrado una mina.', m);

    // Eliminar la sesión de juego del usuario después de perder
    gameSessions.delete(userId);
  } else {
    const adjacentMines = countAdjacentMines(x, y, userSession.gameBoard);
    userSession.revealedBoard[x][y] = true;
    userSession.gameBoard[x][y] = adjacentMines;
    printRevealedBoard(conn, m, userSession.revealedBoard, userSession.gameBoard);

    // Verificar si el usuario ha descubierto más de 5 casillas sin minas
    let revealedCount = 0;
    for (let i = 0; i < userSession.revealedBoard.length; i++) {
      for (let j = 0; j < userSession.revealedBoard[i].length; j++) {
        if (userSession.revealedBoard[i][j] && userSession.gameBoard[i][j] !== 'M') {
          revealedCount++;
        }
      }
    }

    if (revealedCount >= 5 && userSession.gameBoard[x][y] !== 'M') {
      // Aumentar 10 diamantes al usuario
      conn.reply(m.chat, '¡Felicidades! Has descubierto más de 5 casillas sin encontrar una mina. Ganas 10 diamantes.', m);
      // Aumentar diamantes al usuario
      aumentarDiamantes(userId, 10); // Asume que tienes una función para aumentar los diamantes del usuario

      // Eliminar la sesión de juego del usuario después de ganar
      gameSessions.delete(userId);
    }
  }
}

let handler = async (m, { conn }) => {
  // Identificar al usuario
  const userId = m.sender;

  if (!gameSessions.has(userId)) {
    // Si el usuario no tiene una sesión de juego, crea una nueva
    const numRows = 4; // Número de filas
    const numCols = 5; // Número de columnas
    const mineCount = 6; // Cantidad de minas

    // Inicializa el tablero del juego para el usuario
    const userGameBoard = createBoard(numRows, numCols);
    const userRevealedBoard = createBoard(numRows, numCols, false);

    // Coloca minas aleatorias en el tablero
    placeMines(userGameBoard, mineCount);

    // Almacenar el tablero de juego del usuario en la sesión
    gameSessions.set(userId, { gameBoard: userGameBoard, revealedBoard: userRevealedBoard });
  }

  // Obtener el tablero del juego del usuario
  const userSession = gameSessions.get(userId);

  // Muestra el tablero inicialmente oculto para el usuario
  printHiddenBoard(conn, m, userSession.revealedBoard);
};

handler.help = ['buscaminas'];
handler.tags = ['game'];
handler.command = /^(buscaminas)$/i;

handler.before = async (m, { conn }) => {
  // Identificar al usuario
  const userId = m.sender;
  const input = m.text.trim();
  const userSession = gameSessions.get(userId);

  if (/^\d+,\d+$/i.test(input)) {
    const [x, y] = input.split(',').map(Number);
    if (x >= 1 && x <= userSession.gameBoard.length && y >= 1 && y <= userSession.gameBoard[0].length) {
      // Las coordenadas ingresadas por el usuario son válidas
      revealCell(conn, m, x - 1, y - 1, userId);
    } else {
      conn.reply(m.chat, 'Coordenadas inválidas. Debes ingresar números dentro del rango del tablero.', m);
    }
  }
};

export default handler;
