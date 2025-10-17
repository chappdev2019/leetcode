/**
 * @param {number[]} nums
 * @return {number}
 */


var majorityElement = function(nums) {
    let ans = null;
    let count = 0;
    for (let i = 0 ; i <nums.length; i++) {
        if (count == 0) {
            ans = nums[i]
        }
        if (nums[i] == ans) {
            count++;
        } else {
            count--;
        }
    }
    return ans;
};
