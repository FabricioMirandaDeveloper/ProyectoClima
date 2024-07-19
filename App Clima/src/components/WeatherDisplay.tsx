import  { useState } from 'react';
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
            console.log(data);
            
        } catch (error: unknown) {
            if(error instanceof Error) {
                setError(error.message);
            }else {
                setError("An unknown error occurred")
            }
            setWeatherData(null);
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Visualizacion del Tiempo</h2>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Ingresa la ciudad"
            />
            <button 
                onClick={handleFetchWeather}
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300">Obtener el clima</button>

            {weatherData && (
                <div className='mt-4'>
                    <h3 className="text-xl font-semibold">{weatherData.name}</h3>
                    <p className="text-lg">Temperature: {weatherData.main.temp}°C</p>
                    <p className="text-lg">Description: {weatherData.weather[0].description}</p>
                    <img
                        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                        alt="Weather Icon"
                        className="mt-2"
                    />
                </div>
            )}

            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
        
    );
};

export default WeatherDisplay;
