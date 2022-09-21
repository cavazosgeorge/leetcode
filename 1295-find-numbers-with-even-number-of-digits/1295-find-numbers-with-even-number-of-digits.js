/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = function (nums) {
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        let element = ""
        element += nums[i]
        if (evenDigits(element)) {
            ++count
        }
    }
    
    return count;
}

const evenDigits = (element) => {
    let length = element.length
    return length % 2 === 0 ? true : false
}