/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let newarray = [];
  let i = m - 1;
  let j = n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      newarray.push(nums1[i]);
      i--;
    } else {
      newarray.push(nums2[j]);
      j--;
    }
  }

  while (i >= 0) {
    newarray.push(nums1[i]);
    i--;
  }

  while (j >= 0) {
    newarray.push(nums2[j]);
    j--;
  }

  newarray.reverse();

  for (let k = 0; k < m + n; k++) {
    nums1[k] = newarray[k];
  }
};
