
//nested loop is N steps * N steps O(N^2) quadratic time
function hasDuplicateValue(array) {
    var steps = 0;
    for (var i = 0; i < array.length; i++) {
        for(var j = 0; j < array.length; j++) {
            steps++;
            if (i !== j && array[i] == array[j]) {
                return true;
            }
        }
    }
    console.log(steps);
    return false;
}

//linear time O(N)
function hasDuplicateValues(array) {
    var steps = 0;
    var existingNumbers = [];
    for (var i = 0; i < array.length; i++) {
        steps++;
        if (existingNumbers[array[i]] === undefined) {
            existingNumbers[array[i]] = 1;
        } else {
            return true;
        }
    }
    console.log(steps);
    return false;
}
