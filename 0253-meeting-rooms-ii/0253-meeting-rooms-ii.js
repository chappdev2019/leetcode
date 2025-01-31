/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
    let roomEnds = [];
    intervals.sort((a,b)=>a[0]-b[0]+(a[1]-b[1])/1e5)
    
    outer: for (const [start, end] of intervals) {
        for (let i = 0; i < roomEnds.length; i++) {
            const room = roomEnds[i];
            const [s1, e1] = room[room.length-1];
            if (start >= e1) {
                roomEnds[i].push([start, end]);
                continue outer;
            }
        }
        roomEnds.push([[start, end]]);
    }
        console.log(roomEnds);
    return roomEnds.length;
};