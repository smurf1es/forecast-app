export type WeatherContextState = {
  weather: any;
  fetchWeatherByCityName: (city: string) => void;
  clearWeather: () => void;
};
