const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(/*str, options*/) {
  // let repeatTimes = options.repeatTimes;
  // const separator = options.separator;
  // const addition = options.addition;
  // let additionRepeatTimes = options.additionRepeatTimes;
  // const additionSeparator = options.additionSeparator;
  // // const repetedStr = str.repeat(repeatTimes);
  // // const repetedAddition = addition.repeat(additionRepeatTimes);
  // let result = "";
  // while (repeatTimes) {
  //   result += str;
  //   repeatTimes--;
  //   while (additionRepeatTimes) {
  //     result += addition;
  //     additionRepeatTimes--;
  //     result += additionSeparator;
  //   }
  // }
  // return result;
  // return repetedAddition;
  throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
}

module.exports = {
  repeater,
};
