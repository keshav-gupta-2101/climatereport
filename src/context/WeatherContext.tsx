import React, { createContext, useContext, useState, useEffect } from 'react';
import type { WeatherData, ForecastData } from '../types/weather';

interface WeatherContextType {
  currentCity: string;
  setCurrentCity: (city: string) => void;
  weatherData: WeatherData | null;
  forecast: ForecastData[];
  isLoading: boolean;
  error: string | null;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

// Simulated API data - Replace with actual API integration
const fetchWeatherData = async (city: string): Promise<WeatherData> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    city,
    temperature: 25 + Math.random() * 10,
    condition: ['Sunny', 'Cloudy', 'Rain', 'Clear'][Math.floor(Math.random() * 4)],
    humidity: 50 + Math.random() * 30,
    windSpeed: 5 + Math.random() * 15,
    icon: 'sun'
  };
};

export const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentCity, setCurrentCity] = useState('Mumbai');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchWeatherData(currentCity);
        setWeatherData(data);
        // Generate forecast data
        const forecastData: ForecastData[] = Array.from({ length: 5 }).map((_, i) => ({
          ...data,
          date: new Date(Date.now() + i * 24 * 60 * 60 * 1000).toISOString(),
          high: data.temperature + 2,
          low: data.temperature - 2,
          precipitation: Math.random() * 100
        }));
        setForecast(forecastData);
      } catch (err) {
        setError('Failed to fetch weather data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentCity]);

  return (
    <WeatherContext.Provider value={{
      currentCity,
      setCurrentCity,
      weatherData,
      forecast,
      isLoading,
      error
    }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
};