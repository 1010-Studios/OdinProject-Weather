const getCity = () => {
	const formData = document.querySelector('form');
	const citySelect = document.querySelector(`.input`);
	console.log(citySelect.value);
	formData.addEventListener(`submit`, function (e) {
		e.preventDefault();
		search.classList.toggle(`active`);
		getWeather(citySelect.value);
	});
};

function handleSubmit(e) {
	e.preventDefault();
	console.log('boobs');
}

async function getWeather(city) {
	const key = `?key=c71c1ba2dc2742deb58180612211002`;
	city = city || 'calgary';

	//Key: c71c1ba2dc2742deb58180612211002
	const response = await fetch(
		`http://api.weatherapi.com/v1/forecast.json${key}&q=${city}&days=10`
	);
	const data = await response.json();
	// console.log(data);
	screenRender(data);
}

function screenRender(data) {
	renderDashboard(data);
	data.forecast.forecastday.forEach((day) => {
		renderForecast(day);
	});
}

const renderDashboard = (data) => {
	//Location Header
	const city = data.location.name;
	const region = data.location.region;
	const country = data.location.country;

	const locationHeader = document.querySelector('.location');
	const cityHead = document.createElement('h2');
	const countryHead = document.createElement(`h4`);

	cityHead.innerText = `${city}, ${region}`;
	countryHead.innerText = country;

	locationHeader.appendChild(cityHead);
	locationHeader.appendChild(countryHead);

	//Current Weather
	const weather = data.current.temp_c;
	const feelslike = data.current.feelslike_c;
	const condition = data.current.condition.text;
	const conditionIcon = data.current.condition.icon;
	const sunRise = data.forecast.forecastday[0].astro.sunrise;
	const sunSet = data.forecast.forecastday[0].astro.sunset;

	const currentWeather = document.querySelector(`.weather-today`);
	currentWeather.innerHTML = '';
	const newDiv = document.createElement('div');
	newDiv.innerHTML = `
	<br> ${condition}
	<br>Current: ${weather} 
	<br>Feels Like: ${feelslike}
	<br>Sunrise: ${sunRise}
	<br>Sunset: ${sunSet}`;
	const conditionIMG = document.createElement(`img`);
	conditionIMG.src = conditionIcon;

	currentWeather.appendChild(conditionIMG);
	currentWeather.appendChild(newDiv);
};

const renderForecast = (data) => {
	const drawhere = document.querySelector('.forecast');
	const dayDiv = document.createElement('div');
	dayDiv.id = data.date;
	dayDiv.classList.add('dayDiv');

	const renderDate = data.date;
	const high = data.day.maxtemp_c;
	const low = data.day.mintemp_c;

	dayDiv.innerHTML = `${renderDate}: High: ${high} Low: ${low}`;

	drawhere.appendChild(dayDiv);
};

getCity();
// getWeather();

const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', (e) => {
	// e.preventDefault();
	search.classList.toggle(`active`);
	input.focus();
});
