
// step0: determining latitude and longitude from zipcode
// **this must be run first to get lat and lon**
// pulls zipcode from localstorage
var zipcode = localStorage.getItem("zipcode").trim();

var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zipcode + "&key=AIzaSyCxsfk5uokgV_Uu1XpzgMO3OAGaElsVqOw"

$.ajax({
    url: queryURL,
    method: "GET"
    })
    
    .then(function(response) {
        var formattedAddress = response.results[0].formatted_address;
        var lat = response.results[0].geometry.location.lat;
        var lon = response.results[0].geometry.location.lng;
        console.log(formattedAddress);
        console.log(lat);
        console.log(lon);
        
        var restaurantName = localStorage.getItem(restaurantName);
        var cuisine = localStorage.getItem(cuisine);
        var queryURL = "https://developers.zomato.com/api/v2.1/search?q=" + restaurantName +
        "&count=15&lat=" + lat +"&lon=" + lon +"&radius=24140.2&cuisine=" + cuisine + "api_key"

        // ajax call to get zomato data
        $.ajax({
            url: queryURL,
            method: "GET",
            headers: {'user-key': "19a26be38c8982385cd3ead26085c343"}
        })
            .then(function(response){
                console.log(response);
                 // step 3: OpenWeather API
                // This is our API key
                var APIKey = "6cfffd42b643f9cd29fe45722d8c7849";

                // Here we are building the URL we need to query the database
                var queryURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;

                // Here we run our AJAX call to the OpenWeatherMap API
                $.ajax({
                url: queryURL,
                method: "GET"
                })
                // We store all of the retrieved data inside of an object called "response"
                    .then(function(response) {

                        // Log the queryURL
                        console.log(queryURL);

                        // Log the resulting object
                        console.log(response);

                        // Transfer content to HTML
                        $(".city").html("<h1>" + response.name + " Weather Details &#127777;</h1>");
                        $(".wind").text("Wind Speed (m/s): " + response.wind.speed);
                        $(".description").text("Weather description: " + response.weather[0].description);
                            //  maybe icon? 
                        
                        // Convert the temp to fahrenheit
                        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
                        var feelsF = (response.main.feels_like - 273.15)*1.80 +32;
                        // add temp content to html
                        $(".tempF").text("Temperature (F) " + tempF.toFixed(2));
                        $(".feelsLike").text("Feels like: " + feelsF.toFixed(2));

                        // Log the data in the console as well
                        console.log("Wind Speed: " + response.wind.speed);
                        
                        console.log("Temperature (F): " + tempF);
                    });


            });

    });
