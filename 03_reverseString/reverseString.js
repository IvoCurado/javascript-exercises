const reverseString = function (textToReverse) {
  let textToReverseChars = textToReverse.split("");
  let reversedTextChars = [];
  for (let i = textToReverseChars.length - 1; i >= 0; i--) {
    reversedTextChars.push(textToReverseChars[i]);
  }
  let reversedText = reversedTextChars.join('');
  return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
