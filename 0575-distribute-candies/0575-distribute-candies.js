/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    let map = new Map()
    let eat = candyType.length / 2

    for (let i = 0; i < candyType.length; i++) {
        if (map.has(candyType[i])) {
            map.set(candyType[i], map.get(candyType[i]) + 1)
        } else {
            map.set(candyType[i], 1)
        }
    }
    let count = map.size
    if (count < eat) {
        return count
    }
    else {
        return eat
    }
};