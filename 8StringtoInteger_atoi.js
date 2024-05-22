/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let index = 0;
    let sign = 1;
    let result = 0;
    const INT_MAX = 2**31 - 1;
    const INT_MIN = -(2**31);

    while (index < s.length && s[index] === ' ') {
        index++;
    }

    if (index < s.length && (s[index] === '-' || s[index] === '+')) {
        sign = s[index] === '-' ? -1 : 1;
        index++;
    }

    while (index < s.length && s[index] >= '0' && s[index] <= '9') {
        result = result * 10 + (s[index] - '0');
        if (result * sign > INT_MAX) {
            return INT_MAX;
        }
        if (result * sign < INT_MIN) {
            return INT_MIN;
        }
        index++;
    }

    return result * sign;
};

// Test cases
console.log(myAtoi("42")); 
console.log(myAtoi("   -42")); 
console.log(myAtoi("1337c0d3")); 
console.log(myAtoi("0-1")); 
console.log(myAtoi("words and 987")); 
