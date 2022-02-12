/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // "babad"
  let ll = 0, rr = 0;
  for (let i = 0; i < s.length; i++)
    for (let j of [i, i + 1]){
      for (l = i, r = j; s[l] && s[l] === s[r]; l--, r++)
      [ll, rr] = (r - l ) > (rr - ll ) ? [l, r] : [ll, rr];
    }
      

  return s.substring(ll, rr + 1);
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = longestPalindrome;
// @after-stub-for-debug-end