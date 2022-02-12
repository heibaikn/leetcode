/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  let pA = 0, pB = 0;
  /** 寻找当前区间的版本号 */
  const findDigit = (str, start) => {
    let i = start;
    while (str[i] !== '.' && i < str.length) {
      i++;
    }
    let num = Number(str.substring(start, i))
    return [num, i];
  }

  while (pA < version1.length || pB < version2.length) {
    const [numA, idxA] = findDigit(version1, pA);
    const [numB, idxB] = findDigit(version2, pB);
    if (numA !== numB) {
      return numA > numB ? 1 : -1;
    }
    pA = idxA + 1;
    pB = idxB + 1;
  }
  return 0;
};
// @lc code=end
// "100.1.2" "100.1.3"


// @after-stub-for-debug-begin
module.exports = compareVersion;
// @after-stub-for-debug-end