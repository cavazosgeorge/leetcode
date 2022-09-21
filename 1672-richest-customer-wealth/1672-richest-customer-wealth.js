/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function (accounts) {
  let maxWealthSoFar = 0

  for (let row = 0; row < accounts.length; ++row) {
    let currentCustomerWealth = 0
    for (let col = 0; col < accounts[row].length; ++col) {
      currentCustomerWealth += accounts[row][col]
    }

    maxWealthSoFar = Math.max(maxWealthSoFar, currentCustomerWealth)
  }

  return maxWealthSoFar
}