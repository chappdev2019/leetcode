/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
    let res = 0;
    for (const str of strs) {
        let curLen = !isNaN(str) ? Number(str) : str.length;
        res = Math.max(res, curLen);
    }
    return res;
};