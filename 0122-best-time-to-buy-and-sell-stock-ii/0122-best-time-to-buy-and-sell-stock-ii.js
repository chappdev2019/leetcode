/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const len = prices.length;
    // const dp = Array.from({ length: len }, () => [0, 0]);
    let cash = 0;
    let hold = -prices[0];
    for (let i = 1; i < len; i++) {
        cash = Math.max(cash, hold + prices[i]);
        hold = Math.max(hold, cash - prices[i]);
    }
    return cash;
};
