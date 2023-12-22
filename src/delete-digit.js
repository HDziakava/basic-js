const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrayOfNums = n.toString().split("");
  const lenght = arrayOfNums.length;
  let maxNum = 0;

  for (let i = 0; i < lenght; i++) {
    if (
      parseInt(
        arrayOfNums
          .slice(0, i)
          .concat(arrayOfNums.slice(i + 1))
          .join("")
      ) > maxNum
    ) {
      maxNum = parseInt(
        arrayOfNums
          .slice(0, i)
          .concat(arrayOfNums.slice(i + 1))
          .join("")
      );
    }
  }

  return maxNum;
}

module.exports = {
  deleteDigit,
};
