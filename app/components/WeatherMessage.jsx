var React = require('react');

var WeatherMessage = ({temp, location, weatherForecast}) => {
  return(
    <h3 className="text-center">It is {temp} in {location}. forecast : {weatherForecast}</h3>
  );
}

module.exports = WeatherMessage;
