"use strict"

/*  Both are empty objects


// Example of singleton Object
// const tinderUser = new Object();

// Example of non singleton Object
// const tinderUser = {}

*/


const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


// Object nesting
const regularUser = {
    email: "hariom@gmail.com",
    fullName: {
        userFullName: {
            firstName: "hariom",
            lastName: "saini"
        }
    }
}


// Access nested objects using "."
// console.log(regularUser.fullName.userFullName.firstName);

// Optional chaining : Maan lo fullName hota hi nhi to ? optional chaining used Aage ke lecture me dekhte h
// console.log(regularUser.fullName?.userFullName.firstName);





// Combininf Of Objects
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj3 = {5: "a", 6: "b"}; // In 3no objects ko obj 4 me copy kr do

// const obj3 = {obj1, obj2}; // agr hm ese copy/conbine krte h to vhi same array vali problem ayegi jese array k andr array store ho rha tha vese hi object k andr object store hojega

//const obj4 = Object.assign({}, obj1, obj2, obj3); // IN this assign method first argument is target Object and rest all are source object (This is best practice to pass an empty target Obejct so that all the source objects copy to it)

// const obj4 = {...obj1, ...obj2, ...obj3}; // and 3rd is by using spread operator THIS is highly used and easy to use
//console.log(obj4);





// Jb database se values ati h (array of objects database se values ati h);
// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 21,
//         email: "h1@gmail.com"
//     },
//     {
//         id: 3,
//         email: "h22@gmail.com"
//     }
// ]; // man lo ese data base se values ari h to h in objects pr loop through bhi kr skte h ya koi or operations bhi apply kr skte h 

// console.log(users[1].email);





// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // output value ka data type h array Or Jb array return hora h to hm ispe loop lga skte h ya or koi kaam krva skte h By Accessing Index
// console.log(Object.values(tinderUser)); // output value ka data type h array Or Jb array return hora h to hm ispe loop lga skte h ya or koi kaam krva skte h By Accessing Index
// console.log(Object.entries(tinderUser)); // output is array of [key:  vlaue] format
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // ye check krta h ki object k pas ye property h ya nhi



// Last Video on objects

// Destructuring of an object

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "hariom"
}


//console.log(course.courseInstructor); // => fetching vpurseInstructor every time like this is tidies when we using this frequently. So we destructure it

// Destructuring Syntax: {propertyName: AliseName} = ObjectName;
const {courseInstructor: instructor} = course; // hmne course me se courseInstructor fetch kiya or ab hm direct courseInstructoe se hi courseInstructor ko use kr skte h (Or hm use Alise bhi kr skte h)
console.log(instructor);


/* how to use Destructuring in react
    // Agr hm Desture use nhi krte to {company} ----> ki jgh (props.company) us krna pdta 
    const navbar = ({company}) => {

        };
    
    navbar(company = "hitesh")
*/

// finish basics





