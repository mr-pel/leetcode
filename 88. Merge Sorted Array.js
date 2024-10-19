/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for (let p1 = m - 1, p2 = n - 1, p = m + n - 1; p >= 0; p--) {
        if (p2 < 0 || (p1 >= 0 && nums1[p1] > nums2[p2])) {
            nums1[p] = nums1[p1--];
        } else {
            nums1[p] = nums2[p2--];
        }
    }
    return nums1
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));
