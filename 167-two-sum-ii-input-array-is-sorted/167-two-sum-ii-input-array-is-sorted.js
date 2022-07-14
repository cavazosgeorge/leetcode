/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const nums = {};
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        let seek = target - num;
        if (seek in nums) {
            return [nums[seek] - 1, i + 1];
        }
        
        nums[num] = i + 2;
    }
    
    return [];
};
