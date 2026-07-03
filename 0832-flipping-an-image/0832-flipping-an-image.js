/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    for(let i =0;i<image.length;i++){
        let reverse = image[i].reverse()
        for(let j = 0;j<image[i].length;j++){
                    if (reverse[j] === 0) {
                reverse[j] = 1
            } else {
                reverse[j] = 0
            }
        }
    }
    return image
};