/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n, cur = {}) {
    if (n == 1) return 1;
    if (n == 0) return 1;
    if (cur[n]) return cur[n];
    let num = 0;
    for (let i = 1; i <= n; i++) {
        let left = i - 1;
        let right = n - i;
        num += numTrees(left, cur) * numTrees(right, cur);
    }
    cur[n] = num;
    return num;
};