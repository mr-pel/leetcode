/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
    return nums.map((x) => nums[x]);
};


console.log(buildArray([0, 2, 1, 5, 3, 4]));
