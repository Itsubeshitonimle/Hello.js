// ====== CREATE MODULE/ERROR HANDLING ======
// math.js (exports a function)
function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Inputs must be numbers!'); // Error handling addition
    }
    return a + b;
}

function subtract(a, b) {
return a - b;    
}

//MODULE EXPORT
module.exports = {add, subtract }; // Export Object

// app.js (imports & uses)
const math = require("./math"); // Relative path
console.log(math.add(5, 7)); //12
console.log(math.subtract(10, 3)); //7