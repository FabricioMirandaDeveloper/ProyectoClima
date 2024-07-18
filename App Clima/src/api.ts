const API_KEY = "b71869c68b8c5c6b1029f0d4f3e5b252";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export interface WeatherData {
    name: string;
    main: {
        temp: number;
    };
    weather: {
        description: string;
        icon: string;
    }[];
}

export const fetchWeather = async (city: string): Promise<WeatherData> => {
    const response = await fetch(
        `${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) {
        throw new Error("Error fetching weather data");
    }
    return response.json();
};
