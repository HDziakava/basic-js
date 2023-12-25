const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const array = str.split("");
  let count = 0;
  let answer = [];

  array.forEach((el, index) => {
    if (el === array[index + 1]) {
      count = count + 1;
    } else {
      count = count + 1;
      answer.push(count.toString());
      answer.push(el);
      count = 0;
    }
  });

  return answer.filter((el) => el !== "1").join("");
}

module.exports = {
  encodeLine,
};
