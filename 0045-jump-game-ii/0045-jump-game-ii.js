/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let maxDestination = 0;
    let count = 0;
    let jump = 0;
    for (let i = 0; i < nums.length -1; i++) {
        maxDestination = Math.max(nums[i] + i, maxDestination);
        if (jump == i) {
            jump = maxDestination;
            count++;
        }
    }
    return count;
};