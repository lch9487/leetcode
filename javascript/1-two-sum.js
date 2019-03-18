/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (obj.hasOwnProperty(complement) && obj[complement] !== i)
      return [i, obj[complement]];
    obj[nums[i]] = i;
  }
};
