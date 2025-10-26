/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const r =  s.trim().split(' ');
    return r[r.length-1].length
};