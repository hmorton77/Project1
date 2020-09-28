// step 1: Zomato API 
cities = "Cleveland, Ohio"
id = 1033
// currency = "$"
lat = 41.4993 //will be generated via function through google maps API
lon = -81.6944 //will be generated via function through google maps API
radius = 24140.2 //about 15 miles


var restaurantName = "olivegarden"; //user input (no spaces!)
var cuisine = "italian" //user inputs here
// var price_range =  four//user
// var average_cost_for_x =  price_range + "" //something to scale the pricing
// var zipcode = 44136 

var queryURL = "https://developers.zomato.com/api/v2.1/search?q=" + restaurantName +
 "&count=15&lat=" + lat +"&lon=" + lon +"&radius=24140.2&cuisine=" + cuisine + "api_key"



$.ajax({
    url: queryURL,
    method: "GET",
    headers: {'user-key': "19a26be38c8982385cd3ead26085c343"}
}).then(function(response){
    console.log(response);
});
