// FIlter , Map , Reduce



/*
const coding = ["js", "ruby","java","python","cpp"];

// forEach loop returns nothing
const values = coding.forEach( (val) => {
    console.log(val);
} )
console.log(values);   */



// to return something  use filter
// const myNum = [1,2,3,4,,5,6,7,8,9,10];
// const newNums = myNum.filter( (val) => val > 4 );
// console.log(newNums);




// if we want to use forEach to return vlaues we can use like that
// const myNums = [1,2,3,4,,5,6,7,8,9,10];
// const newNums = [];

// myNums.forEach( (val) => {
//     if(val > 4) newNums.push(val);
// } )

// console.log(newNums);



// How to apply filter on objects
const books = [
    {title: 'Book one',genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book two',genre: 'Non-Fiction', publish: 1992, edition: 2008},
    {title: 'Book three',genre: 'History', publish: 1999, edition: 2007},
    {title: 'Book four',genre: 'Non-fiction', publish: 1989, edition: 2010},
    {title: 'Book five',genre: 'Science', publish: 2009, edition: 2014},
    {title: 'Book six',genre: 'Fiction', publish: 1987, edition: 2010},
    {title: 'Book seven',genre: 'History', publish: 1986, edition: 1996},
    {title: 'Book eight',genre: 'Science', publish: 2011, edition: 2016},
    {title: 'Book nine',genre: 'Non-Fiction', publish: 1981, edition: 1989}
];


const userBooks = books.filter( (bk) => bk.genre === 'History');

console.log(userBooks);












