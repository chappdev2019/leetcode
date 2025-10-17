/**
 * @param {number[]} nums
 * @return {number}
 */
var maxIncreasingSubarrays = function(nums) {
    const n = nums.length;
    if (n < 2) return 0;
    // length of increasing subarray ending at i
    const left = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        if (nums[i] > nums[i - 1]) left[i] = left[i - 1] + 1;
    }
    let res = 1;
    let rightLen = 1;
    for (let i = n - 2; i >= 0; i--) {
        const k = Math.min(left[i], rightLen);
        res = Math.max(res, k);
        if (nums[i] < nums[i+1]) {
            rightLen += 1;
        } else {
            rightLen = 1;
        }
    }
    return res;
};