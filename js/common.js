const weatherApi= {
  apiKey : "7839972d87e610f9dbeb634aae00594f",
  url : "https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox = document.getElementById('input-box');

//Event listener on enter
searchInputBox.addEventListener('keypress', (event)=>{
  if (event.keyCode == 13) {
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
    document.querySelector('.resContainer').style.display="block";
  }
});

//get weather report
function getWeatherReport(city){
  fetch(`${weatherApi.url}?q=${city}&units=metric&appid=${weatherApi.apiKey}`)
  .then(weather =>{
    return weather.json();
  }).then(showWeatherReport);
}

//to show weather report
function showWeatherReport(weather) {
  console.log(weather);

  let city= document.getElementById('city');
  city.innerHTML = `${weather.name},${weather.sys.country}`;

  let temprature = document.getElementById('temp');
  temprature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

  let feelsLike = document.getElementById('feels-like');
  feelsLike.innerHTML = `${Math.round(weather.main.feels_like )}&deg;C`

  let minMaxTemp = document.getElementById('min-max');
  minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min) / ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

  let weatherType = document.getElementById('weather');
  weatherType.innerHTML = `${weather.weather[0].main}`;

  let date = document.getElementById('date');
  let todayDate = new Date();
  date.innerText = dateManage(todayDate);
}
//date function to show current date

  function dateManage(dateParam){
  let day = dateParam.getDay();
  let date = dateParam.getDate();
  let month = dateParam.getMonth();
  let year = dateParam.getFullYear();

  return `${date} / ${month} / ${year}`
}
