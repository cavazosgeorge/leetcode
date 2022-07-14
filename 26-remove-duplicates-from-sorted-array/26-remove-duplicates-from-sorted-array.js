/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let nextNonDuplicate = 1;
    
    let i = 0;
    while (i < nums.length) {
        if (nums[nextNonDuplicate - 1] !== nums[i]) {
            nums[nextNonDuplicate] = nums[i];
            nextNonDuplicate += 1;
        }
        
        i += 1;
    }
    
    return nextNonDuplicate;
};