/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let arr = new Array(101).fill(0);
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        arr[nums[i]]++;
        max = Math.max(max, arr[nums[i]]);
    }
    return arr.filter(e => e== max).reduce((sum, cur) => sum += cur, 0);
};