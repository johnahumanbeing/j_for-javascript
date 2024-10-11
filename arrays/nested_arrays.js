// when one of the elements in ana array is another array
// that's called a nested array or a multtidimensional array.

// Example
var ourArray = [["the universe", 42], ["everything", 101010]];

var myArray = [["Bulls", 23], ["White Sox", 45]];

// Accessing elements in nested arrays
var firstElement = ourArray[0]; // ["the universe", 42]
var secondElement = ourArray[1]; // ["everything", 101010]

// Accessing sub-elements in nested arrays
var firstSubElement = ourArray[0][0]; // "the universe"
var secondSubElement = ourArray[1][1]; // 101010

// Modifying elements in nested arrays
myArray[0][1] = 24; // Change 23 to 24
myArray[1][0] = "Cubs"; // Change "White Sox" to "Cubs"

console.log(myArray); // [["Bulls", 24], ["Cubs", 45]]
console.log(myArray[0][1]); // 24
console.log(myArray[1][0]); // "Cubs"
console.log(myArray[1][1]); // 45