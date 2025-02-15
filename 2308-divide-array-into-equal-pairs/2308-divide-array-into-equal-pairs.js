/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    if (nums.length % 2 != 0 ) return false;

    let memo = new Array(500+1).fill(0);
    for (const num of nums) {
        memo[num]++;
    }
    return memo.every(e => e % 2 === 0);
};