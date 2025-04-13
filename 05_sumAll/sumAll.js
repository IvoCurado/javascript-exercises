const sumAll = function (first, last) {
  if (!areArgumentsPositiveIntegers(first, last)) {
    return "ERROR";
  }
  let sum = 0;
  const greater = first > last ? first : last;
  const lesser = first < last ? first : last;
  for (let i = lesser; i <= greater; i++) {
    sum += i;
  }
  return sum;
};

function areArgumentsPositiveIntegers(number1, number2) {
  return (
    typeof number1 === "number" &&
    typeof number2 === "number" &&
    number1 > 0 &&
    number2 > 0 &&
    parseInt(number1) === number1 &&
    parseInt(number2) === number2
  );
}

// Do not edit below this line
module.exports = sumAll;
