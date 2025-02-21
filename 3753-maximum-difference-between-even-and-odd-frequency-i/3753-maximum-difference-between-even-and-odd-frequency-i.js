/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function (s) {
    let freq = new Array(26).fill(0);
    for (const char of s) {
        freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    let maxOdd = 0, minEven = Infinity;
    for (const count of freq) {
        if (count === 0) continue;
        if (count % 2 === 0) {
            minEven = Math.min(minEven, count);
        } else {
            maxOdd = Math.max(maxOdd, count);
        }
    }

    return maxOdd - minEven;
};