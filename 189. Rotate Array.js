/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    const res = nums;
    for (let i = 0; i < k; i++) {
        res.unshift(res.pop());
    }
    return res;
};


console.log(rotate([1, 2, 3, 4, 5, 6, 7], 54944)); // [5,6,7,1,2,3,4]
