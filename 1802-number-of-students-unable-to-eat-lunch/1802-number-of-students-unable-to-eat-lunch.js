/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let times = students.length * 4;
    let start = 0;
    while (times > 0) {
        if (students.length == 0) return 0;
        if (students[start] == sandwiches[start]) {
            students.shift();
            sandwiches.shift();
        } else {
            let cur = students.shift();
            students.push(cur)
        }
        times--;
    }
    return students.length;
};