import React from 'react';
import './weather.css';
import Search from './search';
import Humidity from './humdity';
import WindSpeed from './windspeed';
import CurrentWeather from './currentweather';

const weatherIcons = {
  Clear: '/assets/clear.png',
  Cloudy: '/assets/cloud.png',
  Rainy: '/assets/rain.png',
  Snowy: '/assets/snow.png',
  Default: '/assets/clear.png'
};

const getWeatherIcon = (currentWeather) => weatherIcons[currentWeather] || weatherIcons.Default;

export const Weather = ({ currentWeather }) => {
  return (
    <div className='weather'>
      <div className='weather-container'>
        <Search/>
        <img src={getWeatherIcon(currentWeather)} alt='weather icon' data-testid="current-weather"/>
        <CurrentWeather/>
        <div className='weather-data'>
          <div className='col'>
            <Humidity/>
          </div>
          <div className='col'>
            <WindSpeed/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
