import React from 'react';
import './weather.css';
import sunnyImg from './sunny-img.png';

export const Weather = () => {
  return (
    <div className='weather'>
      <div className='weather-container'>
        <div className='search-bar'>
          <input type='text' placeholder='Enter city name'/>
          <button>Search</button>
        </div>
        <img src={sunnyImg} alt='weather icon' data-testid="current-weather"/>
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

export default Weather
