/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let start = 0;
    let end = 0;
    let res = [];
    while (start < nums.length) {
        while (start + 1 < nums.length && nums[start] + 1 == nums[start + 1]) {
            start++;
        }
        let str = '';
        if (end == start) {
            str = `${nums[end]}`;
        } else {
            str = `${nums[end] + '->' + nums[start]}`;
        }
        res.push(str);
        end = start+1;
        start++;
    }
    if (start < nums.length) {
        res.push(`${nums[start] + '->' + nums[start]}`);
        start++;
    }
    return res;
};