/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = function (nums) {
  let i = 0

  while (i < nums.length) {
    let correctIdx = nums[i] - 1
    if (nums[i] !== nums[correctIdx]) {
      swap(nums, i, correctIdx)
    } else {
      i++
    }
  }

  let duplicateNumbers = []

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== index + 1) {
      duplicateNumbers.push(nums[index])
    }
  }

  return duplicateNumbers
}

const swap = (nums, first, second) => {
  let temp = nums[first]
  nums[first] = nums[second]
  nums[second] = temp
}