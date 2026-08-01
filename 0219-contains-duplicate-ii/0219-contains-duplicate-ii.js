/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let previosIndex = map.get(nums[i])
            let distance = i - previosIndex
            if (distance <= k) {
                return true
            }
        }
        map.set(nums[i], i)
    }

    return false
};