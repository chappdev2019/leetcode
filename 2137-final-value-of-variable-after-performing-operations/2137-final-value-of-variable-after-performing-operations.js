/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let res = 0;
    const check = (input) => (input[1] == "-")? res--: res++;
    for (const op of operations) {
        check(op);
    }
    return res;
};