/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (count < 2 || nums[i] > nums[count - 2]) {
            nums[count++] = nums[i];
        }
    }
    return count;
}

// Test cases
let nums1 = [1, 1, 1, 2, 2, 3];
let expectedNums1 = [1, 1, 2, 2, 3];
let k1 = removeDuplicates(nums1);
console.log("Output 1:", k1); 
console.assert(k1 === expectedNums1.length);
for (let i = 0; i < k1; i++) {
    console.assert(nums1[i] === expectedNums1[i]);
}

let nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
let expectedNums2 = [0, 0, 1, 1, 2, 3, 3];
let k2 = removeDuplicates(nums2);
console.log("Output 2:", k2); 
console.assert(k2 === expectedNums2.length);
for (let i = 0; i < k2; i++) {
    console.assert(nums2[i] === expectedNums2[i]);
}
