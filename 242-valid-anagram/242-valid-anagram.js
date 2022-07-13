/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // s = string
    // t = pattern
    let windowStart = 0,
        matched = 0,
        charFrequency = {};
    
    if (t.length !== s.length) {
        return false;
    }
    
    // loop through pattern 't' and count chars
    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        if (!(char in charFrequency)) {
            charFrequency[char] = 0;
        }
        
        charFrequency[char] += 1;
    }
    
    // console.log('charFrequency', charFrequency);
    
    // sliding window through input string 's'
    for (windowEnd = 0; windowEnd < s.length; windowEnd++) {
        const rightChar = s[windowEnd];
        if (rightChar in charFrequency) {
            // decrement the frequency of matched characters
            charFrequency[rightChar] -= 1;
            if (charFrequency[rightChar] === 0) {
                matched += 1;
            }
        }
        
        if (matched === Object.keys(charFrequency).length) {
            return true;
        }
        
        // shrink the sliding window
        if (windowEnd >= t.length - 1) {
            leftChar = s[windowStart];
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