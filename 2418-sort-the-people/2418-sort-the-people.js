/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
let arr = []
for(let i = 0;i<names.length;i++){
    arr.push([names[i],heights[i]])
}

arr.sort((a, b) => {
    return b[1]-a[1]
})
let ans = []
for (let i = 0; i < arr.length; i++){
    ans.push(arr[i][0])
}
return ans
};