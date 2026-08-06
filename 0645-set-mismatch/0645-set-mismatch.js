/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let map = new Map()

    let duplicate
    let missing
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        } else {
            map.set(nums[i], 1)
        }
    }
    for (let [key, value] of map) {
        if (value > 1) {
            duplicate = key
        }
    }
    console.log(duplicate)
    for (let i = 1; i <= nums.length; i++) {
        if (!map.has(i)) {
            missing = i
        }
    }
    arr.push(duplicate, missing)
    return arr
};