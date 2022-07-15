/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let n = nums.length, squares = Array(n).fill(0);
    let highestSquareIdx = n - 1;
    let left = 0, right = n - 1;
    
    console.log('Squares', squares);
    console.log('Nums', nums);
    
    while (left <= right) {
        let leftSquare = nums[left] * nums[left],
            rightSquare = nums[right] * nums[right];
        if (leftSquare > rightSquare) {
            squares[highestSquareIdx] = leftSquare;
            left++;
        } else {
            squares[highestSquareIdx] = rightSquare;
            right--;
        }
        
        highestSquareIdx--;
    }
    
    return squares;
};