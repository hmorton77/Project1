
// step 2: Google Maps API
// let map;

// function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: -34.397, lng: 150.644 },
//         zoom: 8,
// });
// }
// step2.5: determining latitude and longitude from zipcode

var zipcode = 44101
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
        
        

    });

