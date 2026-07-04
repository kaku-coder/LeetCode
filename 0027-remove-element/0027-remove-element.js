/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0,i=0,j=0;
    for(let i = 0;i<nums.length;i++){
        if(nums[i]!==val){
            let temp = nums[i]
            nums[i]=nums[j]
            nums[j]=temp
            j++
            k++
        }
    }
    return k
};