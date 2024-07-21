import { WeatherData } from "../api"

interface WeatherInfoProps {
    weatherData: WeatherData | null
}
const WeatherInfo = ({weatherData}: WeatherInfoProps) => {
    return (
        <>
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
        </>
    )
}

export default WeatherInfo
