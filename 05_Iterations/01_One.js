// for , while,  do...while simple loops
// break and continue statement

// for of loop used for iterate over Arrays and objects
// iterators are => obejct, arrays, strings
const arr = [1,2,3,4,5,6];

for(const num of arr){
    // console.log(num);
}

const greetings = "Hello World!";
for(const greet of greetings){
    //console.log(`Each char is ${greet}`);
}


// Maps  => Stores unique Values AND map is also an Object

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
    // console.log(key); // this line will output whole array in return => ['IN','India'] like
    // console.log(key); // this line give output of keys
    // console.log(value); // this line will give output for values
    //console.log(key , ':-' , value); // 
}




// Is For of loop works on objects?
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
    // console.log(key); // this line will output whole array in return => ['IN','India'] like
    // console.log(key); // this line give output of keys
    // console.log(value); // this line will give output for values
    //  console.log(key , ':-' , value)
}



// For-each loop => hogher order function

const coding = ["js","rb","py","java","cpp"];

// basic implementation
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

//  coding.forEach(printMe);

coding.forEach( (item, index, arr) => {// first value for array Element,second value for array index, third value for complete array
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


