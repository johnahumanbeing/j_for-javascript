// if statements are used to make decisions in code based on conditions.
// The condition is evaluated to be true or false, and the code inside the block is executed only if the condition is true.

function isTrueOrFalse(isItTrue)
{
    if(isItTrue)
    {
        return "Yes, it's true";
    }
    return "No, it's false";
}

function checkEqual(a, b)
{
    if(a === b)
    {
        return "Equal";
    }
    return "Not Equal";
}

console.log(isTrueOrFalse(true));
console.log(checkEqual(1, 1));