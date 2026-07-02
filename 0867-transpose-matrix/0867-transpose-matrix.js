/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  let mat = []
  for (let i = 0; i < matrix[0].length; i++){
    mat[i]=[]
  }
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
      mat[j][i]=matrix[i][j]
    }
  }
  return mat;
};