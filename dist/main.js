/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("const getCity = () => {\n\tconst formData = document.querySelector('form');\n\tconst citySelect = document.querySelector(`.input`);\n\tconsole.log(citySelect.value);\n\tformData.addEventListener(`submit`, function (e) {\n\t\te.preventDefault();\n\t\tsearch.classList.toggle(`active`);\n\t\tgetWeather(citySelect.value);\n\t});\n};\n\nfunction handleSubmit(e) {\n\te.preventDefault();\n\tconsole.log('boobs');\n}\n\nasync function getWeather(city) {\n\tconst key = `?key=c71c1ba2dc2742deb58180612211002`;\n\tcity = city || 'calgary';\n\n\t//Key: c71c1ba2dc2742deb58180612211002\n\tconst response = await fetch(\n\t\t`http://api.weatherapi.com/v1/forecast.json${key}&q=${city}&days=10`\n\t);\n\tconst data = await response.json();\n\t// console.log(data);\n\tscreenRender(data);\n}\n\nfunction screenRender(data) {\n\trenderDashboard(data);\n\t// data.forecast.forecastday.forEach((day) => {\n\t// \trenderForecast(day);\n\t// });\n}\n\nconst renderDashboard = (data) => {\n\t//Location Header\n\tconst city = data.location.name;\n\tconst region = data.location.region;\n\tconst country = data.location.country;\n\n\tconst locationCity = document.querySelector('.location-city');\n\tconst locationCountry = document.querySelector('.location-country');\n\tlocationCity.innerText = `${city}, ${region}`;\n\tlocationCountry.innerText = country;\n\n\t//Current Weather\n\tconst weather = data.current.temp_c;\n\tconst feelslike = data.current.feelslike_c;\n\tconst condition = data.current.condition.text;\n\tconst conditionIcon = data.current.condition.icon;\n\tconst sunRise = data.forecast.forecastday[0].astro.sunrise;\n\tconst sunSet = data.forecast.forecastday[0].astro.sunset;\n\n\tconst weatherIcon = document.querySelector(`.weather-icon`);\n\tconst weatherCurrent = document.querySelector(`.weather-current`);\n\n\tweatherIcon.src = conditionIcon;\n\n\tweatherCurrent.innerHTML = `\n\t<br> ${condition}\n\t<br>Current: ${weather} \n\t<br>Feels Like: ${feelslike}\n\t<br>Sunrise: ${sunRise}\n\t<br>Sunset: ${sunSet}`;\n};\n\nconst renderForecast = (data) => {\n\tconst drawhere = document.querySelector('.forecast');\n\tconst dayDiv = document.createElement('div');\n\tdayDiv.classList.add('dayDiv');\n\n\tconst renderDate = data.date;\n\tconst high = data.day.maxtemp_c;\n\tconst low = data.day.mintemp_c;\n\n\tdayDiv.innerHTML = `${renderDate}: High: ${high} Low: ${low}`;\n\n\tdrawhere.appendChild(dayDiv);\n};\n\ngetCity();\ngetWeather();\n\nconst search = document.querySelector('.search');\nconst btn = document.querySelector('.btn');\nconst input = document.querySelector('.input');\n\nbtn.addEventListener('click', (e) => {\n\t// e.preventDefault();\n\tsearch.classList.toggle(`active`);\n\tinput.focus();\n});\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");
/******/ })()
;