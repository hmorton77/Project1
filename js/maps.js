// step 2: Google Maps API
let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
});
}
// step2.5: determining latitude and longitude from zipcode
function lonlat() {
    console.log("success!")
}

