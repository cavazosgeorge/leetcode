/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        
        if (nums[mid] === target) return mid;
        
        if (target < nums[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    
    return -1;
}