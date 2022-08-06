/**
 * @param {string} s
 * @return {number}
 */
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
    return longest;
};

