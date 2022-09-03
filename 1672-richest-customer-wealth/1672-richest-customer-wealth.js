/**
 * @param {number[][]} accounts
 * @return {number}
 */

const maximumWealth = (accounts) => {
    let maxWealthSoFar = 0;
    
    for (let i = 0; i < accounts.length; i++) {
        let currentCustomerWealth = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            currentCustomerWealth += accounts[i][j];
        }
        
        maxWealthSoFar = Math.max(maxWealthSoFar, currentCustomerWealth)
    }
    
    return maxWealthSoFar;
}