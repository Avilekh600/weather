console.log('hello')


const inputcityDiv = document.getElementById('inputCity')
const nameDiv = document.getElementById('name')

const tempDiv = document.getElementById('temp') 
const dayDiv = document.getElementById('day')
const humidityDiv = document.getElementById('humidity')
const ConditionDiv = document.getElementById('condition')
const sunriseDiv = document.getElementById('sunrise')
const sunsetDiv = document.getElementById('sunset')


getWeatherData = (city) => {
  
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b3e3003b29msha8dc665aa9d8925p134ba6jsn081fbb0e24c3',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};

 return  fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`, options)
	.then(response => response.json())
	.then(response => response)
	.catch(err => console.error(err));

}


const searchCity = async () => {
  
  
  const input = inputcityDiv.value
  nameDiv.innerText = `${input}`
  const city = `${input}`
  const data = await getWeatherData(city)
  showWeatherData(data)

}


const showWeatherData = (weatherData) => {
 
      tempDiv.innerText = `${weatherData.current_observation.condition.temperature}`
      dayDiv.innerText = `${weatherData.forecasts[0].day}`
      humidityDiv.innerText = `${weatherData.current_observation.atmosphere.humidity}`
      ConditionDiv.innerText = `${weatherData.current_observation.condition.text}`
      sunriseDiv.innerText = `${weatherData.current_observation.astronomy.sunrise}`
      sunsetDiv.innerText = `${weatherData.current_observation.astronomy.sunset}`
  
}