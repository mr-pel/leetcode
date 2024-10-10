/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cash = {};
    return function (...args) {
        if (!cash[args]) {
            const key = JSON.stringify(args);
            cash[args] = fn(...args);
            return cash[args];
        }
        return cash[args];
    };
}


let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
});
console.log(memoizedFn([0, 0], [0, 0], [])); // 5
// console.log(memoizedFn([0,0],[0,0],[])) // 5
// memoizedFn(2, 6) // 5
console.log(callCount); // 1
