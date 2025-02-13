/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    nums.sort((a, b) => b- a)
    const getSmallest = () => {
        if(nums[nums.length-1] && !(nums[nums.length-1] > arr[arrPos])) return nums.pop()
        return arr[arrPos++]
    };
    let arr = [], operTime = 0, arrPos = 0
    while((nums.length > 0 && nums[nums.length-1] < k) || (arr.length > 0 && arr[arrPos] < k)) {
        let min1 = getSmallest();       
        let min2 = getSmallest(); 
        arr.push(min1*2 + min2)
        operTime ++
    }
    return operTime
};