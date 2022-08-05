/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(numbers, target) {
//     const nums = {};
//     for (let i = 0; i < numbers.length; i++) {
//         let num = numbers[i];
//         let potentialMatch = target - num;
//         if (potentialMatch in nums) {
//             return [nums[potentialMatch] - 1, i + 1];
//         }
        
//         nums[num] = i + 2;
//     }
    
//     return [];
// };

var twoSum = function(numbers, target) {
    let left = 0, right = numbers.length - 1;
    while (left < right) {
        const currentSum = numbers[left] + numbers[right];
        if (currentSum === target) {
            return [left + 1, right + 1];
        } 
        if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
}