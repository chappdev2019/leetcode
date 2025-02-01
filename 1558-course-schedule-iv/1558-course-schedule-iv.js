function checkIfPrerequisite(numCourses, prerequisites, queries) {
    let map = new Map();

    for (let i = 0; i < prerequisites.length; i++) {
        let course = prerequisites[i][0];
        let prereq = prerequisites[i][1];
        if (!map.has(course)) {
            map.set(course, new Set());
        }
        map.get(course).add(prereq);
    }

    let reachable = Array.from({ length: numCourses }, () => Array(numCourses).fill(false));
    for (let [course, prereqs] of map) {
        for (let prereq of prereqs) {
            reachable[course][prereq] = true;
        }
    }
    for (let k = 0; k < numCourses; k++) {
        for (let i = 0; i < numCourses; i++) {
            for (let j = 0; j < numCourses; j++) {
                reachable[i][j] = reachable[i][j] || (reachable[i][k] && reachable[k][j]);
            }
        }
    }

    let res = [];
    for (let i = 0; i < queries.length; i++) {
        let course = queries[i][0];
        let prereq = queries[i][1];
        res.push(reachable[course][prereq]);
    }

    return res;
}
