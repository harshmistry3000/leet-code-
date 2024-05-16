/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0;
    let prevValue = 0;
    
    for (let i = 0; i < s.length; i++) {
        const currentValue = romanValues[s[i]];
        total += currentValue;
        
        if (currentValue > prevValue) {
            total -= 2 * prevValue;
        }
        
        prevValue = currentValue;
    }
    
    return total;
};


console.log(romanToInt("III"));    
console.log(romanToInt("LVIII"));   
console.log(romanToInt("MCMXCIV"));  
