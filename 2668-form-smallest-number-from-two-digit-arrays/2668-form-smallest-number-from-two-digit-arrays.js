/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function (nums1, nums2) {
    let res = new Array(10).fill(0);
    for (const x of nums1) res[x]++;
    for (const x of nums2) res[x] += 2;
    let digit1 = 0, digit2 = 0;
    for (let i = 1; i < 10; i++) {
        if (res[i] == 3) return i;
        if (digit1 == 0 && res[i] == 1) digit1 = i;
        if (digit2 == 0 && res[i] >= 2) digit2 = i;
    }
    return digit1 > digit2 ? digit2 * 10 + digit1 : (digit1 * 10 + digit2);
};