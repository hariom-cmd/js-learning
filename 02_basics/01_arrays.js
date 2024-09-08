"use strict"
const myArray = [0,1,2,3,4,5,6];
// const myHeros = ["shaktiman", "naagraj"];

const myArr2 = new Array(1,2,3,4);
// console.log(myArray);
// console.log(myArr2);

// Array methods

// myArray.push(10);
// myArray.push(18);
// myArray.pop();

// myArray.unshift(100); // => push value from start (start se leke end tk sari values ko shift krna pda Not Optimied)
// myArray.shift(); // remove element form start

// questionary methods
// console.log(myArray.includes(9));

const newArr = myArray.join(); // join copies all values of myArray to newArr in "STRING"


// console.log(myArray)
// console.log(newArr)
// console.log(typeof newArr) // typeof newArr is string





// SLICE & SPLICE
console.log("Original Array", myArray);

const sliceValaArray = myArray.slice(3,4); // return range of array [startIndex,endIndex) And ye original array ko change nhi krta h
console.log("Slice Vala Array ka result :",sliceValaArray);
console.log("Original Array after Slice", myArray);


const spliceValaArray = myArray.splice(0,2); // return range of array [is index se start kro,itne elemenys nikal k le ao] And ye original array ko change krta h
console.log("Splice Vala Array ka result :",spliceValaArray);
console.log("Original Array after Splice", myArray);


