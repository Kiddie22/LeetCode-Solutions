/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * https://leetcode.com/problems/add-two-numbers/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let stringL1 = '';
  let stringL2 = '';
  for (let i = l1.length - 1; i >= 0; i--) {
    stringL1 += l1[i].toString();
  }
  for (let i = l2.length - 1; i >= 0; i--) {
    stringL2 += l2[i].toString();
  }
  const numL1 = +stringL1;
  const numL2 = +stringL2;
  const total = numL1 + numL2;
  const totalString = total.toString();
  const totalArr = totalString.split('');
  console.log({
    stringL1,
    stringL2,
    numL1,
    numL2,
    total,
    totalString,
    totalArr,
  });
  let returnedArray = [];
  for (let i = 0; i < totalArr.length; i++) {
    returnedArray.push(totalArr[totalArr.length - i]);
  }
  return returnedArray;
};
