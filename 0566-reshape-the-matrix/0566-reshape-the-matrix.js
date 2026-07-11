/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
    let row = mat.length;
    let coloumn = mat[0].length;
    if (r * c !== row * coloumn) {
        return mat
    }
    let newarray = new Array(r)
    for (let i = 0; i < r; i++) {
        newarray[i] = new Array(c)
    }
    let newrow = 0;
    let newcol = 0
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < coloumn; j++) {
            newarray[newrow][newcol] = mat[i][j]
            newcol++
            if (newcol === c) {
                newcol = 0;
                newrow++
            }
        }

    }
    return newarray
};