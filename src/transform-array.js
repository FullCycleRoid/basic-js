const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
      throw new CustomError('Not implemented') ;
  //   if (!(Array.isArray(arr))) {
  //       throw new Error('THROW')
  //   }
  //   let newArr = arr
  //   let index = null
  //
  //   console.log(newArr)
  //
  //   let length = 0
  //
  //   for (let i = 0; i < newArr.length; i++) {
  //       length = newArr.length
  //
  //       console.log('Length', length)
  //
  //       if (newArr[0] === '--discard-prev' || newArr[0] === '--double-prev') {
  //           console.log('before deletion', newArr)
  //           newArr.splice(0, 1)
  //           console.log('after deletion', newArr)
  //           i = 0
  //           continue
  //       }
  //
  //       if (newArr[newArr.length - 1] === '--discard-next' || newArr[newArr.length - 1] === '--double-next') {
  //           console.log('before deletion', newArr)
  //           newArr.splice(newArr.length - 1, 1)
  //           i = 0
  //           console.log('after deletion', newArr)
  //           continue
  //       }
  //
  //       if (newArr[i] === '--discard-next') {
  //         console.log('before deletion', newArr)
  //         newArr.splice(i, 2)
  //         i = 0
  //         console.log('after deletion', newArr)
  //       } else if (newArr[i] === '--discard-prev') {
  //         console.log('before deletion', newArr)
  //         newArr.splice(i - 1, 2)
  //         i = 0
  //         console.log('after deletion', newArr)
  //       } else if (newArr[i] === '--double-next') {
  //         console.log('before double', newArr)
  //         console.log('double value', newArr[i + 1])
  //         newArr.splice(i+1, 0, newArr[i + 1])
  //         newArr.splice(i, 1)
  //         i = 0
  //         console.log('after double', newArr)
  //       } else if (newArr[i] === '--double-prev') {
  //         console.log('before double', newArr)
  //         console.log('double value', newArr[i-1])
  //         newArr.splice(i, 1)
  //         newArr.splice(i-1, 0, newArr[i-1])
  //         i = 0
  //         console.log('after double', newArr)
  //       }
  //   }
  // console.log('after loop arrAy', newArr)
  // return newArr
};
