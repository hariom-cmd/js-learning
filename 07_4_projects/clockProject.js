const clock = document.getElementById('clock');
const date = document.getElementById('date');

setInterval(() => {
  let time = new Date();
  const date = new Date();

  // console.log(time); => Sat Feb 08 2025 15:28:55 GMT+0530 (India Standard Time)
  clock.innerHTML = time.toLocaleTimeString(); // toLocalTimeString() extract the loacal time from the full date string
  this.date.innerHTML = date.toLocaleDateString();

}, 100);


// NOTE :- The syntex of the setInterval() is very important 
//          setInterval( function(){}, time interval value);