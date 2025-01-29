import React from 'react';
import './weather.css';

const weatherIcons = {
  Clear: '/assets/clear.png',
  Cloudy: '/assets/cloud.png',
  Rainy: '/assets/rain.png',
  Snowy: '/assets/snow.png',
  Default: '/assets/clear.png'
};

const getWeatherIcon = (weather) => weatherIcons[weather] || weatherIcons.Default;

export const Weather = ({ weather }) => {
  const weatherIcon = getWeatherIcon(weather);

  return (
    <div className='weather'>
      <div className='weather-container'>
        <div className='search-bar'>
          <input type='text' placeholder='Enter city name'/>
          <button>Search</button>
        </div>
        <img src={weatherIcon} alt='weather icon' data-testid="current-weather"/>
        <p className='temperature'>20°C</p>
        <p className='city'>London</p>
        <div className='weather-data'>
          <div className='col'>
            <div>
              <p>Humidity</p>
              <p>20%</p>
            </div>
          </div>
          <div className='col'>
            <div>
              <p>Wind Speed</p>
              <p>50 kmh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
