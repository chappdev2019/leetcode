/**
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 */
var findSmallestInteger = function(nums, value) {
    const seen = new Array(value).fill(0);
    for (const x of nums) {
        const r = ((x % value)+value) % value;
        seen[r]++;
    }
    console.log(seen)
    let i = 0;
    while (true) {
        const need = i % value;
        if (seen[need] === 0) {
            return i;
        }
        seen[need]--;
        i++;
    }
}