console.log("Hello")

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
let form = document.querySelector("form");





/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this:
 * https://api.openweathermap.org/data/2.5/weather?q=sukkur&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=metric
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=metric`;

  const data = fetch(API)
      .then(response => response.json())
      .catch(error => console.log(error));


  return data;
  // console.log(data.then(data => data));
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = (e) => {
  // e.preventDefault();
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  getWeatherData(city)
      .then(data => showWeatherData(data))
      .catch(error => console.log(error));

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
  //CODE GOES HERE
  console.log(weatherData);
  document.getElementById("city-name").innerText = weatherData.name;

  document.getElementById("weather-type").innerText = weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;



}

