/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const mapping = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  };

  const output = [];

  function backtrack(combination, nextDigits) {
    if (nextDigits.length === 0) {
      output.push(combination);
    } else {
      const digit = nextDigits.substring(0, 1);
      const letters = mapping[digit];

      for (let i = 0; i < letters.length; i++) {
        const letter = mapping[digit].substring(i, i + 1);
        backtrack(combination + letter, nextDigits.substring(1));
      }
    }
  }

  if (digits.length !== 0) backtrack("", digits);
  return output;
};
