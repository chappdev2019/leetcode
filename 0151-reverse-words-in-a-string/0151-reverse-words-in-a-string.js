/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let str = s.trim();
    let res = [];
    let char = '';
    let start = 0;
    while (start < str.length) {
        while (str[start] === ' ') start++;
        if (start > 1 && str[start-1] == ' ') {
            res.unshift(char)
            char = '';
        }
        char += str[start];
        start++;
    }
    res.unshift(char)
    return res.join(' ');
};