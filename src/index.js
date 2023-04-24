//Create a function that takes a boolean variable and return if as a string.
//ex: toString(true) -> "true" toString(false) -> "false"



// function toString(str) {
//     return str.toString()
// }
// console.log(typeof(toString(true)))



//Create a function that takes two strings as args and return either true or false depending on the total number of characters in the
//first string is equal to the number characaters in the second string.code-active-line

//ex. compareTwoStrings("AB", "CD") -> true
//ex: compareTwoStrings("ABC", "DE") -> false 

function compareTwoStrings(strOne, strTwo){
    return strOne.length === strTwo.length
}

console.log(compareTwoStrings("AB", "CD"))


