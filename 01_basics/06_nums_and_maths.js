 const score = 300;
//  console.log(score);

 const balance = new Number(100); // this type of declaration of the number gives gurantees that the balance is a number type and can't be change 
//  console.log(balance);

//  console.log(balance.toString().length);
//  console.log(balance.toFixed(2)); // 100.00 after point how many number should be consider
 

 const otherNumber = 123.8966;
//  console.log(otherNumber.toPrecision(4)); // prority goes to before point (if precission is 5 than result will be in scientific noatation)



 const hundreds  = 1000000;
//  console.log(hundreds.toLocaleString("en-IN")); // by default given comma seperated in US standards (but we can change into INDIAN by passing "en-IN")

 // Explore more about ON Numbers on MDN






 // Now MAths

//  ************************** MATHS ********************

// console.log(Math); // Math is an object and lot of Properties & Methods
// console.log(Math.abs(-22));
// console.log(Math.round(22.61313));
// console.log(Math.ceil(22.61313));
// console.log(Math.floor(22.61313));
// console.log(Math.min(21,3,33,3,14,1));
// console.log(Math.max(31,3,13,14,14,4,2,4));

// console.log(Math.random()); // values lies between 0 to 1
// console.log((Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1); // we can nest Math Functions

// formula to maintain random value in a given range
const min = 10;
const max = 20;

// IMPORTANT line for generating random values in a given range
console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // we add 1 to avoid getting 0 as a value





