// This is our API key
let APIKey = "051ff2d6696b940f7f6f04a82faf7b02";


let cities = ["Manchester", "Accra", "Tokyo", "Banjul"];

// function to display weather conditions
function weatherDashboard() {


    var city = $("#search-input").val().trim();
    

    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=metric&appid=" + APIKey;

// call for fetching current open weather api
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            // storing city name
            let cityName = data.name;
            let cityHeading = $("<h2>").text(cityName);

            //displying the city name
            $("#today").append(cityHeading);

            //storing current temperature
            let temperature = data.main.temp;
            let tempEl = $("<p>").text("Temperature (C): " + temperature);

            //displaying current temperature
            $("#today").append(tempEl);

            //storing wind speed
            let wind = data.wind.speed;
            let windEl = $("<p>").text("Wind (m/sec): " + wind);

            //displaying wind spped
            $("#today").append(windEl);

            
            //storing humidity
            let humidity = data.main.humidity;
            let humidityEl = $("<p>").text("Humidity (%): " + humidity);

            //displaying current humidity
            $("#today").append(humidityEl);






        })
        

// API for retrieving weather forecast
let forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" +
city + 
 "&units=metric&appid=" + APIKey;

 // Fetch call for retrieving weather forecast
           fetch(forecastURL)
           .then(function (response) {
               return response.json();
           })
           .then(function (data) {

            console.log(data)

// looping through API results
            for (i = 0; i<5; i++) {
                forecastData = data.list[i];

               //storing forecast date
                let forecastDate = forecastData.dt_txt;
                //storing forecast temperature
                let temperaturee = forecastData.main.temp;
                //storing forecast windspeed
                let winde = forecastData.wind.speed;
                //storing forecast humidity
                let humiditye = forecastData.main.humidity;
                //storing weather Icon
                let weatherIcon = forecastData.weather[0].icon;

                var iconurl = "http://openweathermap.org/img/w/" + weatherIcon + ".png";



                let forecastDiv = $("<div class = 'col' id = 'forecast-card'> ")
                        let Date = $("<p>").text(forecastDate);
                        let Icon = $("<img id='icon' alt='weather-icon'>").attr('src', iconurl)
                        let tempEll = $("<p>").text("Temperature (C): " + temperaturee);
                        let windEll = $("<p>").text("Wind (m/sec): " + winde);
                        let humidityEll = $("<p>").text("Humidity (%): " + humiditye);

                        forecastDiv.append(Date);
                        forecastDiv.append(Icon)
                        forecastDiv.append(tempEll);
                        forecastDiv.append(windEll);
                        forecastDiv.append(humidityEll);
                        


                        $("#forecast").append(forecastDiv)

           }});

        }


// funtion for creating initial movie buttons
function renderButtons() {
    $("#history").empty();

    for (let i=0; i<cities.length; i++){
        var historyBtn = $("<button class = city>");
        historyBtn.attr("data-name", cities[i]);
        historyBtn.text(cities[i]);
        $("#history").append(historyBtn);
    }
}





// This .on("click") function will trigger the fetch() Call
$("#search-button").on("click", function (event) {

    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();
  
    // Here we grab the text from the input box
    var city = $("#search-input").val().trim();

    cities.push(city);

    renderButtons();

    weatherDashboard();

    }
   
    
    );
    // -----------------------------------------------------------------------
  

  // Adding a click event listener to all elements with a class of "city"
$(".city").on("click", weatherDashboard);



  renderButtons();




    
  