"uese strict"

const marvel_heros = ["thor", "Ironman","spiderman"];
const dc_heros = ["superman", "flash","batman"];

// Isko krne hm assume krte h ki dono array merge ho gye honge
// but dc_heros as an element add hua isme. console.log() krke check kro

//marvel_heros.push(dc_heros);

// Note Recomemded MEthod
//console.log(marvel_heros); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]


// concat return a new array (this is also not popular => spread is popular)
// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);


// USE SPREAD OPerator
// const newAllHeros = [...marvel_heros, ...dc_heros]; // spread operator makes all array value an individual element
// console.log(newAllHeros);




// Flatten an Array => 2d,3d,4d.. array ko 1d array me convert krna
// ye 2d array komsort krne ke kam me use ata h 
// const dimensionalArray = [1,2,3,[11,12,13], 7, [,22,33,[44,55,66]], 10];
// const FlattenArray = dimensionalArray.flat(Infinity);

// console.log(FlattenArray);



// Asking type
console.log(Array.isArray("hariom saini")); // checking argumnet is array or not
console.log(Array.from("Hariom saini")) // make an return array form the given argument

console.log(Array.from({
    name: "hariom"
})); // current scnerio will return an empty array
    // hme isko btana pdega ki key ka array bnana h ya values ka
    // agr kuch ni btaya to ye empty array return kr dega



// agr hme array bnana ho alredy exist value ka
let  score1 = 300;
let  score2 = 400;
let  score3 = 600;
let  score4 = 900;

console.log(Array.of(score1,score2,score3,score4));