/**
 * @param {string} s
 * @return {boolean}
 */

// var isPalindrome = function(s) {
    
//     // turn string to lowercase and use regex to remove non-alphanumeric
//     s = s.toLowerCase();
//     s = s.replace(/[^A-Za-z0-9]/g, '');

//     let start = 0;
//     let end = s.length-1; 
    
//     while (start < end){
        
//         if(s[start] !== s[end]) return false
//         start++;
//         end--;
//     }
//     return true
// };


function isAlphaNumeric(c) {
    return /^[a-zA-Z0-9]*$/.test(c);
}

function isPalindrome(s) {
    let l = 0, r = s.length - 1;
    while (l < r) {
        while (l < r && !isAlphaNumeric(s.charAt(l))) {  // Note 1, 2
            l++;
        }
        while (l < r && !isAlphaNumeric(s.charAt(r))) {
            r--;
        }
        if (s.charAt(l).toLowerCase() !== s.charAt(r).toLowerCase()) {  // ignore case
            return false;
        }
        l++;
        r--;
    }
    return true;
}
