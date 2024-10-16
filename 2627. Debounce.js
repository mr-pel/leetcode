/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timeout;
    return function(...args) {
        const context = this;

        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.call(context, ...args);
        }, t);
    };
};


const log = debounce(console.log, 50);
log({'t': 50, 'inputs': [1]}); // cancelled
log({'t': 75, 'inputs': [12]}); // cancelled
