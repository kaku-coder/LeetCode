/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
// var gcdOfStrings = function(str1, str2) {
//     let set = new Set();
// let min = Math.min(str1.length, str2.length)
// for (let i = 0; i < min; i++) {
//     if (str1[i] == str2[i]) {
//         set.add(str1[i])
//         console.log(set)
//     }
// }
// let result = [...set].join("");
// return result


// let array = new Array()
// let min = Math.min(str1.length, str2.length)
// console.log(min)
// for (let i = 0; i < min; i++) {
//     if (str1[i] == str2[i]) {
//         array.push(str1[i])
//     }
// }
// let result = array.join("")
// return result\
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }
    let len = gcd(str1.length, str2.length);
    return str1.substring(0, len);
};