var checkPerfectNumber = function(num) {
    if (num <= 1) return false;

    let sum = 1;

    // Loop sirf sqrt(num) tak chalega (i * i <= num)
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            sum += i; // Chota factor
            if (i * i !== num) {
                sum += num / i; // Bada pair factor (jaise 28/2 = 14)
            }
        }
    }

    return sum === num;
};
