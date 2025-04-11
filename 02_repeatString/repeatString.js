const repeatString = function (textToRepeat, numberOfTimes) {
  if (numberOfTimes < 0) {
    return "ERROR";
  }
  let result = "";
  for (let i = 0; i < numberOfTimes; i++) {
    result += textToRepeat;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
