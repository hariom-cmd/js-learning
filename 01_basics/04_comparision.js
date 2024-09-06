// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

//  console.log("2" > 1);
//  console.log("02" > 1);





// Avoid these type of comparisions

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

/*  NOTE:-
    The reason is that an equality check == and comparision > < <= >= works differently
    Comparision convert null to a number, treating it as 0.
    That's why (3) null >= 0 is true and (1) null > 0 is false
*/

// console.log(undefined == 0); // always false
// console.log(undefined >= 0); // always false
// console.log(undefined <= 0); // always false
// console.log(undefined < 0); // always false
// console.log(undefined > 0); // always false
// console.log(undefined != 0); // give true 


// strict check (checks value as well as data type)
console.log("2" === 2);


