

var beerInfo = document.querySelector(".beer-info");

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

      for(var i = 0; i < response.length; i++){

      var brewery = document.createElement("div");

      var breweryName = document.createElement("h2");
      breweryName.textContent = response[i].name;
      console.log(response[i].name);
      brewery.prepend(breweryName);

      var address = document.createElement("div");
      address.textContent = response[i].street;
      brewery.append(address);
      console.log(response[i].street);

      var address2 = document.createElement("div");
      address2.textContent =
      response[i].city + ", " + response[i].state + " " + response[i].postal_code;
      brewery.append(address2);

      var phone = document.createElement("div");
      phone.textContent = response[i].phone;
      brewery.append(phone);

      var website = document.createElement("div");
      var link = document.createElement("a");
      link.setAttribute("href", response[i].website_url);
      link.setAttribute("target", "_blank");
      link.textContent = response[i].website_url;
      website.append(link);
      brewery.append(website);

      var brk = document.createElement("hr")
      brewery.append(brk);

      beerInfo.append(brewery);

    }      // beerCode.value = "lat, long";
})
    .catch(function (error) {
      console.log("error", error);
    });
}
//}

//   document.addEventListener("click", searchBeer)
// document.querySelector(".btn-search").addEventListener("click", searchBeer)
