/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    // if (k == 0 ) return;
    // let rotated = nums.slice(-k).concat(nums.slice(0, nums.length - k));
    // nums.splice(0, nums.length,...rotated);
    const rotate = (start, end) => {
        while(start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }
    rotate(0, nums.length-1);
    rotate(0, k-1);
    rotate(k, nums.length-1);

};
