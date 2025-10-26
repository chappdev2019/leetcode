var reverseWords = function (s) {
    let res = '';
    let char = '';
    let i = 0;
    let prependIfAny = (text) => text ? ' ' + text : ''

    while (i < s.length) {
        if (s[i] === ' ') {
            if (char) {
                res = char + prependIfAny(res);
                char = '';
            }
            while (i < s.length && s[i] === ' ') i++;
        } else {
            char += s[i];
            i++;
        }
    }

    if (char) res = char + prependIfAny(res);;
    return res;
};
