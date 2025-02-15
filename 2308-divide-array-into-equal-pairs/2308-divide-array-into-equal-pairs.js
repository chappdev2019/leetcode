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

    let count = nums.length/2;
    let sum = 0;
    memo.filter(e => e!=0 && e%2==0).forEach(e=> sum+=e);
    return count === sum / 2
};