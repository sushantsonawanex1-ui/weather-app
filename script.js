const apiKey = "48c046f8e2f009634da85d5505d132ce";

async function getWeather() {

    const city = document.getElementById("city").value;

    if(city===""){
        alert("Please enter a city name");
        return;
    }

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try{

        const response = await fetch(url);

        const data = await response.json();

        if(data.cod != 200){

            alert("City not found");

            return;

        }

        document.getElementById("cityName").innerHTML =
        data.name + ", " + data.sys.country;

        document.getElementById("temp").innerHTML =
        data.main.temp + " °C";

        document.getElementById("description").innerHTML =
        "Weather : " + data.weather[0].description;

        document.getElementById("humidity").innerHTML =
        "Humidity : " + data.main.humidity + "%";

        document.getElementById("wind").innerHTML =
        "Wind Speed : " + data.wind.speed + " m/s";

    }

    catch(error){

        alert("Something went wrong");

    }

}
