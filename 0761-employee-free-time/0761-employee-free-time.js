/**
 * // Definition for an Interval.
 * function Interval(start, end) {
 *    this.start = start;
 *    this.end = end;
 * };
 */

/**
 * @param {Interval[][]} schedule
 * @return {Interval[]}
 */
var employeeFreeTime = function(schedule) {
    let list = [];
    for (let i = 0; i < schedule.length; i++) {
        schedule[i].forEach(e => list.push(e));
    }
    list.sort((a,b) => a.start- b.start)
    let combined = [];
    combined.push(list[0])
    for (let i = 1; i < list.length; i++) {
        let {start:curS,end:curE} = list[i]
        let {start:preS,end:preE} = combined[combined.length-1]
        if(curS <= preE) {
            combined.pop();
            let newInterval = {start:Math.min(curS, preS), end:Math.max(curE, preE)};
            combined.push(newInterval);
        } else {
            combined.push(list[i])
        }
    }
    let result = [];
    for (let i = 1; i < combined.length; i++) {
        let {start:curS} = combined[i]
        let {end:preE} = combined[i-1];
        if(curS > preE) {
            result.push({start:preE,end:curS});
        }
    }
    return result;
};