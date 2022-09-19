/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function (nums) {
  let i = 0

  while (i < nums.length) {
    if (nums[i] !== i + 1) {
      let correctIdx = nums[i] - 1
      if (nums[i] !== nums[correctIdx]) {
        swap(nums, i, correctIdx)
      } else {
        return nums[i]
      }
    } else {
      i++
    }
  }

  return -1
}

const swap = (nums, first, second) => {
  let temp = nums[first]
  nums[first] = nums[second]
  nums[second] = temp
}