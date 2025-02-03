/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function (courses) {
    const isValidCourse = (a) => a[0] <= a[1];
    const sortedCourses = courses.filter(isValidCourse).sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0];
        return a[1] - b[1];
    });
    let totalTime = 0;
    let maxHeap = new MaxPriorityQueue();
    for (let [duration, lastDay] of sortedCourses) {
        totalTime += duration;
        maxHeap.enqueue(duration, duration);
        if (totalTime > lastDay) {
            totalTime -= maxHeap.dequeue().element; 
        }
    }
    return maxHeap.size(); 
};
