/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxP = 0;
    let minBuyPrice = Infinity;
    
    for(let i = 0; i < prices.length; i++) {
        let dailyStockPrice = prices[i];
        if (minBuyPrice > dailyStockPrice) {
            minBuyPrice = dailyStockPrice
        }
        const currentProfit = dailyStockPrice - minBuyPrice;
        if (currentProfit > maxP) {
            maxP = currentProfit;
        }
    }
    
    return maxP;
};