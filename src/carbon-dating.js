const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const RATE_CONSTANT = 0.693;

module.exports = function dateSample(sampleActivity) {
  let num = Number.parseFloat(sampleActivity);
  if ((typeof sampleActivity == 'string') && (num > 0 && num <= 15)) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / num) / (RATE_CONSTANT / HALF_LIFE_PERIOD));
  }
  return false;
};
