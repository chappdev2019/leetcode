
var MyQueue = function() {
    this.storage = [];
    this.start = 0;
    this.tail = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.storage.push(x);
    this.tail++;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.storage.length === 0) return;
    let val = this.storage.shift();
    this.tail--;
    return val;
    
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.storage.legnth === 0) return;
    let val = this.storage[this.start];
    return val;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.storage.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */