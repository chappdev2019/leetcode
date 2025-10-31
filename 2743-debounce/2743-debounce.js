/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timeID;
    return function(...args) {
        let context = this;
        clearTimeout(timeID);
        timeID = setTimeout(() => {
            fn.apply(context, args)
        }, t)        
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */