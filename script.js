function formatTime(timestamp){
let date = new Date(timestamp);
let hours = date.getHours();
if (hours < 10) {
  hours = `0${hours}`
}
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`
}
return `${hours}:${minutes}`;
}


function formatDate(timestamp){
let date = new Date(timestamp);
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[date.getMonth()];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[date.getDay()];
let todayDate = date.getDate();
return `${day}, ${month} ${todayDate} `;
}

function displayForecast(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`;
  
  days.forEach(function(forecastDay) {
  forecastHTML = forecastHTML + 
    ` 
                  <div class="col-4">
                    ${forecastDay.dt}
                    <img class="icon-1" src="img/icons/${forecastDay.data.weather[0].icon}.png" alt="windy" />
                  </div>
                  
                 `;
    forecastHTML = forecastHTML + `</div>`;
    forecastElement.innerHTML = forecastHTML;
  });
}


function showTemperature(response){
  let city = document.querySelector("#currentCity");
  city.innerHTML = response.data.name;
  let temperature = document.querySelector("#displayTemperature").innerHTML = Math.round(response.data.main.temp);
  let minTemperature = document.querySelector("#minTem").innerHTML = Math.round(response.data.main.temp_min);
  let maxTemperature = document.querySelector("#maxTemp").innerHTML = Math.round(response.data.main.temp_max);
  let displayDescription = document.querySelector("#weather-description").innerHTML = (response.data.weather[0].description);
  let currentHour = document.querySelector("#currentHour");
  currentHour.innerHTML = formatTime(response.data.dt * 1000);
  let currentDate = document.querySelector("#currentDate");
  currentDate.innerHTML = formatDate(response.data.dt * 1000);
  celsiusTemperature = response.data.main.temp;
  document.querySelector(
    ".weatherApp"
  ).style.backgroundImage = `url("img/iconsMain/${response.data.weather[0].icon}.png")`;
}


function search(city) {
let apiKey = "656ac87c5034b9f4933b4a4211cbca36";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemperature);
}

function cityInput(event){
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-selector");
  search(cityInputElement.value);
}



let searchForm = document.querySelector("#search-city");
searchForm.addEventListener("submit", cityInput);

function showFahrenheitTemp(event) {
  event.preventDefault();
  let mainTemperatureElement = document.querySelector("#displayTemperature");
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheitTemp = (celsiusTemperature * 9) / 5 + 32;
  mainTemperatureElement.innerHTML = Math.round(fahrenheitTemp);
}

function showCelsiusTemp(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let mainTemperatureElement = document.querySelector("#displayTemperature");
  mainTemperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let fahrenheitLink = document.querySelector("#fahrenheitTemp");
fahrenheitLink.addEventListener("click", showFahrenheitTemp);
let celsiusLink = document.querySelector("#celsiusTemp");
celsiusLink.addEventListener("click", showCelsiusTemp);

function searchCity1(event){
  event.preventDefault();
  let city1 = "New York";
  let apiKey = "656ac87c5034b9f4933b4a4211cbca36";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);

}

function searchCity2(event){
  event.preventDefault();
  let city2 = "Tokyo";
  let apiKey = "656ac87c5034b9f4933b4a4211cbca36";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);

}

function searchCity3(event){
  event.preventDefault();
  let city3 = "London";
  let apiKey = "656ac87c5034b9f4933b4a4211cbca36";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city3}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);

}


let city1 = document.querySelector("#city1");
city1.addEventListener("click", searchCity1);
let city2 = document.querySelector("#city2");
city2.addEventListener("click", searchCity2);
let city3 = document.querySelector("#city3");
city3.addEventListener("click", searchCity3);

search("Lisbon");
displayForecast();



