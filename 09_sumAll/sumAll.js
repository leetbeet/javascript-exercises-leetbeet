const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || !(Number.isInteger(num1)) || !(Number.isInteger(num2))) return "ERROR";

    total = 0;

    if (num1 > num2) [num1, num2] = [num2, num1];

    for (let i = num1; i <= num2; i++) total += i;
    return total;
};

// Do not edit below this line
module.exports = sumAll;
