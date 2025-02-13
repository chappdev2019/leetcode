/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let map = new Map();
    for (let i = 0; i < intervals.length; i++) {
        let [start, end] = intervals[i];
        map.set(start, (map.get(start)||0)+1);
        map.set(end, (map.get(end)||0)-1);
    }
    let sortedTimes = [...map.entries()].sort((a, b) => a[0] - b[0])
    let res = 0;
    let sum = 0;
    for (const [start,end] of sortedTimes) {
        sum += end;
        res = Math.max(res, sum);   
    }
    return res;
};