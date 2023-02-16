import axios from 'axios';

export function fetchWeather(coords) {

  return axios.get('https://weatherapi-com.p.rapidapi.com/current.json', {
    headers: {
      'X-RapidAPI-Key': '7be292e100msh732888e97a53cc2p16a297jsn29ce19925e78',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    },
    params: {
      q: coords
    }
  })
  .then(({data}) => {
    return {
      name: data.location.name,
      temp: data.current.temp_c,
      desc:data.current.condition.text
    }
  })
  .catch((err) => console.log(err))
}


 