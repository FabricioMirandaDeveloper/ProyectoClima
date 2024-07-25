import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import WeatherInfo from './components/WeatherInfo'
import { ForecastData, WeatherData } from './api'
import ForecastInfo from './components/ForecastInfo'
function App() {
  const[weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [forecastData, setForecastData] = useState<ForecastData[]>([]);
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
