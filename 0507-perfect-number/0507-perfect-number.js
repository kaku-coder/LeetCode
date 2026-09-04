// var checkPerfectNumber = function(num) {
//     if (num <= 1) return false;

//     let sum = 1;

 
//     // for (let i = 2; i * i <= num; i++) {
//     //     if (num % i === 0) {
//     //         sum += i; 
//     //         if (i * i !== num) {
//     //             sum += num / i; 
//     //         }
//     //     }
//     // }

//     // return sum === num;
// };

function checkPerfectNumber(num) {
    if (num <= 1) return false;

    let sum = 1;

    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    return sum === num;
}