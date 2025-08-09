"use strict"
// NOTE : INTERVIEW question
// globe scope is node environment me alg hota h or browser k console me alg



// var c = 300
let a = 300;

if(true){
    let a = 10;
    const b = 20;
    console.log("INNER : " ,a);
}

console.log(a);
// console.log(b);
// console.log(c);


// 2nd video

function one(){
    const username = "Hariom";


    // Basic  idea about "closure" is that inner function can access outer function variables and fucntion
    function two(){
        const website = "Youtube";
        console.log(username);
    }

    // console.log(website);
    two();
}

one();



if(true){
    const username = "Hariom";

    if(username === "Hariom"){
        const website = "youtube";
        console.log(username + website);
    }

    // console.log(website); => error
}

// console.log(username); => error



// ******************* interesting concept **********************

// Diferent ways to declare functions


// Function declaration and call anywhere allowed
addOne(4);
function addOne(num){
    return num + 1;
}
addOne(4);



// this is also a function but some time calls Expression
// but here function declaration must be first than call/Execute
// else give ERROR
// is concept ko khte h Hoisting

//addTwo(5);
const addTwo = function(num){
    return num + 2;
}

addTwo(5);
