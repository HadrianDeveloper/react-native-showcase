import axios from 'axios';

//----------- 100 API CALLS A MONTH MAX:
export function fetchWeatherB(coords) {
  const {longitude, latitude} = coords;
  return axios.get('https://yahoo-weather5.p.rapidapi.com/weather', {
    headers: {
      'X-RapidAPI-Key': '7be292e100msh732888e97a53cc2p16a297jsn29ce19925e78',
      'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
    },
    params: {
      lat: latitude, 
      long: longitude, 
      format: 'json', 
      u: 'c'
    }
  })
  .then(({data}) => data.current_observation.condition)
  .catch((err) => console.log(err))
};

//---------- 20 API CALLS A DAY MAX:
export function fetchWeather(coords) {
  const {longitude, latitude} = coords;
  return axios.get('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourlyy', {
    headers: {
      'X-RapidAPI-Key': '7be292e100msh732888e97a53cc2p16a297jsn29ce19925e78',
      'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
    },
    params: {
      lon: longitude, lat: latitude
    }
  })
  .then(({data}) => {
    return {
      temp: data.data[0].temp,
      desc: data.data[0].weather.description
    }
  })
  .catch((err) => console.log(err))
};

export function fetchCoordinates(place) {
  return axios.get('https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi', {
    params: { address: place },
    headers: {
      'X-RapidAPI-Key': '7be292e100msh732888e97a53cc2p16a297jsn29ce19925e78',
      'X-RapidAPI-Host': 'address-from-to-latitude-longitude.p.rapidapi.com'
    }
  })
    .then((res) => res.data.Results[0])
    .catch((err) => alert(err))
};


