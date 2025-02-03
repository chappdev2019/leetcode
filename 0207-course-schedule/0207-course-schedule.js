/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let map = new Map();
    let indegree = new Array(numCourses).fill(0);
    prerequisites.forEach(([course, pre]) => {
        if (!map.has(pre)) map.set(pre, []);
        map.get(pre).push(course);
        indegree[course]++;
    })

    let stack = [];
    for (let i = 0; i < indegree.length; i++) {
        if (indegree[i] == 0) stack.push(i);
    }

    let visited = new Set();
    while (stack.length > 0) {
        let course = stack.pop();
        visited.add(course)
        let list = map.get(course) || [];
        for (let child of list) {
            indegree[child]--;
            if (indegree[child] == 0) {
                stack.push(child);
            }
        }
    }
    return visited.size === numCourses;
};