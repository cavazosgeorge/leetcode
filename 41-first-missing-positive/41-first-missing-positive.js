/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function (nums) {
  let i = 0
  const n = nums.length

  while (i < n) {
    let correctIdx = nums[i] - 1
    if (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[correctIdx]) {
      // edge case for skipping n
      swap(nums, i, correctIdx)
    } else {
      i++
    }
  }
  // search for first missing number
  for (let index = 0; index < n; index++) {
    if (nums[index] !== index + 1) {
      return index + 1
    }
  }

  return n + 1
}

const swap = (nums, first, second) => {
  let temp = nums[first]
  nums[first] = nums[second]
  nums[second] = temp
}