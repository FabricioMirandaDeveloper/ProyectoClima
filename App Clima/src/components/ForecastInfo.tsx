import { ForecastData } from "../api";

interface ForecastInfoProps {
    forecastData: ForecastData[];
}

export const ForecastInfo = ({ forecastData }: ForecastInfoProps) => {
    return (
        <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Forecast</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {forecastData.map((item) => (
                    <div key={item.date} className="bg-white p-4 rounded-lg shadow-md">
                        <h4 className="text-lg font-semibold">{new Date(item.date).toLocaleDateString()}</h4>
                        <p className="text-lg">Temperature: {item.temp}°C</p>
                        <p className="text-lg">Description: {item.description}</p>
                        <img
                            src={`https://openweathermap.org/img/wn/${item.icon}.png`}
                            alt="Weather Icon"
                            className="mt-2"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ForecastInfo;
