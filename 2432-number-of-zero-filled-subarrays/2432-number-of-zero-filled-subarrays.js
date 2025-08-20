/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let ans = 0;
    let last = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            last = i;
        } else {
          ans += i - last;   
        }
    }
    return ans;    
};
