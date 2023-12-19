// This is our API key
let APIKey = "051ff2d6696b940f7f6f04a82faf7b02";


let cities = ["Manchester", "Accra", "Tokyo", "Banjul"];

//function weatherDashboard() {


    //let city = $(this).attr("data-name");
    

    let queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=London&units=metric&appid=" + APIKey;

/*
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

            let temperature = data.main.temp;
            let tempEl = $("<p>").text("Temperature: " + temperature);
            $("#today").append(tempEl);

            let wind = data.wind.speed;
            let windEl = $("<p>").text("Wind: " + wind);
            $("#today").append(windEl);

            let humidity = data.main.humidity;
            let humidityEl = $("<p>").text("Humidity: " + humidity);
            $("#today").append(humidityEl);



            console.log(temperature)






        })
        */



//}

//weatherDashboard()

let forecastURL = "https://api.openweathermap.org/data/2.5/forecast?" +
"q=London&units=metric&appid=" + APIKey;

           fetch(forecastURL)
           .then(function (response) {
               return response.json();
           })
           .then(function (data) {

            console.log(data.list[0].dt_txt)

            for (i = 0; i<5; i++) {
                forecastData = data.list[i];

                let forecastDate = forecastData.dt_txt;
                let temperaturee = forecastData.main.temp;
                let winde = forecastData.wind.speed;
                let humiditye = forecastData.main.humidity;

                let forecastDiv = $("<div>")
                        let Date = $("<h4>").text(forecastDate);
                        let tempEll = $("<p>").text("Temperature: " + temperaturee);
                        let windEll = $("<p>").text("Wind: " + winde);
                        let humidityEll = $("<p>").text("Humidity: " + humiditye);

                        forecastDiv.append(Date);
                        forecastDiv.append(tempEll);
                        forecastDiv.append(windEll);
                        forecastDiv.append(humidityEll);
                        


                        $("#forecast").append(forecastDiv)

                


           }});


        





















function renderButtons() {
    $("#history").empty();

    for (let i=0; i<cities.length; i++){
        var historyBtn = $("<button class = city>");
        historyBtn.attr("data-name", cities[i]);
        historyBtn.text(cities[i]);
        $("#history").append(historyBtn);
    }
}

/* var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
"q=London&appid=" + APIKey;


// Write code between the dashes below to hit the queryURL with fetch(), then take the response data
// and display it in the div with an id of movie-view

// ------YOUR CODE GOES IN THESE DASHES.

fetch(queryURL)
  .then(function (response) {
   return response.json();
  })
  .then(function (data) {
   // $("#today").text(JSON.stringify(data));





    console.log(data);
});
*/
// This .on("click") function will trigger the fetch() Call
$("#search-button").on("click", function (event) {

    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();
  
    // Here we grab the text from the input box
    var city = $("#search-input").val().trim();

    cities.push(city);

    renderButtons();
  
    // Here we construct our URL
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=London&appid=" + APIKey;
  
  
    // Write code between the dashes below to hit the queryURL with fetch(), then take the response data
    // and display it in the div with an id of movie-view
  
    // ------YOUR CODE GOES IN THESE DASHES.
  
   fetch(queryURL)
      .then(function (response) {
       return response.json();
      })
      .then(function (data) {
       // $("#today").text(JSON.stringify(data));





        console.log(data.main);
    });
    // -----------------------------------------------------------------------
  

  });

  renderButtons();




    
  