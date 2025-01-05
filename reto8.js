/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 * @symbol { ~ r }
 */
function drawRace(indices, length) {
  let race = '';
  let cont = 0;
  for (let i in indices) {
    cont++;
    race += ' '.repeat(indices.length - cont);
    if (indices[i] < 0) {
      race += '~'.repeat(length + indices[i]) + 'r' + '~'.repeat(Math.abs(indices[i]) - 1);
    } else if (indices[i] > 0) {
      race += '~'.repeat(indices[i]) + 'r' + '~'.repeat(length - indices[i] - 1);
    } else {
      race += '~'.repeat(length);
    }
    race += ' /' + cont;

    if (cont != indices.length) {
      race += '\n';
    }
  }

  return race;
}

console.log(drawRace([0, 5, -3], 10));
