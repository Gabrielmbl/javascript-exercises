const palindromes = function (str) {
    const alphanumericalString = str
        .toLowerCase()
        .split("")
        .filter((character) => (character >= "a" && character <= "z") ||
            !isNaN(character) && 
            character != " ")
        .join("")

    const reversedStr = alphanumericalString.split("").reverse().join("")

    console.log(`alphanumericalString = ${alphanumericalString}`)
    console.log(`reversedStr = ${reversedStr}`)
    return alphanumericalString === reversedStr

};
  

// Do not edit below this line
module.exports = palindromes;
