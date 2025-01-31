/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let res = new Array(26).fill(0)
    s.split('').forEach(e => res[e.charCodeAt(0)-97]++)
    let filtered = res.filter(e=>e!=0)
    return filtered.every(e=> e===filtered[0])
};