/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let start = 0;
    let cur = 0;
    let sign = null;
    while (start < s.length) {
        while (s[start]==' ') start++;
        if (s[start] == '-' || s[start] == '+') {
            sign = s[start];
            start++;
        }
        while (!isNaN(s[start])&& s[start]!=' ' && s[start]!='  ') {
            if (cur == 0 && s[start] == 0) {
                start++;
            } else {
                cur = cur * 10 + Number(s[start]);
                start++;
            }
        }
        if(sign == '-') cur *= -1;

        let max = 2**31 - 1;
        let min = -(2**31);

        if (cur > max || cur < min) {
           cur = cur > max ? max : min;
        }
        return cur;
    }
    return 0;
};