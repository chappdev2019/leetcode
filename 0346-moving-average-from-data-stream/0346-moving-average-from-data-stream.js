/**
 * @param {number} size
 */
var MovingAverage = function (size) {
    this.window = [];
    this.limit = size;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    if (this.window.length >= this.limit) {
        this.window.shift();
    } 
    this.window.push(val);
    let sum = this.window.reduce((acc, total) => total += acc, 0);
    return sum / this.window.length;

};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */