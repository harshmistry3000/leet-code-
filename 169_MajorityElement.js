/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
    let count = 0;
    let candidate = null;
    
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        
        count += (num === candidate) ? 1 : -1;
    }
    
    return candidate;
}


let nums1 = [3, 2, 3];
console.log("Output 1:", majorityElement(nums1)); 

let nums2 = [2, 2, 1, 1, 1, 2, 2];
console.log("Output 2:", majorityElement(nums2));
