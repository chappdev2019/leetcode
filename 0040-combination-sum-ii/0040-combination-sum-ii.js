/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {

    let res = [];
    let path = [];
    candidates.sort((a,b) => a - b);
    
    function backtracking (start, sum) {
        if (sum == 0) {
            res.push([...path]);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            const num = candidates[i];
            if (num > sum) break;
            if (i != start && num == candidates[i-1]) continue;
            path.push(num);
            backtracking(i+1, sum - num);
            path.pop();

        }
    }
    backtracking(0, target);
    return res;
};