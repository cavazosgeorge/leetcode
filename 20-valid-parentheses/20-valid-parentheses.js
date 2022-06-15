/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    let bracket = s.charAt(i)
    if (bracket === "(" || bracket === "[" || bracket === "{") {
      stack.push(bracket)
    } else {
      if (stack.length === 0) {
        return false
      }
      let top = stack.pop()
      if (bracket === ")" && top !== "(") {
        return false
      }
      if (bracket === "]" && top !== "[") {
        return false
      }
      if (bracket === "}" && top !== "{") {
        return false
      }
    }
  }
  return stack.length === 0
}