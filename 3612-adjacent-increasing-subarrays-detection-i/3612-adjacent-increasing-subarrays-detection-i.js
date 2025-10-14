/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function(nums, k) {
  const n = nums.length;

  for (let i = 0; i <= n - 2 * k; i++) {
    let f = [nums[i]];
    for (let j = i + 1; j < i + k; j++) {
      if (nums[j] > nums[j - 1]) f.push(nums[j]);
      else break;
    }

    if (f.length === k) {
      let x = [nums[i + k]];
      for (let j = i + k + 1; j < i + 2 * k; j++) {
        if (nums[j] > nums[j - 1]) x.push(nums[j]);
        else break;
      }

      if (x.length === k) return true;
    }
  }

  return false;
};