import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import { fetchCities, fetchForeCast, fetchWeather, ForecastData, WeatherData } from '../utils/api';

interface HeaderProps {
  setWeatherData: (data:WeatherData) => void
  setForecastData: (data:ForecastData[]) => void
}
const Header = ({setWeatherData, setForecastData}: HeaderProps) => {
  const [city, setCity] = useState<string>("")
  const [suggestedCities, setSuggestedCities] = useState<{ name: string; country: string }[]>([])

  const handleFetchWeather = async() => {
    try {
      const data = await fetchWeather(city)
      setWeatherData(data)

      const forecast = await fetchForeCast(city)
      setForecastData(forecast)
      
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleFetchWeather();
  };

  useEffect(()=>{
    const fetchCitySugestions = async () => {
      if (city.length > 2) {
        const cities = await fetchCities(city)
        setSuggestedCities(cities)
      }else {
        setSuggestedCities([]);
      }
    }
    fetchCitySugestions()
  }, [city])
  return (
    <>
      <header className="h-16 bg-slate-900 flex items-center justify-center text-white">
        <nav className='w-11/12 flex gap-5 justify-center items-center sm:w-8/12 sm:justify-evenly md:justify-start md:gap-x-20 lg:gap-x-40'>
          <div className="flex items-center gap-x-2">
            <FontAwesomeIcon className='h-6' icon={faCloudSun} />
            <h1 className='font-bold text-lg'>EL CLIMA</h1>
          </div>
          <form onSubmit={handleSubmit} className='relative text-[#313050]'>
            <input type="text" className='w-36 p-2 rounded-lg bg-white sm:w-60 lg:w-80' placeholder='Buscar ciudad' onChange={e=>setCity(e.target.value)} value={city}/>
            <button type="submit" className='absolute right-2 top-1/2 transform -translate-y-1/2'>
            <FontAwesomeIcon className='h-4 sm:h-6' icon={faMagnifyingGlass}/>
            </button>

            {suggestedCities && suggestedCities.length > 0 && (
              <ul className="absolute bg-white w-full rounded-lg mt-1 max-h-48 overflow-y-auto z-10">
                {suggestedCities.map((suggestion, index) => (
                  <li
                    key={index}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => {
                      setCity(suggestion.name)
                      setSuggestedCities([])
                    }}
                  >
                    {suggestion.name}, {suggestion.country}
                  </li>
                ))}
              </ul>
            )}
          </form>
        </nav>

      </header>
    </>
  );
};

export default Header
