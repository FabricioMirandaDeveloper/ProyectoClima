import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import WeatherInfo from './components/WeatherInfo'
import { ForecastData, WeatherData } from './api'
import ForecastInfo from './components/ForecastInfo'
import { getUserLocation } from './utils/locations'
function App() {
  const[weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [forecastData, setForecastData] = useState<ForecastData[]>([]);
  useEffect(()=>{
    getUserLocation(
      (latitude, longitude) => {
        console.log(latitude);
        console.log(longitude); 
      }
    )
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
