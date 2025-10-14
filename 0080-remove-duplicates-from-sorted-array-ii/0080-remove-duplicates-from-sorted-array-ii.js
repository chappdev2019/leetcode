/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let fast = 2;
    let slow = 2;
    while (fast < nums.length) {
        if (nums[fast] != nums[slow-2]) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }  
    return slow;
};