const weatherIcon = document.querySelector('.weather_icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather_description');
const windSpeed = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const cityInput = document.querySelector('.city');
const weatherError = document.querySelector('.weather_error');


async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&lang=en&appid=e57e55d1be2cde1da017996410bb77bc&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  console.log(data.cod);

  if (data.cod == '404') {
    weatherError.innerHTML = `Error: ${data.message} for "${cityInput.value}"!`;
    weatherIcon.classList = ['weather_icon owf'];
    temperature.textContent = '';
    weatherDescription.textContent = '';
    windSpeed.textContent = '';
    humidity.textContent = '';
  } else {
    weatherError.innerHTML = '';
    weatherIcon.className = 'weather_icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.floor(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    windSpeed.textContent = `Wind speed: ${Math.floor(data.wind.speed)} m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
  }
}


cityInput.addEventListener('change', () => {
  getWeather();
});