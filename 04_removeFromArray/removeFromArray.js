const removeFromArray = function(array, ...elements) {
    for (let element of elements)
        if (array.indexOf(element) != -1) {
            let elementIndex = array.indexOf(element);
            array.splice(elementIndex, 1);
        }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
