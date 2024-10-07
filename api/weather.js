export default async function (req, res) {
  const apiKey = process.env.WEATHER_API_KEY;
  const { city } = req.query; // Get the city from query params

  const geocodeURL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;

  try {
    // Fetch the lat/lon using the geocoding API
    const geocodeResponse = await fetch(geocodeURL);
    const geocodeData = await geocodeResponse.json();
    if (geocodeData.length === 0) {
      return res.status(404).json({ error: "City not found" });
    }

    const { lon, lat } = geocodeData[0];

    // Fetch the weather data using the lat/lon
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const weatherResponse = await fetch(weatherURL);
    const weatherData = await weatherResponse.json();

    // Send the weather data back to the frontend
    res.status(200).json(weatherData);

  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
};
