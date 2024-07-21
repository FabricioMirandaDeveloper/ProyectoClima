import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import WeatherInfo from './components/WeatherInfo'
import { WeatherData } from './api'
function App() {
  const[weatherData, setWeatherData] = useState<WeatherData | null>(null)
  return (
    <>
      <Header setWeatherData={setWeatherData}/>
      <WeatherInfo weatherData={weatherData}/>
    </>
  )
}
export default App
