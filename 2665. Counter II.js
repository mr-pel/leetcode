/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    const startValue = init;
    let changedValue = init;
    return {
        increment: function () {
            return ++changedValue;
        },
        decrement: function () {
            return --changedValue;
        },
        reset: function () {
            changedValue = startValue;
            return startValue;
        },
    };
};


const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
console.log(counter.decrement()); // 4
