/* eslint-disable import/no-import-module-exports */
import './index.css';
import { getWeatherData } from './scripts/fetchData';
import {
  renderWeatherData,
  showContent,
  hideContent,
  renderError,
  hideError,
  setTemperature,
  showLoader,
  hideLoader,
  setBackgroundGIF,
  hideBackgroundGIF,
} from './scripts/domController';

const searchBtn = document.querySelector('.js-search-btn');
const searchInput = document.querySelector('.js-search-input');

const processInput = async () => {
  const location = searchInput.value;
  if (location.trim() === '') return;

  hideContent();
  hideError();
  hideBackgroundGIF();
  showLoader();
  const weatherData = await getWeatherData(location);
  hideLoader();
  if (weatherData.error) {
    hideContent();
    renderError(weatherData.error);
    return;
  }
  setBackgroundGIF(weatherData.conditionText);
  hideError();
  renderWeatherData(weatherData);
  showContent();
};

searchBtn.addEventListener('click', processInput);
searchInput.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter') return;
  processInput();
});

document.querySelectorAll('.js-rad-inp').forEach((input) => {
  input.addEventListener('change', setTemperature);
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}
