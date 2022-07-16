/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const triplets = [];
    for (let i = 0; i < nums.length; i++) {
        // SKIP SAME ELEMENT TO AVOID DUPLICATE TRIPLETS
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        searchPair(nums, -nums[i], i + 1, triplets);
    }

    return triplets;
}

const searchPair = function(nums, targetSum, left, triplets) {
    let right = nums.length - 1; // END INDEX
    while (left < right) {
        const currentSum = nums[left] + nums[right] 
        if (currentSum === targetSum) { // FOUND THE TRIPLET
            triplets.push([-targetSum, nums[left], nums[right]]);
            left++;
            right--;
            while (left < right && nums[left] === nums[left - 1]) { 
                left++; //SKIP SAME ELEMENT TO AVOID DUPLICATE TRIPLETS
            }
            while (left < right && nums[right] === nums[right + 1]) {
                right--; // SKIP SAME ELEMENT TO AVOID DUPLICATE TRIPLETS
            }
        } else if (targetSum > currentSum) {
            left++; // NEED PAIR WITH BIGGER SUM
        } else {
            right--; // NEED PAIR WITH SMALLER SUM
        }
    }
}