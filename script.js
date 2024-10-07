async function fetchWeather() {
  let searchInput = document.getElementById('search').value;
  const weatherDataSection = document.getElementById("weather-data");
  weatherDataSection.style.display = "block";

  if (searchInput == "") {
    weatherDataSection.innerHTML = `
        <div>
          <h2>Empty Input!</h2>
          <p>Please try again with a valid <u>city name</u>.</p>
        </div>
      `;
    return;
  }

  // Fetch from your Vercel serverless function
  const response = await fetch(`/api/weather?city=${searchInput}`);
  const data = await response.json();

  if (response.status !== 200) {
    weatherDataSection.innerHTML = `
        <div>
          <h2>Error</h2>
          <p>Something went wrong. Please try again later.</p>
        </div>
      `;
    return;
  }

  weatherDataSection.style.display = "flex";
  weatherDataSection.innerHTML = `
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}" width="100" />
      <div>
        <h2>${data.name}</h2>
        <p><strong>Temperature:</strong> ${Math.round(data.main.temp - 273.15)}°C</p>
        <p><strong>Description:</strong> ${data.weather[0].description}</p>
      </div>
  `;

  // Clear the search input after fetching
  document.getElementById("search").value = "";
}
