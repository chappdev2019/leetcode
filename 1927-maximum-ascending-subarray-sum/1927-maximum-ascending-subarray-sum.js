/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
    let res = nums[0];
    let sum = nums[0];
    let i = 1;
    while (i < nums.length) {
        if (nums[i] > nums[i - 1]) {
            sum += nums[i];
            res = Math.max(res, sum);
        } else {
            sum = nums[i];
        }
        i++;
    }
    return res;
};