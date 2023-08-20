/**
 * Given a roman numeral, convert it to an integer.
 * https://leetcode.com/problems/roman-to-integer/
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let total = 0;
  //
  const ROMAN_TO_INT = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  //
  const charArr = s.split('');
  for (let i = 0; i < charArr.length; i++) {
    if (
      (charArr[i] === 'I' && charArr[i + 1] === 'V') ||
      (charArr[i] === 'I' && charArr[i + 1] === 'X')
    ) {
      total -= 1;
    } else if (
      (charArr[i] === 'X' && charArr[i + 1] === 'L') ||
      (charArr[i] === 'X' && charArr[i + 1] === 'C')
    ) {
      total -= 10;
    } else if (
      (charArr[i] === 'C' && charArr[i + 1] === 'D') ||
      (charArr[i] === 'C' && charArr[i + 1] === 'M')
    ) {
      total -= 100;
    } else {
      total += ROMAN_TO_INT[charArr[i]];
    }
  }
  return total;
};
