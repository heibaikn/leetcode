/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

/* 
  987/987 cases passed (80 ms)
 Your runtime beats 93.48 % of javascript submissions
 Your memory usage beats 35.88 % of javascript submissions (43.7 MB) 
*/

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// "abacadafaea"
var lengthOfLongestSubstring = function(s) {
  let map = new Map(), max = 0
  for(let i = 0, j = 0; j < s.length; j++) {
      // 若存在获取上一个角标,更新i
      if(map.has(s[j])) {
          i = Math.max(map.get(s[j]) + 1, i)
      }
      // 更新角标
      map.set(s[j], j)
      // 
      max = Math.max(max, j - i + 1)
  }
  return max
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end