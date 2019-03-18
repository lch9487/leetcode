/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const max = Math.pow(2, 31) - 1,
    min = -1 * Math.pow(2, 31);
  let result = 0;

  while (x !== 0) {
    let pop = x % 10;
    x = Math.trunc(x / 10);
    result = result * 10 + pop;
  }

  return result > max || result < min ? 0 : result;
};
