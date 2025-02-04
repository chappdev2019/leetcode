/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let arear = new Array(points.length).fill(0);
    let pos = 0;
    for (const point of points) {
        let [x,y] = point;
        arear[pos++] = [x**2 + y**2, point];
    }
    arear.sort((a,b)=> a[0] - b[0]);
    return arear.slice(0,k).map(e => e[1]);
};