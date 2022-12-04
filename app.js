
//asks user permission to use tracking
const locationBtn = document.querySelector('.allow')
locationBtn.addEventListener('click', latAndLong)

//function to get latitude and longitude
//sets global variables to be updated
let lat = '';
let long = '';
function latAndLong(){
  navigator.geolocation.getCurrentPosition((position) => {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    console.log(lat, long)
  }
  )
}

//axios request to get weather
const weatherDisplay = document.querySelector('.weatherLive')
async function weatherCall() {
  const weather = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=rain,snowfall&current_weather=true`)
console.log(weather)
//adds weather to page
  weatherDisplay.innerText = `Temperature: ${weather.data.current_weather.temperature} C`
  document.querySelector('.snow').innerText = `Snow: ${weather.data.hourly.snowfall[0]} CM`
  document.querySelector('.rain').innerText = `Rain: ${weather.data.hourly.rain[0]} MM`
}


//initializes weatherCall
const what = document.querySelector('.whats')
what.addEventListener('click', weatherCall)