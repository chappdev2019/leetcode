/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let fast = 1;
    let slow = 1;
    while (fast < nums.length) {
        if (nums[fast] != nums[slow-1]) {
            [nums[fast], nums[slow]] = [nums[slow], nums[fast]];
            slow++;
        } 
        fast++;
    }
    return slow;
};