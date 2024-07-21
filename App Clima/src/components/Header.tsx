import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { fetchWeather, WeatherData } from '../api';

interface HeaderProps {
  setWeatherData: (data:WeatherData) => void
}
const Header = ({setWeatherData}: HeaderProps) => {
  const [city, setCity] = useState("")
  const handleFetchWeather = async() => {
    try {
      const data = await fetchWeather(city)
      setWeatherData(data)
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <header className="h-16 bg-[#313050] flex items-center justify-center text-white">
        <nav className='w-11/12 flex gap-5 justify-center items-center sm:w-8/12 sm:justify-evenly md:justify-start md:gap-x-20 lg:gap-x-40'>
          <div className="flex items-center gap-x-2">
            <FontAwesomeIcon className='h-6' icon={faCloudSun} />
            <h1 className='font-bold text-lg'>EL CLIMA</h1>
          </div>
          <div className='relative text-[#313050]'>
            <input type="text" className='w-36 p-2 rounded-lg sm:w-60 lg:w-80' placeholder='Buscar ciudad' onChange={e=>setCity(e.target.value)} value={city}/>
            <FontAwesomeIcon className='absolute right-2 top-1/2 transform -translate-y-1/2' icon={faMagnifyingGlass} onClick={handleFetchWeather}/>
          </div>
        </nav>

      </header>
    </>
  );
};

export default Header
