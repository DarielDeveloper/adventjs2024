/* Escribe una función que procese este array y devuelva un objeto que organice los juguetes de la siguiente manera:
Las claves del objeto serán las categorías de juguetes.
Los valores serán objetos que tienen como claves los nombres de los juguetes y como valores las cantidades totales de cada juguete en esa categoría.
Si hay juguetes con el mismo nombre en la misma categoría, debes sumar sus cantidades.
Si el array está vacío, la función debe devolver un objeto vacío { }. 

const inventory = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
]
organizeInventory(inventory)
// Resultado esperado:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }

*/
const inventory = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
];
function organizeInventory(inventory) {
  const inventOrder = {};

  for (const articule of inventory) {
    let nameA = articule.name;
    let cantA = articule.quantity;
    if (!inventOrder[articule.category]) {
      inventOrder[articule.category] = { [nameA]: cantA };
    } else {
      if (!inventOrder[articule.category][nameA]) {
        inventOrder[articule.category][nameA] = cantA;
      } else {
        inventOrder[articule.category][nameA] += cantA;
      }
    }
  }
  return inventOrder;
}
organizeInventory(inventory)