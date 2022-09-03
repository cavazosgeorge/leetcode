/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var runningSum = function(nums) {
//     let total = 0;
//     return nums.map((num) => total += num)
// };


const runningSum = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        nums[i] = nums[i] + nums[i - 1];
    }
    
    return nums;
}