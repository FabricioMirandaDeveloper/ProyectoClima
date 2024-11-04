import { WeatherData } from "../utils/api"
import { translateDescription } from "../utils/weatherTranslations"

interface WeatherInfoProps {
    weatherData: WeatherData | null
}
const WeatherInfo = ({ weatherData }: WeatherInfoProps) => {
    return (
        <>
            {weatherData && (
                <div className='mt-4 flex flex-col justify-center items-center bg-slate-900 text-white p-4 rounded-lg shadow-lg w-9/12 mx-auto sm:w-8/12 md:w-7/12 lg:w-6/12'>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1">{weatherData.name}</h3>
                    <p className="mb-2">
                        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">{Math.round(weatherData.main.temp)}</span>
                        <sup className="text-lg sm:text-xl md:text-2xl lg:text-3xl">°C</sup>
                    </p>
                    <p>{translateDescription(weatherData.weather[0].description)}
                    </p>
                    <img
                        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                        alt="Weather Icon"
                        className="mt-2 w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28"
                    />
                </div>
            )}
        </>
    )
}

export default WeatherInfo
