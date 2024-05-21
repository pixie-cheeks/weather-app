const API_KEY = 'c9bab1f090994008ae262726241705';

const getWeatherData = async (location) => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}` +
        `&q=${location}`,
    );
    return await response.json();
  } catch (error) {
    console.error(error);
    return 'Data not found';
  }
};

export default getWeatherData;
