const weatherCard = document.querySelector('.js-weather-card');
const degreeRadios = document.querySelector('.js-degree-radios');
const locationDiv = document.querySelector('.js-location');
const conditionTextDiv = document.querySelector('.js-weather-condition');
const conditionImgDiv = document.querySelector('.js-weather-img');
const temperatureDiv = document.querySelector('.js-temperature');
const errorDiv = document.createElement('div');
let currentWeatherData = null;
errorDiv.classList.add('error');
errorDiv.classList.add('is-hidden');
document.querySelector('.main').appendChild(errorDiv);

const hideContent = () => {
  weatherCard.classList.add('is-hidden');
  degreeRadios.classList.add('is-hidden');
};

const showContent = () => {
  weatherCard.classList.remove('is-hidden');
  degreeRadios.classList.remove('is-hidden');
};

const setTemperature = () => {
  const degreeType = document.querySelector('.js-degree-radios :checked').id;
  if (degreeType === 'celsius') {
    temperatureDiv.textContent = `${currentWeatherData.tempC}°C`;
  } else {
    temperatureDiv.textContent = `${currentWeatherData.tempF}°F`;
  }
};

const renderError = (error) => {
  errorDiv.textContent = `${error.message}`;
  errorDiv.classList.remove('is-hidden');
};

const hideError = () => {
  errorDiv.classList.add('is-hidden');
};

const renderWeatherData = (data) => {
  currentWeatherData = data;
  locationDiv.textContent = data.locationName;
  conditionTextDiv.textContent = data.conditionText;
  conditionImgDiv.src = data.conditionIcon;
  setTemperature();
};

export {
  renderWeatherData,
  showContent,
  hideContent,
  renderError,
  hideError,
  setTemperature,
};
