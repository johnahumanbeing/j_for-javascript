// Define an array with some elements
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

// Access the first element (index 0)
const firstFruit = fruits[0];
console.log('First fruit:', firstFruit); // Output: Apple

// Access the third element (index 2)
const thirdFruit = fruits[2];
console.log('Third fruit:', thirdFruit); // Output: Cherry

// Access the last element using length property
const lastFruit = fruits[fruits.length - 1];
console.log('Last fruit:', lastFruit); // Output: Elderberry

// Modify the second element (index 1)
fruits[1] = 'Blueberry';
console.log('Modified fruits:', fruits); // Output: ['Apple', 'Blueberry', 'Cherry', 'Date', 'Elderberry']

// Access an element that doesn't exist (index out of bounds)
const nonExistentFruit = fruits[10];
console.log('Non-existent fruit:', nonExistentFruit); // Output: undefined