// singleton (constructor ki trh )
// Object.create() => singleton ke bare me baat bad me krenge




// Object literals ("key": value)
// InterView Question : 1 symbol lo use obeject ki ki keys me add kro or use print kr k dikhao

const mySym = Symbol("key1");


const jsUser = { // object k andr keys as a string store hoti h agr hm apne aap se key ko string na bnaye to
    name: "Hariom",
    "full name": "Hari om Saini", // there is no way to access this value without " ";
    age: 24,
    location: "Panipat",
    email: "hariom@gmail.com",
    isLoggedIn: false,
    lastLoggedIndays: ["Monday", "Saturday"],
    // mySym: "myKey1", => output me myKey1 to ajega but mySym Symbol ki trh access nhi hoga (Iska typeof jo ayega vo String ayega kyoki keys object me behind the scene string ki trh store hoti h)
    [mySym]: "myKey1" // this is the only option to access symbol as a symbol
};

// how to Access object data
// 1. 
// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(jsUser.full name);// we can't access "Full nane" because in object its a string
// the only way to access is access using square bracket
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);


// jsUser.email = "HariomSaini@gmail.com"; // we can over write value

// Object.freeze(jsUser); // we can also freex entire object so that no one can manipulate value further
// jsUser.email = "codeBlooded@gmail.com"; // NO updates

// console.log(jsUser);



// obejct functions
// In JS we can ADD function to object

jsUser.greeting = function() {
    console.log("Hello JS users");
}

jsUser.greetingTwo = function() {
    console.log(`Hello JS users, ${this.name}!! `); // "this" is used to reference same object elements
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());



// Final Note : most of the time we are accessing obeject elements using "."

