/*Recibirás un string que contiene letras y paréntesis.
Cada vez que encuentres un par de paréntesis, debes voltear el contenido dentro de ellos.
Si hay paréntesis anidados, resuelve primero los más internos.
Devuelve el string resultante con los paréntesis eliminados, pero con el contenido volteado correctamente.
Nos ha dejado algunos ejemplos:
fixPackages('a(cb)de')
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

fixPackages('a(bc(def)g)h')
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

fixPackages('abc(def(gh)i)jk')
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

fixPackages('a(b(c))e')
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"
 */

/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  let cadena = '';
  let auxCadena = [];
  for (const letra of packages) {
    if (letra == '(') {
      //Utilizo el array aux para guardar la cadena anterior
      auxCadena.push(cadena);
      //Seteo la cadena
      cadena = '';
    }
    else if (letra == ')') {
      //Union de lo auxiliar y lo nuevo pero al revés 
      cadena = auxCadena.pop() + cadena.split('').reverse().join('');
    }
    else {
      cadena += letra;
    }

  }
  return cadena;
}

console.log((fixPackages('a(bc(def)g)h')));


