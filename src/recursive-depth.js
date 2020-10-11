const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
      calculateDepth( arr, rec=1 ) {
        let res = rec;
        for(let i = 0; i < arr.length; ++i) {
            if (Array.isArray(arr[i])) {
            let subDepth = this.calculateDepth(arr[i], rec + 1);
            if (subDepth > res) {
                res = subDepth;
            }
          }
        }
        return res;
  }

};