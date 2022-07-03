/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/** 
 * nums[i] + nums[j] + nums[k] == 0
 * nums[j] + nums[k] == 0 - nums[i]
 
 sum = nums[left] + nums[right]
 
 
 Case 1: sum > target
 
 
 Case 2: sum < target
 
 
 Case 3: sum == target
 Found a solution!
 
 */

var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const results = [];
    for(let i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        const target = 0 - nums[i];
        let left = i + 1;
        let right = nums.length - 1;
        while(right > left) {
            const sum = nums[left] + nums[right]
            if(sum > target) {
            // add code here
                right--;
            } else if(sum < target) {
                // add code here
                left++;
            } else {
                // add code here
                results.push([nums[i], nums[left], nums[right]]);
                while(nums[left] === nums[left + 1]) left++;
                while(nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            }
        }
        
    }
    
    return results;
};