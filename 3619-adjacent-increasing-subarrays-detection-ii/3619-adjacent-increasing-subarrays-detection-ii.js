/**
 * @param {number[]} nums
 * @return {number}
 */
var maxIncreasingSubarrays = function(nums) {
    const n = nums.length;
    if (n < 2) return 0;

    let res = 0;     
    let temp = 1;      
    let prevLen = 0;   

    for (let i = 1; i < n; i++) {
        if (nums[i] > nums[i - 1]) {
            temp++;
        } else {
            res = Math.max(res, Math.floor(temp / 2));      
            if (prevLen > 0) res = Math.max(res, Math.min(prevLen, temp)); 
            prevLen = temp;
            temp = 1;
        }
    }

    res = Math.max(res, Math.floor(temp / 2));
    if (prevLen > 0) res = Math.max(res, Math.min(prevLen, temp));

    return res;
};