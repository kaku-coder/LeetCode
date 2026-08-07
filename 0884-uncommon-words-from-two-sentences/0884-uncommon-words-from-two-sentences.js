/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    let map = new Map()
    let arr = []
    let s1Split = s1.split(" ")
    let s2Split = s2.split(" ")

    for (let num of s1Split) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    }

    for (let num2 of s2Split) {
        if (map.has(num2)) {
            map.set(num2, map.get(num2) + 1)
        } else {
            map.set(num2, 1)
        }
    }
    for (let [key, value] of map) {
        if (value < 2) {
            arr.push(key)
        }
    }
    return arr
};