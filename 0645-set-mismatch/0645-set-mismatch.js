/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    // let map = new Map()

    // let duplicate
    // let missing
    // let arr = []
    // for (let i = 0; i < nums.length; i++) {
    //     if (map.has(nums[i])) {
    //         map.set(nums[i], map.get(nums[i]) + 1)
    //     } else {
    //         map.set(nums[i], 1)
    //     }
    // }
    // for (let [key, value] of map) {
    //     if (value > 1) {
    //         duplicate = key
    //     }
    // }
    // console.log(duplicate)
    // for (let i = 1; i <= nums.length; i++) {
    //     if (!map.has(i)) {
    //         missing = i
    //     }
    // }
    // arr.push(duplicate, missing)
    // return arr
    let set = new Set()
let duplicate
let missing
let arr = []
for (let i = 0; i < nums.length; i++) {
    if(set.has(nums[i])){
        duplicate= nums[i]
    }
    set.add(nums[i])
}
for (let i = 1; i <= nums.length; i++) {

    if (!set.has(i)) {

        missing = i
    }
}
arr.push(duplicate,missing)
    return arr
};