/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    const res = [];
    function helper(subArr, depth) {
        for (let element of subArr) {
            if (Array.isArray(element) && depth < n) {
                helper(element, depth + 1);
            } else {
                res.push(element);
            }
        }
    }
    helper(arr, 0);
    return res;
};