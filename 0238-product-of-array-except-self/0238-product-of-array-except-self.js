/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = new Array(nums.length).fill(1);
    let total = 1;

          
    for (let i = 0; i < nums.length; i++) {
        res[i] = total;
        total *= nums[i]; 
    }
    total = 1;
    for (let i = nums.length-1; i >= 0; i--) {
        res[i] *= total;
        total *= nums[i];

    }
    return res;
};