const palindromes = function (text) {
    text = text.toLowerCase();

    textArr = text.split("");
    for (let i = 0; i < textArr.length; i++) {
        if (!(textArr[i] >= 'a' && textArr[i] <= 'z') && !(textArr[i] >= '0' && textArr[i] <= '9')) {
            textArr.splice(i, 1);
            i--;
        }
    }

    for (let i = 0; i < Math.ceil(textArr.length/2); i++) {
        if (textArr[i] !== textArr[textArr.length-i-1]) return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
