const palindromes = function (palindrome) {
    processedString =  palindrome.toLowerCase().replace(/[^a-z]/g,"");
    return (
        processedString
            .split("")
            .reverse()
            .join("") == processedString
    );
};

// Spread string to Array
// Compare the extremes until get to the center
// if all arte equal palindrome = true


// Do not edit below this line
module.exports = palindromes;
