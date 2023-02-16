/* eslint-disable global-require */

const images = {
    Sunny: require('../assets/clear.png'),
    Hail: require('../assets/hail.png'),
    Cloudy: require('../assets/heavy-cloud.png'),
    Mist: require('../assets/mist.png'),
    Fog: require('../assets/mist.png'),
    Overcast: require('../assets/overcast.png'),
    'Partly cloudy': require('../assets/light-cloud.png'),
    'Heavy rain': require('../assets/heavy-rain.png'),
    'Heavy rain at times': require('../assets/heavy-rain.png'),
    'Patchy rain possible': require('../assets/light-rain.png'),
    'Patchy light rain': require('../assets/light-rain.png'),
    'Light rain': require('../assets/light-rain.png'),
    'Light drizzle': require('../assets/light-rain.png'),
    'Patchy light drizzle': require('../assets/light-rain.png'),
    'Moderate rain': require('../assets/showers.png'),
    'Moderate rain at times': require('../assets/showers.png'),
    'Patchy sleet possible': require('../assets/sleet.png'),
    'Patchy snow possible': require('../assets/snow.png'),
    'Light snow': require('../assets/snow.png'),
    'Thundery outbreaks possible': require('../assets/thunder.png'),
  };
  
  export default weather => images[weather];
  