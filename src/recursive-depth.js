const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
          throw new CustomError('Not implemented') ;

    // let res1 = arr.reduce((sum, elem) => sum + (Array.isArray(arr[elem]) ? this.calculateDepth(arr[elem]) : 1), 0)
    // return res1
  }
};