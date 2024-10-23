// Strict inequality operator ( !== ) checks both value and type

// Example 1: Different types
let a = 5; // number
let b = '5'; // string

console.log(a !== b); // true, because the types are different

// Example 2: Same type, different values
let c = 10;
let d = 20;

console.log(c !== d); // true, because the values are different

// Example 3: Same type and same value
let e = 30;
let f = 30;

console.log(e !== f); // false, because both the type and value are the same