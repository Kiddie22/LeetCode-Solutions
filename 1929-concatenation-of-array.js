/**
 * Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
 * Specifically, ans is the concatenation of two nums arrays.
 * Return the array ans.
 * https://leetcode.com/problems/concatenation-of-array/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  let ans = [];
  for (let x = 0; x < 2; x++) {
    for (const y of nums) {
      ans.push(y);
    }
  }
  return ans;
};