/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 */
var isPalindrome = function (x) {
  const xString = x.toString();
  const reversedXString = x.toString().split('').reverse().join('');
  return xString === reversedXString ? true : false;
};
