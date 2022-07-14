/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const numsMap = {}; // to store numbers and their indices
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (target - num in numsMap) {
      return [numsMap[target - num], i];
    }
      
    numsMap[nums[i]] = i;
  }
    
  return [];
}