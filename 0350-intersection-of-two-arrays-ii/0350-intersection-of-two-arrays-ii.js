/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {

    let smallerArray;
    let largerArray;

    // Find the smaller and larger array
    if (nums1.length <= nums2.length) {
        smallerArray = nums1;
        largerArray = nums2;
    } else {
        smallerArray = nums2;
        largerArray = nums1;
    }

    // Create a frequency map
    let map = new Map();

    for (let num of smallerArray) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }

    // Store the intersection
    let ans = [];

    for (let num of largerArray) {
        if (map.has(num) && map.get(num) > 0) {
            ans.push(num);
            map.set(num, map.get(num) - 1);
        }
    }

    return ans;
};