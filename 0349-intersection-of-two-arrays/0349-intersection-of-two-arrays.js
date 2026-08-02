/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let map = new Map()
    let map2 = new Map()
    let ans = []

    for (let i = 0; i < nums1.length; i++) {
        if (map.has(nums1[i])) {
            map.set(nums1[i], map.get(nums1[i]) + 1)
        } else {
            map.set(nums1[i], 1)
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        if (map2.has(nums2[i])) {
            map2.set(nums2[i], map2.get(nums2[i]) + 1)
        } else {
            map2.set(nums2[i], 1)
        }
    }

    for (let [key, value] of map) {
        if (map2.has(key)) {
            ans.push(key);
        }
    }return ans
};