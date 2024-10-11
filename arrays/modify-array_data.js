// Initialize an array with some elements
let fruits = ['Apple', 'Banana', 'Cherry'];

// Add a new element to the end of the array
fruits.push('Date'); // ['Apple', 'Banana', 'Cherry', 'Date']

// Remove the last element from the array
let lastFruit = fruits.pop(); // lastFruit = 'Date', fruits = ['Apple', 'Banana', 'Cherry']

// Add a new element to the beginning of the array
fruits.unshift('Elderberry'); // ['Elderberry', 'Apple', 'Banana', 'Cherry']

// Remove the first element from the array
let firstFruit = fruits.shift(); // firstFruit = 'Elderberry', fruits = ['Apple', 'Banana', 'Cherry']

// Modify an element at a specific index
fruits[1] = 'Blueberry'; // ['Apple', 'Blueberry', 'Cherry']

// Remove an element by index using splice
let removedFruit = fruits.splice(1, 1); // removedFruit = ['Blueberry'], fruits = ['Apple', 'Cherry']

// Add elements at a specific index using splice
fruits.splice(1, 0, 'Banana', 'Blueberry'); // ['Apple', 'Banana', 'Blueberry', 'Cherry']

// Find the index of an element
let index = fruits.indexOf('Cherry'); // index = 3

// Remove an element by value
if (index !== -1) {
    fruits.splice(index, 1); // ['Apple', 'Banana', 'Blueberry']
}

// Log the final array
console.log(fruits); // ['Apple', 'Banana', 'Blueberry']