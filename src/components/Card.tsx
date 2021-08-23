import React, { useContext } from 'react';

import { WeatherContext } from '../provider';
import '../App.css';
import generateDay from '../utils/generateDay';

const Card: React.FC = () => {
  const { weather } = useContext(WeatherContext);

  if (weather) console.log('weather', weather);

  return weather.main ? (
    <div className="mainWrapper">
      <div className="content">
        <div className="contentWrapper header">
          <h2>{weather.name}</h2>
        </div>

        <div className="contentWrapper">
          <div>
            <h3>Day: {generateDay()}</h3>
          </div>
          <div>
            <h3>{weather.weather[0].main}</h3>
          </div>
        </div>

        <div className="contentWrapper">
          <div>
            <p>Temperature: {weather.main.temp.toString().slice(0, 2)}℃</p>
          </div>

          <div>
            <p>
              Sunrise:{' '}
              {new Date(weather.sys.sunrise * 1000).toLocaleTimeString('en-IN')}
            </p>
          </div>
        </div>

        <div className="contentWrapper">
          <div>
            <p>Humidity: {weather.main.humidity}%</p>
          </div>

          <div>
            <p>
              Sunset:{' '}
              {new Date(weather.sys.sunset * 1000).toLocaleTimeString('en-IN')}{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Card;
