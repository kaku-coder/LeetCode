/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s ,first = 0,last = s.length-1) {
    // let reverse =[]
    // for(let i = s.length-1;i>=0;i--){
    //     reverse.push(s[i])
    // }
    // for(let i = 0;i<s.length;i++){
    //     s[i]=reverse[i]
    //   }
    //   return reverse
    if (first >= last) return s
    let temp = s[first]
    s[first] = s[last]
    s[last] = temp
    return reverseString(s, first + 1, last - 1)
};