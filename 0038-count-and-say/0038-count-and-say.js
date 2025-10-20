/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let term = '1';
    function encodeRunLength (str) {
        let moving = str.length-1
        let count = 1;
        let res = ''
         for (let i = str.length - 1; i >= 0; i--) {
            if(str[i] == str[i-1]) {
                count++;
            } else {
                res = count + str[i] + res;
                count = 1;
            }
        }
        return res;
    }
    
    for (let p = 1; p < n; p++) {
        term = encodeRunLength(term);
    }

    return term
};