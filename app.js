const locationBtn = document.querySelector('.allow')
locationBtn.addEventListener('click', latAndLong)


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


async function weatherCall() {
  const weather = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=rain,snowfall&current_weather=true`)
console.log(weather)
}



const what = document.querySelector('.whats')
what.addEventListener('click', weatherCall)