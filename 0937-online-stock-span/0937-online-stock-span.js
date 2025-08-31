
var StockSpanner = function () {
    this.span = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    let days = 1
    while (this.span.length > 0) {
        const [oldPrice,spanLength]=this.span[this.span.length-1];
        if(oldPrice>price){
            break;
        }
        days += spanLength
        this.span.pop();
    }
    this.span.push([price, days]);
    return days;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */