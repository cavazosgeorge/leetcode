/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    // s1 = pattern
    // s2 = string
    let windowStart = 0,
        matched = 0,
        charFrequency = {};
    
    for (let i = 0; i < s1.length; i++) {
        const chr = s1[i];
        if (!(chr in charFrequency)) {
            charFrequency[chr] = 0;
        }
        charFrequency[chr] += 1;
    }
    
    // goal is to match all the characters from the 'charFrequency' with the current window
    // to try to extend the range [windowStart, windowEnd]
    for (windowEnd = 0; windowEnd < s2.length; windowEnd++) {
        const rightChar = s2[windowEnd];
        if (rightChar in charFrequency) {
            // decrement the frequency of matched character
            charFrequency[rightChar] -= 1;
            if (charFrequency[rightChar] === 0) {
                matched += 1;
            }
        }
        
        if (matched === Object.keys(charFrequency).length) {
            return true;
        }
        
        // shrink the sliding window
        if (windowEnd >= s1.length - 1) {
            const leftChar = s2[windowStart];
            windowStart += 1;
            if (leftChar in charFrequency) {
                if (charFrequency[leftChar] === 0) {
                    matched -= 1;
                }
                
                charFrequency[leftChar] += 1;
            }
        }
    }
    
    return false;
};