
var RecentCounter = function() {
    this.storage = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    while (this.storage.length && this.storage[0] < t - 3000) {
        this.storage.shift();
    }
    this.storage.push(t);
    return this.storage.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */