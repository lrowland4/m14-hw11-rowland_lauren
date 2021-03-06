let forecast={
    "coord": {
        "lon": -81.37,
        "lat": 28.38
    },
    "weather":
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        },
    "base": "stations",
    "main": {
        "temp": 288.22,
        "pressure": 1016,
        "humidity": 47,
        "temp_min": 285.95,
        "temp_max": 290.15
    },
    "visibility": 16093,
    "wind": {
        "speed": 4.1,
        "deg": 300
    },
    "clouds": {
        "all": 1
    },
    "dt": 1543337760,
    "sys": {
        "type": 1,
        "id": 4549,
        "message": 0.0034,
        "country": "US",
        "sunrise": 1543319868,
        "sunset": 1543357729
    },
    "id": 4160983,
    "name": "Kissimmee",
    "cod": 200
}

const weatherWrapper = document.getElementsByTagName("span")[0];

const currentWeather = document.createTextNode(forecast.weather.description);
	weatherWrapper.appendChild(currentWeather);







