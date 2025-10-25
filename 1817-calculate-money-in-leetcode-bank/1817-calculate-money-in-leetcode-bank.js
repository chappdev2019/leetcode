/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let sum = 0;
    let start = 1;
    while (n > 0) {
        for (let i = 0; i < 7; i++) {
            if (n <= 0) break;
            sum += start + i;
            n--;
        }
        start++;
    }
    return sum;
};