/**
 * @param {string} s
 * @return {string[][]}
 */

var partition = function(s) {
    const result = [];
    

    const isPalindrome = (str, left, right) => {
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    };


    const backtrack = (start, path) => {
      
        if (start === s.length) {
            result.push([...path]);
            return;
        }
        s
        for (let end = start; end < s.length; end++) {
            if (isPalindrome(s, start, end)) {
                path.push(s.substring(start, end + 1)); 
                backtrack(end + 1, path);              
                path.pop();                            
            }
        }
    };

    backtrack(0, []);
    return result;
};


console.log(partition("aab")); 
console.log(partition("a"));   
