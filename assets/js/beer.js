

var beerInfo = document.querySelector(".beer-info")

function searchBeer(lat, long) {
  // var beerCode = document.querySelector("#brewery_name").value;
  console.log(lat, long);
  var getBeerInfo =
    "https://api.openbrewerydb.org/breweries?by_dist=" +
    lat +
    "," +
    long +
    "&per_page=3";

  fetch(getBeerInfo, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
    
      beerInfo.innerHTML = "";
      var breweryName = document.createElement("h2");
      breweryName.textContent = response.name;
      beerInfo.prepend(breweryName);

      var address = document.createElement("p");
      address.textContent = response.street_number + " " + response.street;
      beerInfo.append(address);

      var address2 = document.createElement("p");
      address2.textContent =
        response.city + ", " + response.state + " " + response.postal_code;
      beerInfo.append(address2);

      var phone = document.createElement("p");
      phone.textContent = response.phone;
      beerInfo.append(phone);

      var website = document.createElement("p");
      var link = document.createElement("a");
      link.setAttribute("href", response.website);
      link.setAttribute("target", "_blank");
      link.textContent = response.website;
      website.append(link);
      beerInfo.append(website);

      // beerCode.value = "lat, long";
    })
    .catch(function (error) {
      console.log("error", error);
    });
}
console.log("end of script");
//}

//   document.addEventListener("click", searchBeer)
// document.querySelector(".btn-search").addEventListener("click", searchBeer)
