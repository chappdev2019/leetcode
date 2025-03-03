/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    const elementSum = (nums) => {
        let sum = 0;
        nums.forEach(e => sum += e);
        return sum;
    }
    const digitSum = (nums) => {
        let sum = 0;
        nums.forEach(e => {
            const digit = (e+'').split('');
            digit.forEach(e => sum += (e-'0'));
        })
        return sum;
    }
    return Math.abs(elementSum(nums) - digitSum(nums));
};