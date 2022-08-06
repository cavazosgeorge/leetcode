/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   let set = new Set()
//   let left = 0,
//     right = 0,
//     answer = 0
//   while (right < s.length) {
//     if (!set.has(s.charAt(right))) {
//       set.add(s.charAt(right))
//       right++
//       answer = Math.max(answer, right - left)
//     } else {
//       set.delete(s.charAt(left))
//       left++
//     }
//   }
//   return answer
// }

// var lengthOfLongestSubstring = function (s) {
//     let n = s.length, end = 0;
//     let inside = new Set(s[0]); // CONTAINS CHARACTERS IN [START, END]
//     let answer = 0;
    
//     console.log('S', s);
//     console.log('Set', inside);
    
//     for (let start = 0; start < n; start++) {
//         while (end + 1 < n && !inside.has(s[end + 1])) {
//             end++;
//             inside.add(s[end])
//         } 
        
//         answer = Math.max(answer, end - start + 1);
//         inside.delete(s[start]);
//     }
    
//     return answer
// }

var lengthOfLongestSubstring = function(s) {
    let n = s.length, longest = 0, left = right = 0;
    const window = new Set();
    while (right < n) {
        if (!window.has(s.charAt(right))) {
            window.add(s.charAt(right));
            right++;
        } else {
            window.delete(s.charAt(left));
            left++;
        }
        longest = Math.max(longest, right - left);
    }
    return longest
}

