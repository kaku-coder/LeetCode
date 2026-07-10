/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let start = 0,
    end = nums.length - 1,
    mid = 0,
    index =-1;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return  mid;
      break;
    } else if (nums[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return start
};