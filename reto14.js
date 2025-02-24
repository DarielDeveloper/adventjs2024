/**
 * @param {number[]} reindeer
 * @param {number[]} stables
 * @returns {number}
 */
function minMovesToStables(reindeer, stables) {
  let cantM = 0;
  const renderSort = reindeer.sort();
  const stablesSort = stables.sort();
  for (let i = 0; i < renderSort.length; i++) {
    cantM += Math.abs(renderSort[i] - stablesSort[i]);
  }
  return cantM;
}

//console.log(minMovesToStables([2, 6, 9], [3, 8, 5]));
//console.log(minMovesToStables([5, 15, 10], [8, 18, 12]));
console.log(minMovesToStables([5, 15, 10], [8, 18, 12]));
