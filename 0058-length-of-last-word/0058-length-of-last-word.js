/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let start = s.length - 1;
    let r = s.split(' ').filter((e) => e.length > 0);
    return r[r.length-1].length
};