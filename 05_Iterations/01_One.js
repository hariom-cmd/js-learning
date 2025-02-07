// for , while,  do...while simple loops
// break and continue statement

// for of loop used for iterate over Arrays and objects
// iterators are => obejct, arrays, strings
const arr = [1,2,3,4,5,6];

for(const num of arr){  // syntex of for..of : for(const iterator of object){}; ==> yha pr object broader term me use kiya ja rha h yeJS ka object nhi h ()iska mtlb h ki kis pr loop lgana h
    // console.log(num);
}

const greetings = "Hello World!";
for(const greet of greetings){ // Object hona jruri nhi h Kuch bhi ho skta h LIKE String
    //console.log(`Each char is ${greet}`);
}


// Maps  => Stores unique Values AND map is also an Object (Array jese hi hote h)

const map = new Map();
map.set('IN',"India");
map.set('USA',"United States of America");
map.set('FS',"France");

// console.log(map);


// without destructuring if print key will give output whole array
for (const key of map) {
    // console.log(key); // this line will output whole array in return => ['IN','India'] like
}

// Destructuring Array 
for (const [key,value] of map) { // maps are not iteratable so we can't use for-in loop
    // console.log(key); // this line will output whole array in return => ['IN','India'] like Before destructuring
    // console.log(key); // this line give output of keys After Destructuring
    // console.log(value); // this line will give output for values After Destructuring
    //console.log(key , ':-' , value); // here keys and values are printing seperatly as we destructure the Array
}




// Is For of loop works on objects (Objects like : myObject = {} )?
// Ans: NO, objects are NOT iteratable
// following code will not work
/*

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
};

for(const [key,val] of myObject){
    console.log(key , ':-', val);
}
*/






// Here is how to iterate Object

const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'Swift by apple'
};


// to iterate over obejcts we use for...in loop (for...in use many places not for objects only)
for(const key in myObject){
    //console.log(`${key} is Abbrivated for ${myObject[key]}`);
}


// Now the question is can we iterate over array using for-in loop?
// yes but we got only keys i.e index not the value
// example

const programmingLanguage = ["js","rb","py","java","cpp"];

for(const key in programmingLanguage){
    // console.log(key); // this will give indexes of the array values
    //console.log(key , ':- ',programmingLanguage[key]);
}

// NOTE: Map pr for-in loop nhi chla skte kyoki vo iteratble nhi hote
// Even if we destructre it
for (const [key,value] in map) { // maps are not iteratable so we can't use for-in loop
    // console.log(key); // output is nothing
}



// For-each loop => higher order function

const coding = ["js","rb","py","java","cpp"]; // forEach loop array ki hi 1 property h 

// basic implementation (forEach me callback function pass krna hota h)
coding.forEach( function (val){ // Call back function
    //console.log(val);
} );

// Arrow function
coding.forEach( (item) => {
    //console.log(item);
} );



// passing function reference as a parameter in forEach loop
//  function printMe(item){
//     console.log(item);
//  }

//  coding.forEach(printMe); // bs callback function ka reference dena h use execute nhi krna h ok





// first value for array Element,second value for array index, third value for complete array
coding.forEach( (item, index, arr) => {
    //console.log(item, index, arr);
} );


// When there are objects as an array elements 
// very important and very useful

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "C plus plus",
        languageFileName: "Cpp"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    }
];

// yha pr item jo h 1 pura object retunr ho rha h to hm . lga k iske elements ko access kr skhte h
myCoding.forEach( (item) => {
   // console.log(item.languageFileName);
});


