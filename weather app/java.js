
const apikey = "bccab00737a24045e1daacfcc740d612";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".sarch input")
const searchbtn = document.querySelector(".sarch button")
const weatherIcon = document.querySelector(".weather-icon")

async function weather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    let data = await response.json();


    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + '°c';
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%'
    document.querySelector(".wind").innerHTML = data.wind.speed + 'Km/H'

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "img/clouds.png"
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "img/sun.png"
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "img/rain.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "img/clouds.png"
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "img/rain.png"
    }
    // else {
    //     weatherIcon.src = "img/sun.png"
    // }
}
searchbtn.addEventListener("click", () => {
    weather(searchbox.value);
})