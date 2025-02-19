const buttons = document.querySelectorAll('button'); // getting all the button in a Node list to iterate over all button
const body = document.body;  // as we know there is only one body in our html we direct get refernce by documnent.body



// know loop through over all buttons 
// Explanation : buttons is a Node Collection so we can loop over all the buttons inside the buttons variable
// forEach lool required callBack function and we passing individual button
// And on this button we add a event listner addEventListener of type 'click' after what to do mention in a callback function 
// we just changing the back ground color of the body
// Note : 1. whenever we add event listener we have carry (event in this case we pass in the callBack) it because it has many details about the node or the targeted element
//        2. event.target tells us from where this event is occcuring LIKE : MouseClicking in this case


buttons.forEach( (button) => {
    button.addEventListener('click', (event) => {
        body.style.backgroundColor = event.target.id; 
    })
} )
