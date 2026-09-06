/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let arr = [];

function combination(start, current) {

  if (current.length === k) {
    arr.push([...current]);
    return;
  }

  for (let i = start; i <= n; i++) {

    current.push(i);

    combination(i + 1, current);

    current.pop();
  }
}

combination(1, []);
return arr
};