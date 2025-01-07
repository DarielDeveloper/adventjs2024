/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
  const posLocomotoraBoard = board.findIndex(b => b.includes('@'));
  const postFila = board[posLocomotoraBoard].indexOf('@');

  const movimientos = {
    'U': { x: -1, y: 0 },
    'D': { x: 1, y: 0 },
    'R': { x: 0, y: 1 },
    'L': { x: 0, y: -1 },
  }
  const movimiento = movimientos[mov];
  if (!board[movimiento.x + posLocomotoraBoard]) return 'crash'
  const posicion = board[posLocomotoraBoard + movimiento.x][postFila + movimiento.y];

  if (posicion === 'o') return 'crash'
  else if (posicion === '*') return 'eat'
  else {
    return 'none'
  }

}

const board = [
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
];


console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha