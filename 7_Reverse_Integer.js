/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const isNegative = x < 0;
    x = Math.abs(x);

    let reversed = 0;
    while (x > 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    if (reversed > 2**31 - 1) {
        return 0;
    }

    return isNegative ? -reversed : reversed;
};

// Test cases
console.log(reverse(123)); 
console.log(reverse(-123)); 
console.log(reverse(120)); 
console.log(reverse(0)); 
console.log(reverse(1534236469)); 
