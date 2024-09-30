// Reduce

/*
// MDN example
const array1 = [1,2,3,4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce (
    (accumulator, currentValue) => accumulator + currentValue, initialValue
);

console.log(sumWithInitial); // expected output 10

*/



const shoppingCart = [
    {itemName: 'js  course', price: 2999},
    {itemName: 'pyh=thon  course', price: 999},
    {itemName: 'data scientist  course', price: 12999},
];


const cartValue = shoppingCart.reduce( (acc,currVal) => acc + currVal.price,0 );
console.log(cartValue);
