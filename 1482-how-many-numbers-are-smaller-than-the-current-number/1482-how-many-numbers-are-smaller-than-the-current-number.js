/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
   let ref = [...nums].sort((a,b)=> a - b);
   return nums.map(num=> ref.indexOf(num))
};