const timeElem = document.querySelector('.time');
const dateElem = document.querySelector('.date');
const options = {month: 'long', day: 'numeric', weekday: 'long', timeZone: 'UTC'};


let date1;

function showTimeAndDate() {
  date1 = new Date();
  timeElem.textContent = date1.toLocaleTimeString();
  dateElem.textContent = date1.toLocaleDateString('en-EN', options);
  setTimeout(showTimeAndDate, 1000);
}

showTimeAndDate();
