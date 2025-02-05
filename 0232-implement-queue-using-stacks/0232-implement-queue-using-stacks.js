
var MyQueue = function() {
    this.storage = [];
    this.start = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.storage.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.empty()) return null;
    const val = this.storage[this.start];
    this.start++;

    if(this.start > this.storage.length/2) {
        this.storage = this.storage.slice(this.start);
        this.start = 0;
    }
    return val;
    
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.empty()) return null;
    let val = this.storage[this.start];
    return val;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.start >= this.storage.length;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */