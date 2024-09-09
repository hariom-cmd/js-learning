"use strict"

// console.log(typeof (console.log("ha")));

function sayMyName() {
    console.log("hariom");
}

// when we write sayMyName => this is Function Refernce
// when we write sayMyName() => this is Function Execution

// sayMyName(); // function execution



// function to add two numbers

function addTwoNumbers(num1, num2){ // parameters
    // console.log(num1 + num2);
    return num1 + num2;
}

const result = addTwoNumbers(3,5); // Arguments
// console.log("Result", result); // this will give undefine because function is not returning anything to the result;



function logInUserMessage(username = "JS"){ // default Value is JS
    if(!username){ // Empty string/undefined ko Maan liay gya h ki vo false value
                   // !undefine => true , !"" => true
        console.log("Plese enter a username");
        return;
    }
    return `${username} just logged in.`
}

// console.log(logInUserMessage("Hariom"));


// PART 2 => 20th video
// let do some practice on REST Operator

function calculateCartPrice(val1, val2, ...otherValues){// first two values goes to first two variables and rest all goes to rest parameter
    return otherValues;
}

//console.log(calculateCartPrice(200, 300, 400, 500, 600));


// Passing object to a function as an argumnet

const user = {
    username: "Hariom Saini",
    subTotal: 599
}


function handleObject(anyObject){
    console.log(`Hello! ${anyObject.username} your shopping sub Total is: ${anyObject.subTotal}`);
}

// handleObject(user); // we can pass object after creating it 
// handleObject({      // we can also pass obejct at calling time
//     username: "Saini",
//     subTotal: 699
// })






// Passing array to the function

const myNewArray = [100, 200, 300];

function returnArrayValue(getAnArray){
    return getAnArray[0];
}

console.log(returnArrayValue(myNewArray)); // this is first create and pass into the function
console.log(returnArrayValue([1212,1313, 555])); // this is direct pass an array