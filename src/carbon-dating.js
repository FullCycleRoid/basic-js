const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  if (Array.isArray(sampleActivity)) {
    return false
  }

  if (typeof sampleActivity !== 'string') {
    return false
  }

  if (isNaN(parseInt(sampleActivity))) {
    return false
  }

  if (parseFloat(sampleActivity) > 15 || parseInt(sampleActivity) <= 0) {
    return false
  }

  let sampleTime = MODERN_ACTIVITY / sampleActivity
  let k = 0.693 / sampleTime
  let time = Math.ceil(sampleTime / k)
  console.log(time)
  return time
};
