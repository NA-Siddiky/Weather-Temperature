const apiKey = '674d795ea81108c3aea08c53ccaaa7ff';

const getWeatherAPI = location => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
    fetch(url)
        .then(response => response.json())
        .then(data => showWeather(data));
}

const searchButton = document.getElementById("search-button");
const getWeatherData = () => {
    const inputData = document.getElementById("input-location").value;
    getWeatherAPI(inputData);
}

const showWeather = (weatherInfo) => {
    console.log(data);

    const displayWeather = document.getElementById("display-weather");

    const unixTimestamp = weatherInfo.timezone
    // const milliseconds = unixTimestamp * 1000 // 1575909015000
    // const dateObject = new Date(milliseconds)
    // const humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15
    // console.log(humanDateFormat);



    var s = new Date(unixTimestamp).toLocaleDateString("en-US")
    // expected output "8/30/2017"  
    console.log(s);



    const getWeatherInfo = `
            <div>
                <img id="weather-icon" src="http://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png" alt="Loading...">
                <h1>${weatherInfo.name}</h1>
                <h3><span id="show-temperature">${weatherInfo.main.temp - 273.15}</span>&deg;C</h3>
                <h1 class="lead">${weatherInfo.weather[0].main}</h1>
            </div>
    `
    displayWeather.innerHTML = getWeatherInfo;
}
