/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let right = 0;
    let total = -Infinity;
    let curSum = 0;
    while (right < nums.length) {
        curSum += nums[right];
        curSum = Math.max(nums[right], curSum);
        total = Math.max(total, curSum);
        right++;
    }
    return total;
};