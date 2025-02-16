/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function (nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    for (let i = 0; i <= 9; i++) {
        if (set1.has(i) && set2.has(i)) return i;
    }

    const min1 = Math.min(...nums1);
    const min2 = Math.min(...nums2);
    return min1 < min2 ? min1*10 + min2 : min2*10 + min1;
};