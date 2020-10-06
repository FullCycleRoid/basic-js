const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
    throw new CustomError('Not implemented') ;

  // if (!(Array.isArray(arr))) {
  //   throw new Error('THROW')
  // }
  //
  // let newArr = arr
  // let index = null
  // for (let i=0; i < newArr.length; i++) {
  //   if (newArr[0] === '--discard-prev' || newArr[0] === '--double-prev') {
  //     newArr.splice(0, 1)
  //   }
  //
  //   if (newArr[newArr.length - 1] === '--discard-next' || newArr[newArr.length - 1] === '--double-next') {
  //     newArr.splice(newArr.length-1, 1)
  //   }
  //
  //   if (newArr[i] === '--discard-next') {
  //     index = arr.indexOf('--discard-next')
  //     newArr.splice(index, 2)
  //   } else if (newArr[i] === '--discard-prev') {
  //     index = arr.indexOf('--discard-prev')
  //     newArr.splice(index - 1, 2)
  //   } else if (newArr[i] === '--double-next') {
  //     index = arr.indexOf('--double-next')
  //     newArr.splice(index, 0, newArr[index + 1])
  //     newArr.splice(index, 1)
  //   } else if (newArr[i] === '--double-prev') {
  //     index = arr.indexOf('--double-next')
  //     let temp = newArr[index - 1]
  //     newArr.splice(index, 1)
  //     newArr.splice(index, 0, temp)
  //   }
  // }
  // return newArr
};


  //
  //   }
  // }