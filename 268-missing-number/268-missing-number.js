/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
  let i = 0
  const n = nums.length

  while (i < n) {
    let correctIdx = nums[i] 
    if (nums[i] < n && nums[i] !== nums[correctIdx]) {
      swap(nums, i, correctIdx)
    } else {
      i++
    }
  }
  // search for first missing number
  for (let index = 0; index < n; index++) {
    if (nums[index] !== index) {
      return index
    }
  }

  return n
}

const swap = (arr, first, second) => {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}