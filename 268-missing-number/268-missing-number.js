/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
    let result = new Array(nums.length + 1).fill(-1);
    
    for (const num of nums) {
        result[num] = num;
    }
    
    return result.indexOf(-1);
}