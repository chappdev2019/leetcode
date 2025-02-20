/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let set = new Set(nums);
    let len = nums[0].length;
    let res = '';
    dfs(0, [])
    return res;
    function dfs(start, temp) {
        if (temp.length == len) {
            let str = temp.join('');
            if (!set.has(str)) {
                res = str;
            }
            return;
        }
        for (let i = 0; i <= 1; i++) {
            temp.push(i);
            dfs(i, temp)
            temp.pop()
            if (res!='') break;
        }
    }
};