/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let times = students.length * 5;
    let start = 0;
    while (times > 0) {
        if (students[start] == sandwiches[start]) {
            students.shift();
            sandwiches.shift();
        } else {
            let cur = students.shift();
            students.push(cur)
        }
        times--;
    }
    console.log(students)
    return students.length;
};