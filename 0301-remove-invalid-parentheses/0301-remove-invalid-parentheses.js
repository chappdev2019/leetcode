var removeInvalidParentheses = function(s) {
    let res = [];
    let queue = new Set([s]);
    let found = false;
    while (queue.size) {
        let nextQueue = new Set();
        for (let str of queue) {
            if (isValid(str)) {
                res.push(str);
                found = true;
            }
            if (!found) {
                for (let i = 0; i < str.length; i++) {
                    if (str[i] !== "(" && str[i] !== ")") continue;
                    let newStr = str.slice(0, i) + str.slice(i + 1);
                    nextQueue.add(newStr);
                }
            }
        }
        queue = nextQueue;

    }
    return res.length ? res : [""];
};

function isValid(s) {
    let count = 0;
    for (let char of s) {
        if (char === "(") count++;
        else if (char === ")") count--;
        if (count < 0) return false;
    }
    return count === 0;
}
