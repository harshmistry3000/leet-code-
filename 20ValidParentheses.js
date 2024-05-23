/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    const stack = [];

    const matchingPairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    
    for (let char of s) {
       
        if (matchingPairs[char]) {
           
            const topElement = stack.length === 0 ? '#' : stack.pop();
            
         
            if (topElement !== matchingPairs[char]) {
                return false;
            }
        } else {
            
            stack.push(char);
        }
    }
    

    return stack.length === 0;
};

// Test cases
console.log(isValid("()")); 
console.log(isValid("()[]{}")); 
console.log(isValid("(]")); 
console.log(isValid("([)]")); 
console.log(isValid("{[]}")); 
