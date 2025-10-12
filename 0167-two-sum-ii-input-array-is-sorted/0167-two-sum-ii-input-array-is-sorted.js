/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let seen = new Map();
    for (let i = 0; i < numbers.length; i++) {
        const completement = target - numbers[i];
        if (seen.has(completement)) return [seen.get(completement),i+1];
        seen.set(numbers[i], i+1);
    }
    return [];
};