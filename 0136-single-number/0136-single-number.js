/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // linear runtime O(n) o(1)
    let res = 0;
    for (const num of nums) {
        res ^= num;
    }
    return res;
};