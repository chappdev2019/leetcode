/**
 * @param {number} value
 * @param {number} k
 */
var DataStream = function(value, k) {
    this.arr = [];
    this.k = k;
    this.value = value;

};

/** 
 * @param {number} num
 * @return {boolean}
 */
DataStream.prototype.consec = function(num) {
    this.arr.push(num);
    if (this.arr.length > this.k) this.arr.shift();
    if (this.arr.length < this.k) return false;
    return this.arr.every(e => e === this.value);
};

/** 
 * Your DataStream object will be instantiated and called as such:
 * var obj = new DataStream(value, k)
 * var param_1 = obj.consec(num)
 */