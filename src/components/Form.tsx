import React, { useContext, useState } from 'react';

import { WeatherContext } from '../provider';
import '../App.css';

const Form: React.FC = () => {
  const [location, setLocation] = useState<string>('');
  const { fetchWeatherByCityName } = useContext(WeatherContext);

  const clickHandler = (city: string) => {
    fetchWeatherByCityName(city);
  };

  return (
    <div className="formWrapper">
      <input
        placeholder="Enter the city name..."
        type="text"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
      />
      <button onClick={() => clickHandler(location)}>Check</button>
    </div>
  );
};

export default Form;
