

/**
 * @param {string} filename 
 * @returns {string}
*/

function decodeFilename(filename) {
  let numero = filename.split('_')[0];
  let nameAux = filename.replace(numero + '_', '');
  let nameError = nameAux.split('.')[2];
  return nameAux.replace('.' + nameError, '');
}
console.log(decodeFilename('2023122512345678_sleighDesign.png.grinchwa'));
// ➞ "sleighDesign.png");