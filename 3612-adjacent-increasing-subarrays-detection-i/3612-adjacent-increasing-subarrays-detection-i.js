/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function(nums, k) {
//   const n = nums.length;

//   for (let start = 0; start <= n - 2 * k; start++) {
//     let firstIncCount = 1;

//     for (let i = start + 1; i < start + k; i++) {
//       if (nums[i] > nums[i - 1]) {
//         firstIncCount++;
//       } else {
//         break;
//       }
//     }

//     if (firstIncCount === k ) {
//       let secondIncCount = 1;

//       for (let i = start + k + 1; i < start + 2 * k; i++) {
//         if (nums[i] > nums[i - 1]) {
//           secondIncCount++;
//         } else {
//           break;
//         }
//       }

//       if (secondIncCount === k) return true;
//     }
//   }

//   return false;

    let prevCount, currCount = 1
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i + 1]) currCount++
        else {
            prevCount = currCount
            currCount = 1
        }

        if (currCount >= 2 * k || (prevCount >= k && currCount >= k)) return true
    }

    return false
};