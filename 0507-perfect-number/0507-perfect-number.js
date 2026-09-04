/**
 * @param {number} num
 * @return {boolean}
 */

var checkPerfectNumber = function(num) {
    if (num <= 1) return false;
    
    let sum = 0

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum+=i
        }
    }
    if(sum === num) return true
    else return false
};