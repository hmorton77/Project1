var map;
function initMap() {
  console.log("HATRED");
  var uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  map = new google.maps.Map(document.getElementById("map"), { zoom: 4, center: uluru });
}
