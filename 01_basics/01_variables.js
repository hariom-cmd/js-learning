const birthYear = 1999;         // Recomended data type
let age = 24;                   // Commonly used data type
var fullName = "Hariom Saini";  // Never use this variable type because of the scope
hariom = 24;                    // worst practice to declare variable like this

let firstName; // by defautl value is undefined

//console.log(fullName);

// A tabular way to show all variables
console.table([birthYear,age,fullName,hariom,firstName]);


/*
NOTE: prefer not to use VAR data type
because of issue in block and functional scope


Complier work done by node.js

How to run code : node 01_variables.js (enter)
*/