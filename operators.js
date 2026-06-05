/*
====== OPERATORS ======
Arithmetic, Assignment, Comparison, Logical, Ternary, etc.
*/

// Addition Operator
let x = 5;
let y = 5;
console.log(x + y);

//Subtraction Operator
x = 5;
y = 2;
console.log(x - y);

// Division Operator
console.log(x / y);

// Modulus Operator (Remainder)
console.log(x % y);

//Increment Operator
let m = 20;
console.log(m++);
console.log(++m);

// Decrement Opreator
let n = 45;    
console.log(n--);
console.log(--n);

// ====== Assignment Operators ======
let a = 9;
console.log((a += 3));
console.log((a -= 3));
console.log((a /= 3));
console.log((a %= 2));

//====== Comparison Operators ======
// console.log(5 == "5");
// console.log(5 === "5");
// console.log(5 != "5");
// console.log(5 !== "5");

//======= Greater Than Operator ======
console.log(8 > 5);
console.log(8 < 5);
console.log(8 >= 5);
console.log(8 <= 5);

// ====== Logical Opeartors ======
// AND (&&) Logical Operator
const xCoord = 6767;
const yCoord = 5733;
if (xCoord > 6000 && yCoord < 7000) {
    console.log("You are outside the region");
}

// OR (||) Logical Operators
if (xCoord === 3000 || yCoord > 3000) {
    console.log("You are within the limit");
}

// ====== NOT Logical Operators ======
const isAdmin = true;
const removeAdmin = !isAdmin;
console.log(isAdmin);
console.log(removeAdmin);

let result = 10 + 5 * 2
console.log(result);

let result2 = (10 + 5) * 2;
console.log(result2);


// ====== Ternary (?:) Operator ======
let age = 18;
let canVote = age >= 18 ? "yes" : "no";
console.log(canVote);

age = 12;
canVote = age >= 18 ? "yes" : "no";
console.log(canVote);

let boysAge = 20
let message = boysAge > 18 < 30 ? "yes" : "no";      
