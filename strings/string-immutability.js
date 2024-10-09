// strings are immutable meaning that they cannot be changed once they are created
// but you can change the reference to the string

var myStr = "Jello World";

myStr[0] = "H"; // this will not work
console.log(myStr);

myStr = "Hello World"; // this will work
console.log(myStr);