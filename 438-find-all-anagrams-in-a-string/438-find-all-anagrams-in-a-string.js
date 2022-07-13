/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
let windowStart = 0,
        matched = 0,
        charFrequency = {};
    
    for (let i = 0; i < p.length; i++) {
        const chr = p[i];
        if (!(chr in charFrequency)) {
            charFrequency[chr] = 0;
        }
        
        charFrequency[chr] += 1;
    }
    
    // where we are storing our start indecies for all matches
    const resultIndecies = [];
    
    for (windowEnd = 0; windowEnd < s.length; windowEnd++) {
        const rightChar = s[windowEnd];
        if (rightChar in charFrequency) {
            // decrement the frequency of matched character
            charFrequency[rightChar] -= 1;
            if (charFrequency[rightChar] === 0) {
                matched += 1;
            }
        }
        
        if (matched === Object.keys(charFrequency).length) {
            resultIndecies.push(windowStart);
        }
        
        // shrink the sliding window
        if (windowEnd >= p.length - 1) {
            const leftChar = s[windowStart];
            windowStart += 1;
            if (leftChar in charFrequency) {
                if (charFrequency[leftChar] === 0) {
                    matched -= 1;
                }
                
                charFrequency[leftChar] += 1;
            }
        }
    }
    
    return resultIndecies;
};