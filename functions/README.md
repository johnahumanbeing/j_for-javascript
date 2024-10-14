# JavaScript Functions

## Introduction
Functions are one of the fundamental building blocks in JavaScript. They allow you to encapsulate code into reusable blocks, making your code more modular and easier to maintain.

## What is a Function?
A function is a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it.

## Defining a Function
You can define a function using the `function` keyword, followed by a name, a list of parameters enclosed in parentheses, and a block of code enclosed in curly braces.

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
```

## Calling a Function
To call a function, simply use its name followed by parentheses, optionally passing arguments.

```javascript
console.log(greet('John')); // Output: Hello, John!
```

## Types of Functions

### 1. Function Declaration
A function declared using the `function` keyword.

```javascript
function add(a, b) {
    return a + b;
}
```

### 2. Function Expression
A function can also be defined using an expression. These can be anonymous or named.

```javascript
const multiply = function(a, b) {
    return a * b;
};
```

### 3. Arrow Function
Introduced in ES6, arrow functions provide a shorter syntax.

```javascript
const subtract = (a, b) => a - b;
```

### 4. Immediately Invoked Function Expression (IIFE)
A function that runs as soon as it is defined.

```javascript
(function() {
    console.log('IIFE executed');
})();
```

## Conclusion
Understanding functions is crucial for mastering JavaScript. They help in organizing code, making it reusable, and improving readability.
