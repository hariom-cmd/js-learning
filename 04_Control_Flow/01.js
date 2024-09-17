"use strict"

// Control Flow

// 1. if

// 2. if() else

// 3. nested if...else if().....else if()........ else

// switch(statement)

// Falsy values are those are assumed as FALSE
// ===> false,0, -0, BigInt 0n, "", null, undefined, NaN
// expect these all are true values


// Truthy Values
// "0", 'false', " ", [], {}, function(){}





// How to check obe=ject is empty or not

const emptyObject = {};

if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty");
}// Object.keys() => used to access all keys and it return an array of all keys 
 // if the array of the keys is empty its length is 0 and we appply length function to check object is empty or not


 /* competative programming me use ate h
    false == 0 (true)
    false == '' (true)
    0 == '' (true) 
 */



// NUllish Coalescing Operator (??): used for only (null,undefined)
// if first value is not null or undefined the firt value is assigned else next to null/undefined value is assigned
// use case: when we get respone from database or firebase or elsewhere we don't get values directly we get two values
// and there i ssome chances that there is no value or null or undefind value if returning from databsase



let val1;
// val1 = 5 ?? 10; 
// val1 = null ?? 10;
// val1 = undefined ?? 10;
val1 = undefined ?? 5 ?? 10;

console.log(val1);