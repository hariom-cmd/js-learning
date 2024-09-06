/*
JavaScript is dynamically typed.
This means that the type of a variable is checked at runtime, not at compile time. You don't need to explicitly declare the type of a variable when you create it.
*/


// Primitive type
// 7 types(Always call by value - copy is provided)
// => String, Number, Boolean,null, undefined, Symbol, bigInt

// const score = 300;
// const scoreTemp = null;
// const scoreValue = 100.3;

// const isLoggedIn = false;
// let userEmail; // => by default undefined


// // symbol is used for uniqueness 
// const id = Symbol('123');
// const anotherid = Symbol('123');
// console.log(id === anotherid); // false (value is same but return type is different (return type is also a symbol))

// const bigNumber = 131873147413131n // n for bigInt










// reference type (Non-Premitive)

// Web events, Browser events and Obejct master these topic to master in JS
// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj","doga"]; // array

// object
let myObj = { // every thing inside the {} are objects
    name : "hitsh",
    age : 23
};


// function as variable
const myFunction = function() {
    console.log("Hello World");
} 

console.log(typeof myFunction); // return type is function object 
console.log(typeof myObj); // object
console.log(typeof heros); // object

