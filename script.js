function getWeather() {
    // Get the city name input value from the HTML element with id "city-input"
    const city = document.getElementById("city-input").value;
    // Set the API key for OpenWeatherMap API
    const apiKey = "53738edef6b2db3143c56086c9f13d3d";
    // Construct the API URL with the city name, API key, and desired units of measurement (metric in this case)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Send a GET request to the API URL using the fetch method
    fetch(url)
        // Once the response is received, parse it into JSON format
        .then(response => response.json())
        // Once the data is parsed, extract the necessary weather information
        .then(data => {
            // Get the current temperature from the "main" object of the API response
            const temperature = data.main.temp;
            // Get the current humidity from the "main" object of the API response
            const humidity = data.main.humidity;
            // Get the current wind speed from the "wind" object of the API response
            const windSpeed = data.wind.speed;
            // Get the URL for the weather icon from the "weather" object of the API response
            const weatherIcon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

            // Get the HTML elements to update with the weather information
            const temperatureElement = document.getElementById("temperature");
            const humidityElement = document.getElementById("humidity");
            const windSpeedElement = document.getElementById("wind-speed");
            const weatherIconElement = document.getElementById("weather-icon");

            // Update the HTML elements with the corresponding weather information
            temperatureElement.innerHTML = `Temperature: ${temperature}°C`;
            humidityElement.innerHTML = `Humidity: ${humidity}%`;
            windSpeedElement.innerHTML = `Wind Speed: ${windSpeed} km/h`;
            weatherIconElement.innerHTML = `<img src="${weatherIcon}" alt="Weather Icon">`;
        })
        // If there is an error in fetching the data from the API, catch the error and log it to the console
        .catch(error => console.error(error));
}
