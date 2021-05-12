let now = new Date();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
let day = days[now.getDay()];
let weeKDay = document.querySelector(".weekDay");
weeKDay.innerHTML = `${day}`;


let todayDate = now.getDate();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
let month = months[now.getMonth()]; 
let monthDay = document.querySelector(".monthDay");
monthDay.innerHTML = `${month}, ${todayDate}`;

let hours = now.getHours();
let minutes = now.getMinutes();
let hour = document.querySelector(".hour");
hour.innerHTML = `${hours}:${minutes}`;

//
function search(city) {
let apiKey = "656ac87c5034b9f4933b4a4211cbca36";
let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
axios.get(apiUrl).then(showTemp); 
}

function showTemp(response) {
  document.querySelector(".city").innerHTML = response.data.name;
  document.querySelector(".mainTemp").innerHTML = Math.round(response.data.main.temp);
  let maxTemp = document.querySelector("#maxTemp");
  maxTemp.innerHTML = Math.round(response.data.main.temp_max);
  let minTemp = document.querySelector("#minTemp");
  minTemp.innerHTML = Math.round(response.data.main.temp_min);
  let description = document.querySelector("h4");
  description.innerHTML = response.data.weather[0].description;
console.log(response.data);
}

function changeCity(event){
 event.preventDefault();
 let city = document.querySelector("#city-selector").value;
 search(city);
}

search("Paris");

let citybutton = document.querySelector("#enter");
citybutton.addEventListener("click", changeCity); 


// 
  
function getCurrentPosition(position){
  let currentLatitude = position.coords.latitude;
  let currentLongitude = position.coords.longitude;
  let keyApi = "656ac87c5034b9f4933b4a4211cbca36";
  let urlApi = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLatitude}&lon=${currentLongitude}&appid=${keyApi}&units=metric`;
  axios.get(urlApi).then(showTemp);
}


  function getPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getCurrentPosition);
}
  
  let button = document.querySelector("#currentLocation");
  button.addEventListener("click", getPosition);


/* function changeToFahrenheit(event)
{
  event.preventDefault();
  let fahrenheitMetric = 66;
  let todayTemp = document.querySelector(".mainTemp");
  todayTemp.innerHTML = `${fahrenheitMetric}`;

}
let fahrenheitMetric = document.querySelector("#fahrenheitTemp");
fahrenheitMetric.addEventListener("click", changeToFahrenheit);
console.log(fahrenheitMetric);

function changeToCelsus(event){
  event.preventDefault();
  let celsusMetric = 19;
  let todaycelsusTemp = document.querySelector(".mainTemp");
  todaycelsusTemp.innerHTML = `${celsusMetric}`;
  
}

let celsusMetric = document.querySelector("#celsusTemp");
celsusMetric.addEventListener("click", changeToCelsus);
console.log(celsusMetric); */



/* function showPosition(position) {
  let currentLatitude = position.coords.latitude;
  let currentLongitude = position.coords.longitude;
  console.log(currentLatitude);
  console.log(currentLongitude);
  let keyApi = "656ac87c5034b9f4933b4a4211cbca36";
  let urlApi = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLatitude}&lon=${currentLongitude}&appid=${keyApi}&units=metric`;
  console.log(urlApi);
  axios.get(urlApi).then(showTemp);
}

navigator.geolocation.getCurrentPosition(showPosition);  */
// Api key and Url have to be built inside of the function. Only then we have access to the lat + lon!










