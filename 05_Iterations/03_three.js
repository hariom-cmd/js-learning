// Use of Map : Array prpperty and also take callback fnx as an argument and automatically return value
const myNumbers = [1,2,3,4,5,6,7,8,9,10];


// const newNums = myNumbers.map( (num) => num + 10 );


// chaining   Execution from left to right
const newNums = myNumbers
                .map( (num) => num * 10 ) // phle sab ko 10 se multiply kr do => [10,20,30,40.....]
                .map( (num) => num + 1 )  // ab sab value me add 1 => [11,21,31,41,51......]
                .filter( (num) => num >= 40 ); // at last me fitler lga diya jo true hoga vhi return hoga. => [41,51,61,71....]
console.log(newNums);

