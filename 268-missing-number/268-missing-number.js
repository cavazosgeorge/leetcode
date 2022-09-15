/**
 * @param {number[]} nums
 * @return {number}
 */
// const missingNumber = (nums) => {
//     let result = new Array(nums.length + 1).fill(-1);
    
//     for (const num of nums) {
//         result[num] = num;
//     }
    
//     return result.indexOf(-1);
// }


// solution #2
const missingNumber = (nums) => {
    let i = 0, j = null;
    const n = nums.length;
    
    while (i < nums.length) {
        j = nums[i];
        if (nums[i] < n && nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]; // perform swap
        } else {
            i += 1;
        }
    }
    
    // find the first number missing from its index, that will be our number
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }
    
    return n;
}