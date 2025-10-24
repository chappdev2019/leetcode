/**
 * @param {number} size
 */
var MovingAverage = function (size) {
    this.window = [];
    this.limit = size;
    this.sum = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    if (this.window.length >= this.limit) {
        this.sum -= this.window.shift();
    } 
    this.window.push(val);
    this.sum += val;
    return this.sum / this.window.length;

};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */