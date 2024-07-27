import { ForecastData } from "../api";

interface ForecastInfoProps {
    forecastData: ForecastData[];
}

export const ForecastInfo = ({ forecastData }: ForecastInfoProps) => {
    const hasData = forecastData.length > 0;
    return (
        <div className="text-center my-5">
            {hasData && (
                <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-2">Pronostico</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {forecastData.map((item) => (
                        <div
                            key={item.date}
                            className="bg-[#313050] text-white p-4 rounded-lg w-full sm:w-11/12 mx-auto flex flex-col items-center"
                        >
                            <h4 className="text-md sm:text-lg font-semibold mb-2">
                                {new Date(item.date).toLocaleDateString()}
                            </h4>
                            <p className="text-sm sm:text-base md:text-lg mb-1">
                                Temperature: {item.temp}°C
                            </p>
                            <p className="text-sm sm:text-base md:text-lg mb-2">
                                Description: {item.description}
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
