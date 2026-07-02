/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0;
    for(let i = 0;i<mat.length;i++){
        let num = 0;
        for(let j = 0;j<mat[i].length;j++){
            if(i === j || i+j === mat.length-1){
                num += mat[i][j]
            }
        }
        sum +=num
    }
    return sum;
};