const userNameElem = document.querySelector('.user_name');


window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);


function setLocalStorage() {
  localStorage.setItem('name', userNameElem.value);
}


function getLocalStorage() {
  if (localStorage.getItem('name')) {
    userNameElem.value = localStorage.getItem('name');
  }
}