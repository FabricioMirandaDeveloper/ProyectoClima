import React, { useState } from 'react';
import { fetchWeather, WeatherData } from '../api.ts'; 
const WeatherDisplay: React.FC = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleFetchWeather = async () => {
        try {
            const data = await fetchWeather(city);
            setWeatherData(data);
            setError(null);
        } catch (error) {
            setError(error.message);
            setWeatherData(null);
        }
    };

    return (
        <div>
            <h2>Weather Display</h2>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
            />
            <button onClick={handleFetchWeather}>Get Weather</button>

            {weatherData && (
                <div>
                    <h3>{weatherData.name}</h3>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    <p>Description: {weatherData.weather[0].description}</p>
                    <img
                        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                        alt="Weather Icon"
                    />
                </div>
            )}

            {error && <p>{error}</p>}
        </div>
    );
};

export default WeatherDisplay;
