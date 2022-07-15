/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let nextElementIdx = 0; // index of next element not 'key'
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        if (current !== val) {
            nums[nextElementIdx] = current;
            nextElementIdx++;
        }
    }
    
    return nextElementIdx;
};