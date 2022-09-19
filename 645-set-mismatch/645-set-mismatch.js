/**
 * @param {number[]} nums
 * @return {number[]}
 */

const findErrorNums = function (nums) {
  let i = 0
  const n = nums.length

  while (i < n) {
    let correctIdx = nums[i] - 1
    if (nums[i] !== nums[correctIdx]) {
      swap(nums, i, correctIdx)
    } else {
      i++
    }
  }
  // search for first missing number
  for (let index = 0; index < n; index++) {
    if (nums[index] !== index + 1) {
      return [nums[index], index + 1]
    }
  }

  return [-1, -1]
}

const swap = (nums, first, second) => {
  let temp = nums[first]
  nums[first] = nums[second]
  nums[second] = temp
}