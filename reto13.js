/** @param {string} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
  let contI = 0;
  let contD = 0;
  let actionM = [];
  let invertM = {
    'L': 'R',
    'R': 'L',
    'U': 'D',
    'D': 'U',
  }

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] == '*') {
      i++;
      actionM.push(moves[i]);
      actionM.push(moves[i]);
    }
    else if (moves[i] == '!') {
      i++;
      actionM.push(invertM[moves[i]]);
    }
    else if (moves[i] == '?') {
      i++;
      let movF = moves[i];
      if (!actionM.includes(movF)) {
        actionM.push(moves[i]);
      }
    }
    else {
      actionM.push(moves[i]);
    }
  }
  for (const m in actionM) {
    if (actionM[m] == 'U') {
      contD++;
    }
    else if (actionM[m] == 'D') {
      contD--;
    }
    else if (actionM[m] == 'R') {
      contI++;
    }
    else {
      contI--;
    }
  }

  if (contD || contI) {
    return [contI, contD]
  }

  return true
}

console.log(isRobotBack('R!U?U'))   // [1, 0]
