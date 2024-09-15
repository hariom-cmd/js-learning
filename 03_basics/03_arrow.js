// (this) key word current context ko refer krta h

const user = {
    username: "hariom",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to webdite.`);
        console.log(this);
    }
}

// user.welcomeMessage(); // for hariom's context

// user.username = "Mafia"; // we changed the context for Mafia

// user.welcomeMessage(); // for Mafia's context




// ********* interview question *********
// console.log(this); // here (this) refer to an empty object because we are on NODE Environment and there is global context
// NOTE: but when we run colsole.log(this) on browser we get window as an object because in browser window is the global object



/*
 function chai(){
    let username = "Hariom Saini";
    console.log(this); // this will give something related to object (OR there are some object related stuff is accessable)
    //console.log(this.usernmae); // this will give UNDEFINED so, we can't use this inside function we use this only inside objects
}

chai();
*/




// normal function
// const chai = function () {
//     let username = "HariomGSaini";
//     console.log(this.uusername);
// }

// chai();


// Arrow function
// const chai =  () => {
//     let username = "HariomGSaini";
//     console.log(this); // give {} // find answer for both nomal and arrow function by we can't use this inside functions
// }

// chai();







// Pure arrow functions

// Pure basic arrow finction
const addTwo = (num1, num2) => {
    return num1 + num2; // Explicit return
}
console.log(addTwo(3,7));

// Noe Implicit return Arrow Function

const multTwo = (num1,num2) => (num1 * num2); // because function containing only one line it ise assumed that this is a retunr statement we not need to write RETURN keyword by self; 
// Best practice is to wrap this inside () because sometime we need to return an object and object return in {username:"HAriom"} for and when we use {} fuction become explicit return type amd ask for retunr keyword and give error
// so use () everytime. Very useful in REACT

console.log(multTwo(2,3));
