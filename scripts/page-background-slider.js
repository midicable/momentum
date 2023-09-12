const body = document.body;
const sliderNext = document.querySelector('.slider_next');
const sliderPrev = document.querySelector('.slider_prev');


let currentBackgroundNumber;
let backgroundImageURL;


function getRandomBackgroundNumber() {
  currentBackgroundNumber = Math.floor(20 * Math.random() + 1);
  if (currentBackgroundNumber < 10) {
    return `0${currentBackgroundNumber}`;
  }
  return currentBackgroundNumber;
}

function getDayTime() {
  let dayTime = ['night', 'morning', 'afternoon', 'evening'];
  let hours = new Date().getHours();
  return `${dayTime[Math.floor(hours / 6)]}`;
}

function setBackground() {
  let dayTime = getDayTime();
  let backgroundNumber = getRandomBackgroundNumber();
  
  backgroundImageURL = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${dayTime}/${backgroundNumber}.jpg`;
  body.style.backgroundImage = `url(${backgroundImageURL})`;
}

setBackground();


sliderNext.addEventListener('click', () => {
  currentBackgroundNumber = (currentBackgroundNumber + 1) % 20;
  if (!currentBackgroundNumber) {
    currentBackgroundNumber = 20;
  }
  
  let dayTime = getDayTime();

  backgroundImageURL = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${dayTime}/`;
  if (currentBackgroundNumber < 10) {
    backgroundImageURL += `0${currentBackgroundNumber}.jpg`;
  } else {
    backgroundImageURL += `${currentBackgroundNumber}.jpg`;
  }
  body.style.backgroundImage = `url(${backgroundImageURL})`;
});

sliderPrev.addEventListener('click', () => {
  currentBackgroundNumber = (currentBackgroundNumber - 1) % 20;
  if (!currentBackgroundNumber) {
    currentBackgroundNumber = 20;
  }

  let dayTime = getDayTime();

  backgroundImageURL = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${dayTime}/`;
  if (currentBackgroundNumber < 10) {
    backgroundImageURL += `0${currentBackgroundNumber}.jpg`;
  } else {
    backgroundImageURL += `${currentBackgroundNumber}.jpg`;
  }
  body.style.backgroundImage = `url(${backgroundImageURL})`;
});



