/**
 * @param {number[]} nums
 * @return {boolean}
 3, 2, 1, 0, 4
 3  3  3  x  

 */
var canJump = function(nums) {
    const n = nums.length;
    let canReachEnd = new Array(n).fill(false);
    canReachEnd[n - 1] = true; 

    for (let i = n - 2; i >= 0; i--) {
        let furthestJump = Math.min(i + nums[i], n - 1);
        for (let j = i + 1; j <= furthestJump; j++) {
            if (canReachEnd[j]) {
                canReachEnd[i] = true;
                break;
            }
        }
    }

    return canReachEnd[0];
};