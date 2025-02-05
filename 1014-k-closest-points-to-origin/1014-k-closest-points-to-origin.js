/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {

    const result = quickSelect();
    return result;

    function quickSelect() {
        let right = points.length-1; 
        let left = 0;
        let pivotIndex = points.length;
        while (pivotIndex !== k) { 
            pivotIndex = partition(points, left, right)
            if (pivotIndex < k) {
                left = pivotIndex
            } else {
                right = pivotIndex - 1;
            }
        }
        return points.slice(0, k);
    }

    function partition(points, left, right) {
        let pivot = points[Math.floor((right + left) / 2)];
        let pivotArea = calArea(pivot);
        while (left < right) {
            if (calArea(points[left]) >= pivotArea) {
                [points[left], points[right]] = [points[right], points[left]];
                right--;
            } else {
                left++;
            }
        }
        if (calArea(points[left]) < pivotArea) {
            left++;
        }
        return left;
    }

    function calArea (point) {
        const [x,y] = point;
        return x**2+ y**2
    }
};
