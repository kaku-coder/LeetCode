let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxaeria = 0;
  let left = 0;
  let right = height.length-1
  while (left < right) {
    let width = right - left
    let contanerHeight = Math.min(height[left], height[right])
    let aeria = width * contanerHeight
    maxaeria = Math.max(aeria,maxaeria);
    if (height[left] < height[right]) {
      left++
    }
    else right--
  }
  return maxaeria;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))