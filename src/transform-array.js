const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  let array = [...arr];

  const removeIndex = (index) => {
    array = [...array.slice(0, index), ...array.slice(index + 1)];
  };

  const addElementToIndex = (index, el) => {
    array = [...array.slice(0, index), el, ...array.slice(index)];
  };

  arr.forEach((element) => {
    if (`${element}`.startsWith("--")) {
      const modifierIndex = array.indexOf(element);
      const isPrev = element.includes("prev");
      const isNext = element.includes("next");
      const modifierNum = isPrev ? -1 : isNext ? 1 : 0;
      const elementToCopy = array[modifierIndex + modifierNum];

      if (elementToCopy ?? false) {
        if (element.includes("double")) {
          addElementToIndex(modifierIndex, elementToCopy);
        } else if (element.includes("discard")) {
          removeIndex(modifierIndex + modifierNum);
        }
      }
    }
  });

  const finalArray = array.filter(
    (el) => !`${el}`.startsWith("--discard") && !`${el}`.startsWith("--double")
  );

  return finalArray;
}

module.exports = {
  transform,
};
