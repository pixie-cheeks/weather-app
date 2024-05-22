const API_KEY = 'c9bab1f090994008ae262726241705';

const fetchData = async (location) => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}` +
        `&q=${location}`,
    );
    return await response.json();
  } catch (error) {
    console.error(error);
    return { error: { message: 'Unable to retrieve data.' } };
  }
};

const getWeatherData = async (location) => {
  const originalData = await fetchData(location);

  if (originalData.error) return originalData;

  return {
    locationName: originalData.location.name,
    conditionText: originalData.current.condition.text,
    conditionIcon: originalData.current.condition.icon,
    tempC: originalData.current.temp_c,
    tempF: originalData.current.temp_f,
  };
};

const GIF_API_KEY = 'JyGBtwCcEOqTVjjPAsWLFEbT9xDKSeni';

const getGifLink = async (query) => {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=${GIF_API_KEY}` +
        `&s=${query}`,
    );

    const gifData = await response.json();

    return gifData.data.images.original.url;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export { getWeatherData, getGifLink };
