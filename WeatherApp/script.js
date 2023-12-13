const apiKey = "bee0068e828c2ebe12b0b8eba9a6348d";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();

    const timestamp = data.dt;

    // Convert timestamp to milliseconds and create a Date object
    const date = new Date(timestamp * 1000);

    // Get components of the date
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes(); // Add leading zero if needed
    const seconds = "0" + date.getSeconds(); // Add leading zero if needed

    // Format the time
    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".time").innerHTML = "Current time: " + formattedTime;
}

searchBtn.addEventListener("click", function() {
    checkWeather(search.value);
});