/**
 * @param {number} n
 * @return {number}
 */
// var fib = function(n) {
//     if(n == 0) return 0
//     let first = 0;
//     let second = 1;

//     for (let i = 2; i <= n; i++) {
//         let third = first + second;

//         first = second;
//         second = third;
//     }

//     return second;
// };

function fib(n, first=0, second=1) {
  if (n == 0) return first
  return fib(n-1,second,first+second)
}