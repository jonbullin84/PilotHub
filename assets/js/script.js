// var iataCodes = [
//  "ILM",
//  "FRA",
// ]

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '791d63a68cmsh8f9fdaa84b09186p1aaac6jsn0df46ab9335c',
		'X-RapidAPI-Host': 'airport-info.p.rapidapi.com'
	}
};

fetch (`https://airport-info.p.rapidapi.com/airport?iata=ilm`, options)
// fetch (`https://airport-info.p.rapidapi.com/airport?iata=${airportId}`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));