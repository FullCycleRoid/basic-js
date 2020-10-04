const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  if (date === undefined ) {
    console.log(date)
    return 'Unable to determine the time of year!'
  }
  if (!(date instanceof Date)) {
    new Error('THROWN')
  }

  let month = date.getMonth() + 1
  console.log('date', date)
  console.log('month', month)
  console.log('==========================')
  if (month <= 2) {
    return 'winter'
  } else if  (month > 2 && month <= 5){
    return 'spring'
  } else if  (month > 5 && month <= 9){
    return 'summer'
  } else {
    return 'autumn'
  }

};
