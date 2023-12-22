const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let firstArray = s1.split("");
  let secondArray = s2.split("");
  let longerArray = "";
  let shorterArray = "";
  let count = 0;

  if (firstArray.length > secondArray.length) {
    longerArray = firstArray;
    shorterArray = secondArray;
  } else {
    longerArray = secondArray;
    shorterArray = firstArray;
  }

  const loopLength = longerArray.length;

  for (let i = 0; i < loopLength; i++) {
    let duplicateIndex = shorterArray.findIndex((el) => el === longerArray[0]);
    longerArray = longerArray.slice(1);
    if (duplicateIndex >= 0) {
      shorterArray = shorterArray
        .slice(0, duplicateIndex)
        .concat(shorterArray.slice(duplicateIndex + 1));
      count = count + 1;
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount,
};
