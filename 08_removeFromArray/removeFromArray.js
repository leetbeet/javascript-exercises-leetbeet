const removeFromArray = function(arr, ...remove) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < remove.length; j++) {
            if (arr[i] === remove[j]) {
                arr.splice(i, 1);
                i--;
                break;
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
