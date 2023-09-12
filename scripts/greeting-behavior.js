const greetingElem = document.querySelector('.greeting');


let dayTime = ['Good night', 'Good morning', 'Good afternoon', 'Good evening'];
let date2;
let hours;

function displayGreeting() {
  date2 = new Date();
  hours = date2.getHours();
  greetingElem.textContent = `${dayTime[Math.floor(hours / 6)]}, `;
  setTimeout(displayGreeting, 1000);
}

displayGreeting();
