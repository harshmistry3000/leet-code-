/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reversedNumber = 0;
    let originalNumber = x;

    while (x > 0) {
        const digit = x % 10;
        reversedNumber = reversedNumber * 10 + digit;
        x = Math.floor(x / 10);
    }

    return originalNumber === reversedNumber;
};
