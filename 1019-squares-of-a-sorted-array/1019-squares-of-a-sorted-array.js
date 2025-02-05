/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let res = new Array(nums.length).fill(0);
    let right = nums.length - 1;
    let left = 0;
    let index = res.length - 1;
    while (left <= right) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            res[index] = nums[left] ** 2;
            index--;
            left++;
        } else {
            res[index] = nums[right] ** 2;
            index--;
            right--;
        }
    }
    return res;
};