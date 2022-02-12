/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 function reverseKGroup(head, k) {
  if (!head) return null;
  var tail = head;
  for (let i = 1; i < k; i++) {
    tail = tail.next;
    if (!tail) return head;
  }
  var next = tail.next;
  tail.next = null;
  reverse(head);
  head.next = reverseKGroup(next, k);
  return tail;
}

function reverse(curr) {
  var newLink = null;
  while (curr) {
    var next = curr.next;
    curr.next = newLink;
    newLink = curr;
    curr = next;
  }
  return newLink;
}

// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverseKGroup;
// @after-stub-for-debug-end