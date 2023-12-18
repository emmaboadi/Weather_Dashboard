// This is our API key
let cities = ["Manchester", "Accra", "Tokyo", "Banjul"];


var APIKey = "051ff2d6696b940f7f6f04a82faf7b02";

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


    
  