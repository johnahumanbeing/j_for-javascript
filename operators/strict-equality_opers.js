// strict equality operators (===, !==) are used in the following contexts:
// 1. if condition
// 2. while condition
// 3. for condition
// 4. do-while condition
// 5. switch case
// 6. ternary operator
// 7. return statement

// 1. if condition
if (5 === 5) {
    console.log('5 is equal to 5');
}

// 2. while condition
let count = 0;
while (count !== 5) {
    console.log(count);
    count++;
}

// 3. for condition
for (let i = 0; i !== 5; i++) {
    console.log(i);
}

// 4. do-while condition
let num = 0;
do {
    console.log(num);
    num++;
} while (num !== 5);

// 5. switch case
let value = 10;
switch (value) {
    case 10:
        console.log('Value is 10');
        break;
    case 20:
        console.log('Value is 20');
        break;
    default:
        console.log('Value is not 10 or 20');
}

// 6. ternary operator
let result = (5 === 5) ? 'Equal' : 'Not equal';
console.log(result);

// 7. return statement
function isEqual(a, b) {
    return a === b;
}
console.log(isEqual(5, 5)); // true