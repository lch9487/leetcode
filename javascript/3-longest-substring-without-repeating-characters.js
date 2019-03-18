/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const n = s.length;
  const set = new Set();
  let i = 0,
    j = 0,
    result = 0;

  while (i < n && j < n) {
    if (!set.has(s.charAt(j))) {
      set.add(s.charAt(j++));
      result = Math.max(result, j - i);
    } else {
      set.delete(s.charAt(i++));
    }
  }

  return result;
};
