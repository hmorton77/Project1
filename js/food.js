
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
    
    // if (restaurantName == true);
        localStorage.setItem("restaurantName", restaurantName);
    // if (cuisine == true);
        localStorage.setItem("cuisine", cuisine);
    // if (zipcode == true);
        localStorage.setItem("zipcode", zipcode);
    // if (carryout == true);
        localStorage.setItem("carryout", carryout);
    location.reload();
});

// step 1: Zomato API 

// currency = "$"
// var lat = 41.4993 //will be generated via function through google maps API
// var lon = -81.6944 //will be generated via function through google maps API


