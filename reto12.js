/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
  const calculador = {
    '*': 1,
    'o': 5,
    '^': 10,
    '#': 50,
    '@': 100
  }
  let operacion = 0;
  for (let n = 0; n < ornaments.length; n++) {
    let valor1 = calculador[ornaments[n]];
    let valor2 = calculador[ornaments[n + 1]] || 0;
    if (!valor1) {
      return valor1;
    }
    if (valor1 >= valor2) {
      operacion += valor1;
      continue;
    }
    operacion -= valor1;


  }
  return operacion;
}