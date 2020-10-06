$(".submitBtn").on("click", function (event) {
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
