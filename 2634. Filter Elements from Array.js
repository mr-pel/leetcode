/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const res = [];
    for (let i = 0; i <arr.length ; i++) {
        if (fn(arr[i], i)) {
            res.push(arr[i]);
        }
    }
    return res;
};

function greaterThan10(n) { return n > 10; }
function firstIndex(n, i) { return i === 0; }
function plusOne(n) { return n + 1 }
