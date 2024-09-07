"use strict";

const name = "Hariom";
const age = 24;


// This is outdated technique
// console.log("My name is " + name + " and my age is " + age);


// We use new technique called string interpollation
// More readable and we can apply methods on the go time
// console.log(`Hello! My name is ${name.toUpperCase()} and my age is ${age}.`);



// Here String in an Object Stores value in key value form
// String {'hariomSaini'}
    // key : value
    // 0 : "h"
    // 1 : "a"
    // 2 : "r"
    // 3 : "i"
    // 4 : "o"
    // 5 : "m"
    // 6 : "S"
    // 7 : "a"
    // 8 : "i"
    // 9 : "n"
    // 10 : "i"
    //      length: 10

const gameName = new String('hari-om-Saini');
// console.log(gameName.__proto__); // give obejct

// console.log(gameName.length); // length is a property
// console.log(gameName.toUpperCase()); // now this is a method => original string remaine same
// console.log(gameName.charAt(3)); 
// console.log(gameName.indexOf('S')); 

// const newString = gameName.substring(0,4); // here 4 is excluded:- [start,end) negative values ignored
// console.log(newString); 

// const anotherString = gameName.slice(-12,4); // negative value also allowed
// console.log(anotherString); 





// const newStringOne = "     happy diwali        ";
// console.log(newStringOne);
// console.log(newStringOne.trim()); // removes startig and ending white spaces only
// console.log(newStringOne.trimStart()); 
// console.log(newStringOne.trimEnd());





const url = "https://hariom.com/hariom%20saini";
console.log(url.replace('%20','-'));
console.log(url.includes('%20'));

console.log(gameName.split('-')); // its split whole string into an array based on the given character.







