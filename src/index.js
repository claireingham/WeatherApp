function displayTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = `${temperature}°c`;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;
  let apiKey = "2ef76df8bbtdbob65420d8afef3dc0e3";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query={city}&key={apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();
  if (minutes < 10) {
    minutes = `0$(minutes)`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes},`;
}
let currentDate = new Date();
let currentDateElement = document.querySelector("#current-date");
currentDateElement.innerHTML = formatDate(currentDate);
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
