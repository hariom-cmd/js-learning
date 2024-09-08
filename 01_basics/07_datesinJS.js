"use strict"

let myDate = new Date(); // date is an object in JS

// console.log(typeof myDate);
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.getTimezoneOffset());


// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("08-09-2024");
// console.log(myCreatedDate.toLocaleString());



// Time Stamps
let myTimeStamp = Date.now();
// console.log(myTimeStamp); => gives total mili seconds from 1 jan 1970 to till now
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));
 

// can be combine with string interpolation
let newDate = new Date();
// console.log(newDate.getMonth()); // months are 0 based indexed
// console.log(newDate.getDay()); // months are 0 based indexed




// Important 


console.log(newDate.toLocaleString('default', {
    weekday: "long",
    month: "long",
}));
