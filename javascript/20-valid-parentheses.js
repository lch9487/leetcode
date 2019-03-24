/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const mapping = {
    "}": "{",
    "]": "[",
    ")": "("
  };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    if (mapping.hasOwnProperty(char)) {
      const topElement = stack.length === 0 ? "#" : stack.pop();

      if (topElement !== mapping[char]) return false;
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};
