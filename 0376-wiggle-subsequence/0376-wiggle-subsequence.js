/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
    /*  let nums = [1,17,5,10,13,15,10,5,16,8]
    Greedy Algorithm
     */
    if (nums.length <= 1) return nums.length;
    let prevDiff = 0;
    let result = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        let curDiff = nums[i + 1] - nums[i];
        if (prevDiff <= 0 && curDiff > 0) {
            result++;
            prevDiff = curDiff;
        } else if (prevDiff >= 0 && curDiff < 0) {
            result++;
            prevDiff = curDiff; 
        }
    }
    return result;
};