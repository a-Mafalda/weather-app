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


function showTemperature(response){
  console.log(response.data);
  let city = document.querySelector("#defaultCity");
  city.innerHTML = "Paris";
  let temperature = document.querySelector("#displayTemperature").innerHTML = Math.round(response.data.main.temp);
  let minTemperature = document.querySelector("#minTem").innerHTML = Math.round(response.data.main.temp_min);
  let maxTemperature = document.querySelector("#maxTemp").innerHTML = Math.round(response.data.main.temp_max);
  let displayDescription = document.querySelector("#weather-description").innerHTML = (response.data.weather[0].description);
  let currentHour = document.querySelector("#currentHour");
  currentHour.innerHTML = formatTime(response.data.dt * 1000);
  let currentDate = document.querySelector("#currentDate");
  currentDate.innerHTML = formatDate(response.data.dt * 1000);
  
}




//function search(city) {
//let apiKey = "656ac87c5034b9f4933b4a4211cbca36";
//let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q${city}&appid=${apiKey}&units=metric`;
//axios.get(apiUrl).then(showTemperature);
//}

let apiKey = "656ac87c5034b9f4933b4a4211cbca36";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showTemperature);


//search("Lisbon");







