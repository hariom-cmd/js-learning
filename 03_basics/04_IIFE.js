// Immediately Invoked Fucntion Expression (IIFE) 
// Why to use IIFE ---> Man lo hmari 1 file me database connection logic likha hua h or hm chahte h jese hi file execute ho hmara DB conneciton start ho jaye.
// Question: Why we use IIFE function
// Answer: To protect function form global scope pollution and also for immediate execution

// () () ----> first () for function declaration and () for function call



// Normal IIFE
(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // Interview Question is how to run multiple IIFE just seperte all IIFEs with ;
      // If we don't seperate with ; than this IIFE funtion know how to invoke but don't known when to STOP
      // Give ERROR if we don't stop with ;


// Arrow function inside IIFE
( () => {
    // unnamed IIFE
    console.log(`DB CONNECTED`);
})();


// We can pass parameters to the IIFE function to 
( (name) =>  {
    // unnamed IIFE
    console.log(`DB CONNECTED TO ${name}`);
})("MongoDB")