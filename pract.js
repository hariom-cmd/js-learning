const mySymbol = Symbol("Key1");

const myObj = {
    [mySymbol] : "myKey1"
}

// console.log(myObj);


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

// myCoding.forEach( (item) => {
//     console.log(item.languageFileName, item.languageName);
    
// } )

myCoding.map( (item) => {
    console.log(item.languageFileName);
} )


const myArray = [1,2,3,4,5,6];

const sum = myArray.reduce( (acc,currVal) => {
    return acc + currVal
}, 0 )
console.log(sum);
