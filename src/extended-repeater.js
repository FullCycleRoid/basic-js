const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {

  let resStr = ''
  let repeatTimes = Number(options['repeatTimes'])
  let separator = options['separator'] || '+'
  let addition = String(options['addition']) || ''
  let additionRepeatTimes =  options['additionRepeatTimes']
  let additionSeparator =  options['additionSeparator'] || '|'

  let string = String(str)

  if (typeof additionRepeatTimes === 'undefined' && isNaN(repeatTimes)) {
    resStr += '' + string + addition
    return resStr
  }

  if (isNaN(repeatTimes)) {
    return string
  }

  for (let i = 0; i < repeatTimes; i++) {

    if (repeatTimes && !addition) return resStr += '' + string + separator
    resStr += '' + string

    if (addition) {
      for (let k = 0; k < additionRepeatTimes; k++) {
        if (k === additionRepeatTimes - 1) {
          resStr += addition
        } else {
            resStr += addition + additionSeparator
        }
      }
      if (i === repeatTimes - 1) {
        return resStr
      }
    }
     resStr += separator
  }
  return resStr
};
  