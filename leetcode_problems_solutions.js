// Q -- 2667. Create Hello World Function

/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function(...args) {
        return "Hello World";
    }
};

// Example usage:
const f = createHelloWorld();
console.log(f()); // Output: "Hello World

// https://leetcode.com/studyplan/top-interview-150/ 
// Q 1 Merge Sorted Array
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    for (; i >= 0 && j >= 0; k--) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
    }

    // If there are remaining elements in nums2, copy them to nums1
    for (; j >= 0; k--, j--) {
        nums1[k] = nums2[j];
    }
};

// Example usage:
const nums1Example1 = [1, 2, 3, 0, 0, 0];
const mExample1 = 3;
const nums2Example1 = [2, 5, 6];
const nExample1 = 3;

merge(nums1Example1, mExample1, nums2Example1, nExample1);
console.log(nums1Example1); // Output: [1, 2, 2, 3, 5, 6]
