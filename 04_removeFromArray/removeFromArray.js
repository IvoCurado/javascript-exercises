const removeFromArray = function(arrayToProcess, ...itemsToRemove) {
    let processedArray = arrayToProcess.filter((element) => !itemsToRemove.includes(element));
    return processedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
