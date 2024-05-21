/* eslint-disable import/no-import-module-exports */
import './index.css';
import getWeatherData from './scripts/fetchData';

/* const data = await getWeatherData('london');

console.log(data); */

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}
