/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n, save = []) {

    if (n === 0) return 1
    if (n === 1) return 1

    if (save[n] !== undefined) {
        return save[n]
    }

    save[n] = climbStairs(n - 1, save) + climbStairs(n - 2, save)

    return save[n]
};