// step0: determining latitude and longitude from zipcode
// **this must be run first to get lat and lon**
// pulls zipcode from localstorage
var zipcode = localStorage.getItem("zipcode").trim();

var queryURL1 = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zipcode + "&key=AIzaSyCxsfk5uokgV_Uu1XpzgMO3OAGaElsVqOw";
var queryURL2;
var lat;
var lon;

$.ajax({
  url: queryURL1,
  method: "GET",
  async: false,
})
  .then(function (response) {
    var formattedAddress = response.results[0].formatted_address;
    lat = response.results[0].geometry.location.lat;
    lon = response.results[0].geometry.location.lng;
    console.log(formattedAddress);

    console.log(lat);
    console.log(lon);

    var restaurantName = localStorage.getItem("restaurantName");
    var cuisine = localStorage.getItem("cuisine");
    var carryout = localStorage.getItem("carryout");
    queryURL2 =
      "https://developers.zomato.com/api/v2.1/search?q=" + restaurantName + "&count=15&lat=" + lat + "&lon=" + lon + "&radius=24140.2&cuisine=" + cuisine;
    if (restaurantName == true || cuisine == true) {
      queryURL2 =
        "https://developers.zomato.com/api/v2.1/search?q=" + restaurantName + "&count=15&lat=" + lat + "&lon=" + lon + "&radius=24140.2&cuisine=" + cuisine;
    } else if (restaurantName == true || cuisine == false) {
      queryURL2 = "https://developers.zomato.com/api/v2.1/search?q=" + restaurantName + "&count=15&lat=" + lat + "&lon=" + lon + "&radius=24140.2";
    } else if (restaurantName == false || cuisine == true) {
      queryURL2 = "https://developers.zomato.com/api/v2.1/search?count=15&lat=" + lat + "&lon=" + lon + "&radius=24140.2&cuisine=" + cuisine;
    }
    console.log(queryURL2);
    if (carryout == true) {
      queryURL = queryURL + "&category=Takeaway";
    }
  })
  .then(function () {
    $.ajax({
      url: queryURL2,
      method: "GET",
      headers: { "user-key": "19a26be38c8982385cd3ead26085c343" },
      async: false,
    })
      .then(function (responseZomato) {
        console.log(responseZomato);
        console.log(responseZomato.restaurants);

        // array to put all the restaurant results
        var restaurantLoc = [];
        var restName;
        var latVal;
        var longVal;

        // for loop to append each element into an array
        for (var i = 0; i < responseZomato.restaurants.length; i++) {
          console.log(responseZomato);
          console.log(responseZomato.restaurants[7].restaurant.name);
          restName = responseZomato.restaurants[i].restaurant.name;
          latVal = responseZomato.restaurants[i].restaurant.location.latitude;
          longVal = responseZomato.restaurants[i].restaurant.location.longitude;
          var specific = [];
          // console.log(restName)
          // console.log(latVal)
          // console.log(longVal)
          specific.push(restName, latVal, longVal, parseInt(i) + 1);
          restaurantLoc.push(specific);
          console.log(specific);
          console.log(restaurantLoc);
        }
        console.log(restaurantLoc);

        for (var i = 0; i < restaurantLoc.length; i++) {
          var pos = { lat: parseFloat(restaurantLoc[i][1]), lng: parseFloat(restaurantLoc[i][2]) };
          new google.maps.Marker({
            position: pos,
            map: map,
          });
        }
      })
      .then(function () {
        var APIKey = "6cfffd42b643f9cd29fe45722d8c7849";

        // Here we are building the URL we need to query the database
        var queryURL3 = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;

        // Here we run our AJAX call to the OpenWeatherMap API
        $.ajax({
          url: queryURL3,
          method: "GET",
          async: false,
        })
          // We store all of the retrieved data inside of an object called "response"
          .then(function (response) {
            // Log the queryURL
            console.log(queryURL3);

            // Log the resulting object
            console.log(response);

            // Transfer content to HTML
            $(".city").html("<h1>" + response.name + " Weather Details &#127777;</h1>");
            $(".wind").text("Wind Speed (m/s): " + response.wind.speed);
            $(".description").text("Weather description: " + response.weather[0].description);
            //  maybe icon?

            // Convert the temp to fahrenheit
            var tempF = (response.main.temp - 273.15) * 1.8 + 32;
            var feelsF = (response.main.feels_like - 273.15) * 1.8 + 32;
            // add temp content to html
            $(".tempF").text("Temperature (F) " + tempF.toFixed(2));
            $(".feelsLike").text("Feels like: " + feelsF.toFixed(2));

            // Log the data in the console as well
            console.log("Wind Speed: " + response.wind.speed);

            console.log("Temperature (F): " + tempF);
          });
      });
  });
