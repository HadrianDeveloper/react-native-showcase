/* eslint-disable global-require */

const basePath = '../../../assets';

const images = {
    Sunny: require(`${basePath}/clear.png`),
    Hail: require(`${basePath}/hail.png`),
    Cloudy: require(`${basePath}/heavy-cloud.png`),
    Mist: require(`${basePath}/mist.png`),
    Fog: require(`${basePath}/mist.png`),
    Overcast: require(`${basePath}/overcast.png`),
    'Partly cloudy': require(`${basePath}/light-cloud.png`),
    'Heavy rain': require(`${basePath}/heavy-rain.png`),
    'Heavy rain at times': require(`${basePath}/heavy-rain.png`),
    'Patchy rain possible': require(`${basePath}/light-rain.png`),
    'Patchy light rain': require(`${basePath}/light-rain.png`),
    'Light rain': require(`${basePath}/light-rain.png`),
    'Light drizzle': require(`${basePath}/light-rain.png`),
    'Patchy light drizzle': require(`${basePath}/light-rain.png`),
    'Moderate rain': require(`${basePath}/showers.png`),
    'Moderate rain at times': require(`${basePath}/showers.png`),
    'Patchy sleet possible': require(`${basePath}/sleet.png`),
    'Patchy snow possible': require(`${basePath}/snow.png`),
    'Light snow': require(`${basePath}/snow.png`),
    'Thundery outbreaks possible': require(`${basePath}/thunder.png`),
  };
  
  export default weather => images[weather];
  