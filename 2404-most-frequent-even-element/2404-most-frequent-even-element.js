/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {

        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        } else {
            map.set(nums[i], 1)
        }
    }
    let ans = -1;
    let frequency = 0;
    for(let [key,value]of map){
        if(key%2 === 0){
            if(value > frequency){
                frequency = value
                ans = key
            }
            else if(value === frequency && key <ans ){
                ans = key
            }
        }
    }
    return ans
};