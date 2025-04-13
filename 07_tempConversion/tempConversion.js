const convertToCelsius = function (fahrenheitValue) {
  let convertedTemperature = ((fahrenheitValue - 32) * 5) / 9;
  return Number.isInteger(convertedTemperature)
    ? convertedTemperature
    : convertedTemperature.toFixed(1) - 0;
};

const convertToFahrenheit = function (celsiusValue) {
  let convertedTemperature = celsiusValue * 1.8 + 32;
  return Number.isInteger(convertedTemperature)
    ? convertedTemperature
    : convertedTemperature.toFixed(1) - 0;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
