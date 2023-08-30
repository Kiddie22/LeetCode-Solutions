/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * https://leetcode.com/problems/longest-common-prefix/
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const strCharArr = [];
  const prefix = [];
  for (const str of strs) {
    const strArr = str.split('');
    console.log(strCharArr);
    strCharArr.push(strArr);
  }
  strs.every(str => str[]);
};

longestCommonPrefix(['flower', 'flow', 'flight']);
