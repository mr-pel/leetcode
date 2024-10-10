/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    const res = 0;
    for (let i = 0; i < nums.length; i++) {
        init = fn(init, nums[i]);
    }
    return init;

};

const init = 100;
// function sum(accum, curr) { return accum + curr; }

console.log(reduce([1,2,3,4], sum, init));
console.log(reduce([1,2,3,4], sum, init));
console.log(reduce([], sum, init));
function sum(accum, curr) { return accum + curr * curr; }
// function sum(accum, curr) { return 0; }
