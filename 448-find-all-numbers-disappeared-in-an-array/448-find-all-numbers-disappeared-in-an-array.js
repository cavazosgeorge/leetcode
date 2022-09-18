/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let i = 0

  while (i < nums.length) {
    let correctIdx = nums[i] - 1
    if (nums[i] !== nums[correctIdx]) {
      swap(nums, i, correctIdx)
    } else {
      i++
    }
  }

  let missingNumbers = []

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== index + 1) {
      missingNumbers.push(index + 1)
    }
  }

  return missingNumbers
}

const swap = (nums, first, second) => {
  let temp = nums[first]
  nums[first] = nums[second]
  nums[second] = temp
}