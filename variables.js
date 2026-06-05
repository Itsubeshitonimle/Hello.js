/*
====== VARIABLES ======
Declared with var, let, const, automatically
*/

// === Using var ===
var name = "Alice";
console.log(name);

var name = "Isaiah";
console.log(name);

var name = "Jerome";
console.log(name);

var name = "Bartholomew";
console.log(name);

var name = "Samuel";
console.log(name);

var name = "Anthony";
console.log(name);

var name = "Blessing";
console.log(name);

var name = "Venatius";
console.log(name);

var name = "Theresa";
console.log(name);

var name = "Emmanuel";
console.log(name);

var hobbies;

// Function - Scoped
function greet() {
    if (true) {
        var message = "Hello";
    }
    console.log(message);
}
greet();

// === Using let ===
// Block - Scoped
// Can be updated, but not redeclared
let age = 22;
console.log(age);
age = 26;
console.log(age);
age = 24;
console.log(age);
age = 20;
console.log(age);
age = 18;
console.log(age);

let username;

if (true) {
    var greeting = "Hi Isaiah";
    console.log(greeting);
}
console.log(greeting);

// === Using Const ===
// Block-Scoped
//Cannot be updated or redeclared.
const pi = 3.14159;
console.log(pi);

// Block-Scoped
if (true) {
    const city = "Lagos";
    console.log(city);
}

boys = 6
girls = 0
totalnumberofchildren = boys + girls
console.log(totalnumberofchildren);

  