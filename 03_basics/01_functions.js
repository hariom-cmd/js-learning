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

console.log(logInUserMessage());