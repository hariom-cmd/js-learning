const form = document.querySelector('form'); // gettig the form node refernce

form.addEventListener('submit', (event) => { // here we add a event listener on submit button (carrying the properties and detail of the eevnt HERE submit event )
  event.preventDefault(); // As we know we have to type of submit GET and POST this preventDefault prevent the sending the data to server over URL. So it will not send data after we hit the Submit button 

  const height = parseInt(document.getElementById('height').value); // .value is used to get value form the <input> tag
  const weight = parseInt(document.getElementById('weight').value); // // .value is used to get value form the <input> tag
  const result = document.getElementById('results'); // here we show our final result in the  screen


  // checking some condition for correct input
  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `<div> Please enter a valid Height. ${height} </div>`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `<div> Please enter a valid Weight. ${weight}`;
  } else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span> `; // Updating the inner html of the reult tag
  }
});
