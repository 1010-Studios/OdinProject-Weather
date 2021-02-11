async function getWeather() {
	const key = `?key=c71c1ba2dc2742deb58180612211002`;
	const city = 'calgary';

	//Key: c71c1ba2dc2742deb58180612211002
	const response = await fetch(
		`http://api.weatherapi.com/v1/forecast.json${key}&q=${city}&days=10`
	);
	const data = await response.json();
	console.log(data);
	return extractUsefulData(data.location, data.forecast.forecastday);
}

function extractUsefulData(location, forecast) {
	//Location
	const city = location.name;
	const region = location.region;
	const country = location.country;

	//Conditions
	// const condition = forecast.;
	// const conditionIcon = current.condition.icon;

	//Forecast
	forecast.forEach((day) => {});
	const weather = current.temp_c;
	const feelslike = current.feelslike_c;

	console.log(city, region, country, weather, feelslike);
}

export default getWeather;
