/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function (arr1, arr2, arr3) {
    let map = new Map();
    const addToMap = (arr) => {
        for (let i = 0; i < arr.length; i++)
            map.set(arr[i], (map.get(arr[i]) || 0) + 1)
    }
    addToMap(arr1);
    addToMap(arr2);
    addToMap(arr3);
    let res = [];
    for (const [k, v] of map.entries()) {
        if (v % 3 === 0) res.push(k);
    }
    return res;
};