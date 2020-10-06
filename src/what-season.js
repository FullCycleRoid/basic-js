const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  if (date === undefined ) {
    return 'Unable to determine the time of year!'
  }
  if (!(date instanceof Date) ) {
    throw new Error('THROWN')
  }

  if (Object.getOwnPropertyNames(date).length > 6) {
      throw new Error('THROWN')
  }

  let month = date.getMonth()

  if (month < 2 || month > 10) {
    return 'winter'
  } else if  (month > 1 && month <= 4){
    return 'spring'
  } else if  (month > 4 && month < 8){
    return 'summer'
  } else {
    return 'autumn'
  }
  function isFunction(functionToCheck) {
   return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
  }
};
