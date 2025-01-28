/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let aPointer = a.length -1;
    let bPointer = b.length -1;
    let res = '';
    let carry = 0;
    while (aPointer >= 0 || bPointer >= 0 || carry > 0) {
        let val1 = aPointer >= 0 ? Number(a[aPointer]) : 0;
        let val2 = bPointer >= 0 ? Number(b[bPointer]) : 0;
        let cur = val1 + val2 + carry;
        carry = cur > 1 ? 1 : 0;
        res = (cur % 2) + res;
        aPointer--;
        bPointer--;
    }
    return res;
};