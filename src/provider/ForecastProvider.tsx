import React, { createContext, useState } from 'react';
import { WeatherContextState } from '../constants/weatherConstants';

const contextDefaultValues: WeatherContextState = {
  weather: {},
  fetchWeatherByCityName: () => {},
  clearWeather: () => {},
};

export const WeatherContext =
  createContext<WeatherContextState>(contextDefaultValues);

const WeatherProvider: React.FC = ({ children }) => {
  const [weather, setWeather] = useState<object>(contextDefaultValues.weather);

  const fetchWeatherByCityName = async (city: string) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

    try {
      const data = await (await fetch(url)).json();
      setWeather(data);

      return data;
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const clearWeather = () => {
    setWeather({});
  };

  return (
    <WeatherContext.Provider
      value={{ weather, clearWeather, fetchWeatherByCityName }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
