import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import WeatherInfo from './components/WeatherInfo'
import { fetchForeCastByCootds, fetchWeatherByCoords, ForecastData, WeatherData } from './api'
import ForecastInfo from './components/ForecastInfo'
import { getUserLocation } from './utils/locations'
function App() {
  const[weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [forecastData, setForecastData] = useState<ForecastData[]>([]);
  useEffect(()=>{
    getUserLocation(async (latitude, longitude) => {
      try {
        const weather = await fetchWeatherByCoords(latitude, longitude)
        setWeatherData(weather)
        const forecast = await fetchForeCastByCootds(latitude, longitude);
        setForecastData(forecast);
      } catch (error) {
        console.error("Error fetching weather or forecast data:", error);
        
      }
    })
  }, [])
  return (
    <>
      <Header 
      setWeatherData={setWeatherData}
      setForecastData={setForecastData}
      />
      <WeatherInfo weatherData={weatherData}/>
      <ForecastInfo forecastData={forecastData}/>
    </>
  )
}
export default App
