/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    const charToNum = (e) => e.charCodeAt(0) - 'a'.charCodeAt(0) + 1; 
    const str = s.split('').map(charToNum).join('');

    let transformed = str;
    while ( k > 0) {
        let sum = 0;
        transformed.split('').forEach(e=>sum+=Number(e));
        transformed = sum + '';
        k--;
    }
    return Number(transformed);
};