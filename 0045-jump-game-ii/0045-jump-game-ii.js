/**
 * @param {number[]} nums
 * @return {number}
 
 */
var jump = function (nums) {
    let maxSteps = 0;
    let count = 0;
    let end = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        let cur = nums[i] + i;
        maxSteps = Math.max(cur, maxSteps);
        if ( i == end) {
            count++;
            end = maxSteps;
        }
    }
    return count;
};