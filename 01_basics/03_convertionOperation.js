let score = "33abc";

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score);
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// "33" => directly converted in number
// "33as" => not converted in number directly gives NaN
// true => 1; false => 0

let isLoggedIn = 1; // if we pass EMPTY string it gives false value 

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false
// "" => false
// "hariom" => true

let someNumber = 33;
let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);


// ***************** Operations ************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+3)
// console.log(2-3)
// console.log(2*3)
// console.log(2**3) => 2^3
// console.log(2/3)
// console.log(2%3)

let str1 = "hariom";
let str2 = " saini";
let str3 = str1 + str2;

console.log(str3);

// ****** Complex Situtations *********

//console.log("1" + 2);
//console.log(1 + "2");
//console.log("1" + 2 + 2);
//console.log(1 + 2 + "3");
//console.log.apply(3 + 1 - 10 * 23 % 3); // do not use ths type of mess-up codes

console.log(+true); // gives 1
console.log(+""); 