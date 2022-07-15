/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let nextNonDuplicate = 1;
    
    let i = 0;
    while (i < nums.length) {
        const next = nums[nextNonDuplicate - 1];
        const current = nums[i];
        if (next !== current) {
            nums[nextNonDuplicate] = current;
            nextNonDuplicate++;
        }
        
        i++;
    }
    
    return nextNonDuplicate;
};