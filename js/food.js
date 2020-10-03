// step 1: Zomato API 
cities = 
id = 1033
// currency = "$"
var lat = 41.4993 //will be generated via function through google maps API
var lon = -81.6944 //will be generated via function through google maps API

var queryURL = "https://developers.zomato.com/api/v2.1/search?q=" + restaurantName +
 "&count=15&lat=" + lat +"&lon=" + lon +"&radius=24140.2&cuisine=" + cuisine + "api_key"
//event.preventDefault to avoid refreshing the page on submit 
$(".submitBtn").on("click", function(event){
    event.preventDefault();
    var restaurantName = document.getElementById("restaurantName").value;
    var cuisine = document.getElementById("cuisine").value;
    var zipcode = document.getElementById("zipcode").value;
    var carryout = document.getElementById("carryout").checked;

    console.log(restaurantName);
    console.log(cuisine);
    console.log(zipcode);
    console.log(carryout);
});


$.ajax({
    url: queryURL,
    method: "GET",
    headers: {'user-key': "19a26be38c8982385cd3ead26085c343"}
}).then(function(response){
    console.log(response);
});
