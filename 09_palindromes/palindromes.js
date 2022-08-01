const palindromes = function (text) {
    text = text.replace(/[\s.,!?'":;/,]/g, "");
    text = text.toLowerCase();
    let textLength = text.length - 1;
    let isPalindrome = false;

    for (let i = 0; i != textLength; i++) {
        if (text[i] !== text[textLength--])
            return false;
        isPalindrome = true;
    }
    return isPalindrome;

};

// Do not edit below this line
module.exports = palindromes;
