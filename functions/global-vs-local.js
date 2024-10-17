// Global function
function globalFunction() {
    console.log("This is a global function.");
}

// Calling the global function
globalFunction();

function outerFunction() {
    // Local function
    function localFunction() {
        console.log("This is a local function.");
    }

    // Calling the local function
    localFunction();
}

// Calling the outer function which in turn calls the local function
outerFunction();

// Trying to call the local function outside its scope will result in an error
// Uncommenting the following line will cause a ReferenceError
// localFunction();