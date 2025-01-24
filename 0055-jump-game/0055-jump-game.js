/**
 * @param {number[]} nums
 * @return {boolean}
 3, 2, 1, 0, 4
 3  3  3  x  

 */
var canJump = function (nums) {
    let maxDestination = 0;
    for (let i = 0; i < nums.length; i++) {
        if (maxDestination < i) {
            return false;
        }
        maxDestination = Math.max(nums[i] + i, maxDestination);
    }
    return true;
};