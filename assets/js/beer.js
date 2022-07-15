function searchBeer(lat,long) {
    // var beerCode = document.querySelector("#brewery_name").value;
  console.log(lat,long)
    var getBeerInfo =
      "https://api.openbrewerydb.org/breweries?by_dist="+lat+","+long+"&per_page=3";
  
    fetch(getBeerInfo, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        console.log(response);
        if (response.cod !== 200) {
          document.getElementById("#brewery_name");
          isError = true;
          return;
        }
        if (!isError) {
          saveLocal(options);
        }
      });
    console.log(options);
  }
  
//   document.addEventListener("click", searchBeer)