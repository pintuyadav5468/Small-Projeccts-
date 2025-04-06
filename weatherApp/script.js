function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "689247280fdcf856052e1fc6f2a97a7a"; // Your OpenWeatherMap API Key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        document.getElementById("weather-info").innerHTML = `<p>City not found!</p>`;
        return;
      }
      document.getElementById("weather-info").innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
    })
    .catch((error) => console.error("Error fetching data:", error));
}
