/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function (s) {
    let cur = s.split('');
    while (cur.length > 2) {
        let next = [];
        for (let i = 0; i + 1 < cur.length; i++) {
            next.push((Number(cur[i]) + Number(cur[i + 1])) % 10);
        }
        cur = next;
    }
    return cur[0] === cur[1];
};