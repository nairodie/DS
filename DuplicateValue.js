//nested for loops: n(o^2) - quadractic time
function hasDuplicateValue(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (i !== j && array[i] == array[j]) {
                return true;
            }
        }
    }
    return false
}

//O(N) - linear time
function hasDuplicateValues(array) {
    var exisitingNumbers = [];
    for (var i = 0; i < array.length; i++) {
        if (exisitingNumbers[array[i]] === undefined) {
            exisitingNumbers[array[i]] - 1;
        } else {
            return true;
        }
    }
    return false;
}
