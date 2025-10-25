/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const val = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
    let start = 0;
    let res = 0;
    while(start < s.length) {
        let cur = val[s[start]];
        if (start + 1 < s.length &&(s[start] == 'I' ||s[start] == 'X'||s[start] == 'C')) {
            if (cur < val[s[start+1]]) {
                cur = val[s[start+1]] - val[s[start]];
                start = start +1;
            }
        }
        res += cur;
        start++;
    }
    return res;
};