/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    const res = [];

    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i], i));
    }

    return res;
};

function plusI(n, i) {
    return n + i;
}

function plusone(n) {
    return n + 1;
}

function constant() {
    return 42;
}


console.log(map([1, 2, 3], plusI)); // [3, 4, 5]
console.log(map([1, 2, 3], plusone)); // [2, 3, 4]
console.log(map([1, 2, 3], constant)); // [42, 42, 42]
