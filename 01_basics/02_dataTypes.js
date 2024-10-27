"use strict"; // Treat all JS code as newer version(use all latest code)

// alert(3 + 3) // we are using nodejs, not browser , in browser a popup came

console.log( 3 +
    3
); // code readability should be high

console.log("hariom");

let name = "Hariom";
let age = 23;
let isLoggedIn = true;

// ********* data types *********
// number => 2^53
// bigint
// string => ""
// boolen => true/false

// interview qestion
// null => standalone value (null is an object) ,  NULL is a representation for an empty value int spaceX = null; 0 != null becase is a Value



// undefined
// symbol=> for unique
// object

console.log(typeof null); 



/*
In JavaScript, the Symbol is a unique and immutable data type, often used to create unique keys for object properties, 
ensuring that they won't conflict with other properties. Each time you create a Symbol, even if they have the same description, they are unique:

Example :- 
    const sym1 = Symbol("id");
    const sym2 = Symbol("id");

    console.log(sym1 === sym2); // false



Unique Object Keys: Symbols can be used as keys for object properties, preventing accidental overwrites and ensuring properties are unique.

Example :-
const myObject = {};
const uniqueKey = Symbol("key");

myObject[uniqueKey] = "value";
console.log(myObject[uniqueKey]); // "value"

*/


/*
In JavaScript, null is considered an object due to a bug in the original implementation of the language, specifically in its typeof operator. 
When JavaScript was first created, values were stored in a way that included a "type tag" for each data type. 
Objects were given a type tag of 0, and null was also assigned 0, leading typeof null to return "object".

*/