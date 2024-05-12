* @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    let maxLength = 0;

    let charMap = {};

    let left = 0;

    for (let right = 0; right < s.length; right++) {

        const currentChar = s[right];

        

        if (charMap[currentChar] >= left) {

            left = charMap[currentChar] + 1;

        }

        

        charMap[currentChar] = right;

        maxLength = Math.max(maxLength, right - left + 1);

    }

    return maxLength;

};



console.log(lengthOfLongestSubstring("abcabcbb")); 

console.log(lengthOfLongestSubstring("bbbbb"));    

console.log(lengthOfLongestSubstring("pwwkew"));   

