/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * https://leetcode.com/problems/two-sum/description/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let x = 0; x < nums.length; x++) {
    for (let y = x + 1; y < nums.length; y++) {
      if (nums[x] + nums[y] === target) {
        return [x, y];
      }
    }
  }
};
