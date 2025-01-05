/*
Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

type indica si es una bota izquierda (I) o derecha (R).
size indica el tamaño de la bota.
Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

organizeShoes(shoes)
// [38, 42]

*/

/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
  const pares = [];
  const objectP = {};
  shoes.forEach(shoe => {
    if (objectP[shoe.size] && objectP[shoe.size].cont > 0) {
      if (objectP[shoe.size].type != shoe.type) {
        pares.push(shoe.size);
        objectP[shoe.size].cont--;
      } else {
        objectP[shoe.size].cont++;
      }

    }
    else {
      objectP[shoe.size] = { 'type': shoe.type, 'cont': 1 }
    }

  });

  return pares;
}
const shoesList = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 38 },

]

console.log(organizeShoes(shoesList));
