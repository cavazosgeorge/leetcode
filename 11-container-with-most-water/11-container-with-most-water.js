/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function (height) {
    // VARIABLE TO STORE WATER
    let maxWater = 0;
    // START AT THE BEGINNING AND END OF THE ARRAY
    let i = 0, j = height.length - 1;
    // WHILE THE 2 POINTERS DONT INTERSECT
    while (i < j) {
        // FIND THE MIN HEIGHT
        let currHeight = Math.min(height[i], height[j])
        // FIND WIDTH
        let currWidth = j - i;
        // FIND AREA
        let currWater = currHeight * currWidth;
        // UPDATE MAX WATER
        maxWater = Math.max(maxWater, currWater);
        if (height[i] < height[j]) {
            i++;
        }
        else {
            j--;
        }
    }
    return maxWater;
};