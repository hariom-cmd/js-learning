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