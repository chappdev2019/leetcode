/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    pairs.sort ((a,b) => a[1] - b[1]);
    let res = [];
    res.push(pairs[0])
    for (let i = 1; i < pairs.length; i++) {
        let [start, end] = pairs[i];
        if (start > res[res.length-1][1]) {
            res.push(pairs[i]);
        }
    }
    return res.length;
};