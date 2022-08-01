/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const set = {};
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (target - num in set) {
            return [set[target - num], i];
        }
        
        set[nums[i]] = i;
    }
    
    return [-1, -1];
};