/**
 * @param {number[]} gifts - The array of gifts to prepare
 * @returns {number[]} An array with the prepared gifts
 */
function prepareGifts(gifts) {
  const giftsSet = Array.from(new Set(gifts));
  return giftsSet.sort((a, b) => a - b);

}