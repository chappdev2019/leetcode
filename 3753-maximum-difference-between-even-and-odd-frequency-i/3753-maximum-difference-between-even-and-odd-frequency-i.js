/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    let freq = new Array(26).fill(0);
    for (const char of s) {
        freq[char.charCodeAt(0)-'a'.charCodeAt(0)]++;
    }
    let filtered = freq.filter(e => e!=0).sort((a,b)=>b-a);
    let maxOdd = 0;
    let maxEven = 0;
    for (let i = 0; i < filtered.length; i++) {
        if (filtered[i]%2!=0) {
            maxOdd = filtered[i]
            break;
        } 
    }
    for (let i = filtered.length-1; i>=0; i--) {
        if (filtered[i]%2==0) {
            maxEven = filtered[i]
            break;
        }

    }
    return maxOdd-maxEven;
};