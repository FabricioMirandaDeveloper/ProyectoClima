import { ForecastData } from "../api";
import { translateDescription } from "../utils/weatherTranslations";

interface ForecastInfoProps {
    forecastData: ForecastData[];
}

export const ForecastInfo = ({ forecastData }: ForecastInfoProps) => {
    const hasData = forecastData.length > 0;
    const getDayName = (dateString: string) => {
        const date = new Date(dateString)
        const dayName = date.toLocaleDateString("es-Es",{weekday: "long"})
        return dayName.charAt(0).toUpperCase() + dayName.slice(1)
    }
    return (
        <div className="text-center my-5">
            {hasData && (
                <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-2">Pronostico</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {forecastData.map((item) => (
                        <div
                            key={item.date}
                            className="bg-slate-900 text-white p-4 rounded-lg w-full sm:w-11/12 mx-auto flex flex-col items-center"
                        >
                            <h4 className="text-md sm:text-lg font-semibold mb-2">
                                {getDayName(item.date)}
                            </h4>
                            <p className="mb-1">
                                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{Math.round(item.temp)}</span>
                                    <sup className="text-sm sm:text-base md:text-lg lg:text-xl">°C</sup>
                                </p>
                            <p className="text-sm sm:text-base md:text-lg mb-2">
                                {translateDescription(item.description)}
                            </p>
                            <img
                                src={`https://openweathermap.org/img/wn/${item.icon}.png`}
                                alt="Weather Icon"
                                className="mt-2 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                            />
                        </div>
                    ))}
                </div>
            </div>
            )}
        </div>
    );
};

export default ForecastInfo;
