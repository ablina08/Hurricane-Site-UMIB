function getWeather() {
        const apiKey = 'a546f34c99c8ad7e46a3c4b3bbe21c31';
        const city = document.getElementById('city').value;
    
        if (!city) {
            alert('Please enter a city');
            return;
        }
    
        const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    
        fetch(currentWeatherUrl)
            .then(response => response.json())
            .then(data => {
                displayWeather(data);
            })
            .catch(error => {
                console.error('Error fetching current weather data:', error);
                alert('Error fetching current weather data. Please try again.');
            });
    
        fetch(forecastUrl)
            .then(response => response.json())
            .then(data => {
                displayHourlyForecast(data.list);
            })
            .catch(error => {
                console.error('Error fetching hourly forecast data:', error);
                alert('Error fetching hourly forecast data. Please try again.');
            });
    }
    
    function displayWeather(data) {
        const tempDivInfo = document.getElementById('temp-div');
        const weatherInfoDiv = document.getElementById('weather-info');
        const weatherIcon = document.getElementById('weather-icon');
        const hourlyForecastDiv = document.getElementById('hourly-forecast');
    
        // Clear previous content
        weatherInfoDiv.innerHTML = '';
        hourlyForecastDiv.innerHTML = '';
        tempDivInfo.innerHTML = '';
    
        if (data.cod === '404') {
            weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
        } else {
            const cityName = data.name;
            const temperature = Math.round(data.main.temp - 273.15); // Convert to Celsius
            const description = data.weather[0].description;
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
    
            const temperatureHTML = `
                <p>${temperature}°C</p>
            `;
    
            const weatherHtml = `
                <p>${cityName}</p>
                <p>${description}</p>
            `;
    
            tempDivInfo.innerHTML = temperatureHTML;
            weatherInfoDiv.innerHTML = weatherHtml;
            weatherIcon.src = iconUrl;
            weatherIcon.alt = description;
    
            showImage();
        }
    }
    
    function displayHourlyForecast(hourlyData) {
        const hourlyForecastDiv = document.getElementById('hourly-forecast');
    
        const next24Hours = hourlyData.slice(0, 8); // Display the next 24 hours (3-hour intervals)
    
        next24Hours.forEach(item => {
            const dateTime = new Date(item.dt * 1000); // Convert timestamp to milliseconds
            const hour = dateTime.getHours();
            const temperature = Math.round(item.main.temp - 273.15); // Convert to Celsius
            const iconCode = item.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
    
            const hourlyItemHtml = `
                <div class="hourly-item">
                    <span>${hour}:00</span>
                    <img src="${iconUrl}" alt="Hourly Weather Icon">
                    <span>${temperature}°C</span>
                </div>
            `;
    
            hourlyForecastDiv.innerHTML += hourlyItemHtml;
        });
    }
    
    function showImage() {
        const weatherIcon = document.getElementById('weather-icon');
        weatherIcon.style.display = 'block'; // Make the image visible once it's loaded
    }

    //search placeholder open page when entered//
    document.addEventListener("DOMContentLoaded", function() {
        // Get the search input field and button
        const searchInput = document.querySelector(".form-control");
        const searchButton = document.querySelector(".btn-outline-success");
    
        // Function to handle the search and redirect
        searchButton.addEventListener("click", function(event) {
            event.preventDefault();  // Prevent the form from submitting the default way
            
            const query = searchInput.value.toLowerCase();  // Get the search query
    
            // Redirect based on the query
            if (query.includes("our business")) {
                window.location.href = "business.html";  // Redirect to business.html
            } else if (query.includes("sign in")) {
                window.location.href = "user.html";  // Redirect to user.html
            } else if (query.includes("contact")) {
                window.location.href = "contact1.html";  // Redirect to contact1.html
            } else if (query.includes("track weather")) {
                window.location.href = "5.html";  // Redirect to 5.html
            } else if (query.includes("products")) {
                window.location.href = "products.html";  // Redirect to products.html 
            } else if (query.includes("safety tips")) {
                window.location.href = "safetytips.html";  // Redirect to safetytips.html   
            } else if (query.includes("about hurricanes")) {
                window.location.href = "about.html";  // Redirect to about.html
            } else if (query.includes("checkout")) {
                window.location.href = "purchase.html";  // Redirect to purchase.html   
            } else if (query.includes("add to card")) {
                window.location.href = "purchase.html";  // Redirect to purchase.html 
            } else if (query.includes("subscribe")) {
                window.location.href = "subscribe.html";  // Redirect to subscribe.html   
            } else if (query.includes("pics")) {
                window.location.href = "une.html";  // Redirect to une.html 
            } else if (query.includes("gallery")) {
                window.location.href = "gallery.html";  // Redirect to gallery.html                                         
            } else {
                alert("No matching page found!");  // Alert if no match
            }
        });
    });