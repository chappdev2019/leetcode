/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {

    let map = new Map();
    let indegree = new Array(numCourses).fill(0);
    for (let [course,prev] of prerequisites) {
        if(!map.has(prev)) map.set(prev,[]);
        map.get(prev).push(course);
        indegree[course]++;
    }
   
    let stack = [];
    for(let i = 0; i < indegree.length; i++) {
        if(indegree[i]==0) stack.push(i);
    }
    let visited = new Set();
    while(stack.length > 0) {
        let cur = stack.pop();
        let list = map.get(cur) || []
        visited.add(cur);
        for (let course of list) {
            indegree[course]--;
            if (indegree[course] == 0) stack.push(course);
        }
    } 
    return visited.size == numCourses ? [...visited] : [];
};