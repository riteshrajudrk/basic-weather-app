// const apiKey = "0762815457da8456dc678a1a177d5b89";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?unit=metric&q=bangalore";
// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");

// async function checkWeather(city){
//     const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
//     var data = await response.json();

//     console.log(data);

//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//     document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


// }

// searchBtn.addEventListener("click", () => {
//     checkWeather(searchBox.value); 
    
// })










const apiKey = "0762815457da8456dc678a1a177d5b89";
const apiBaseUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const url = `${apiBaseUrl}${city}&appid=${apiKey}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    } catch (error) {
        console.error('Fetch error:', error);
        alert('Failed to fetch weather data. Please check the city name and try again.');
    }
    // if(data.weather[0].main == "Clouds")
}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        alert('Please enter a city name.');
    }
});
