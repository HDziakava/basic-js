const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[], [[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.maxDepth = 1;
  }

  calculateDepth(arr, depth = 1) {
    if (!arr.some((arrItem) => Array.isArray(arrItem))) {
      if (this.maxDepth < depth) {
        this.maxDepth = depth;
      }
      return depth;
    }
    arr.forEach((arrItem) => {
      if (Array.isArray(arrItem)) {
        const currDepth = this.calculateDepth(arrItem, depth + 1);
        if (this.maxDepth < currDepth) {
          this.maxDepth = currDepth;
        }
      }
    });

    const finalMaxDepth = this.maxDepth;
    this.maxDepth = 1;
    return finalMaxDepth;
  }
}

module.exports = {
  DepthCalculator,
};
