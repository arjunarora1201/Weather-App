const apiKey = "&appid=43e7a16501ddd252d642eff0e043770e&units=metric";
const apiUrl = "https://api.openweathermap.org/data/2.5/";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}weather?q=${city}${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();

        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temp").innerText = data.main.temp + "°C";
        document.querySelector(".humidity").innerText = data.main.humidity + "%";
        document.querySelector(".wind").innerText = data.wind.speed + " km/hr";

        if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
        }
        else if(data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click" , () => {
    checkWeather(searchBox.value);
});

searchBtn.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});