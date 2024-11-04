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
export interface ForecastData {
    date: string;
    temp: number;
    description: string;
    icon: string;
}
interface WeatherListItem {
    dt_txt: string;
    main: {
        temp: number;
    };
    weather: {
        description: string;
        icon: string;
    }[];
}
interface ForecastResponse {
    list: WeatherListItem[];
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

export const fetchForeCast = async (city: string): Promise<ForecastData[]> => {
    const response = await fetch(`${BASE_URL}forecast?q=${city}&appid=${API_KEY}&units=metric`)
    if (!response.ok) {
        throw new Error("Error fetching forecast data");
    }
    const data: ForecastResponse = await response.json()

    const dailyData = data.list.filter((reading) => reading.dt_txt.includes("12:00:00")) 

    const forecastData:ForecastData[] = dailyData.map((reading) => ({
        date: reading.dt_txt,
        temp: reading.main.temp,
        description: reading.weather[0].description,
        icon: reading.weather[0].icon
    }))
    return forecastData
}

export const fetchWeatherByCoords = async (latitude: number, longitude: number): Promise<WeatherData> => {
    const response = await fetch(`${BASE_URL}weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    if(!response.ok) {
        throw new Error("Error fetching weather data by coordinates")
    }
    return response.json()
}

export const fetchForeCastByCootds = async (latitude: number, longitude: number): Promise<ForecastData[]> => {
    const response = await fetch(`${BASE_URL}forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    if(!response.ok) {
        throw new Error("Error fetching forecast data by coordinates")
    }
    const data: ForecastResponse = await response.json()

    const dailyData = data.list.filter((reading) => reading.dt_txt.includes("12:00:00")  
    )

    const forecastData: ForecastData[] = dailyData.map((reading) => ({
        date: reading.dt_txt,
        temp: reading.main.temp,
        description: reading.weather[0].description,
        icon: reading.weather[0].icon
    }));
    return forecastData;
}

export const fetchCities = async(query: string) => {
    const url = `https://api.openweathermap.org/data/2.5/find?q=${query}&appid=${API_KEY}`

    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data.list);
        
        return data.list.map((city: { name: string; sys: { country: string } }) => ({
            name: city.name,
            country: city.sys.country
        }))
    } catch (error) {
        console.error("Error fetching cities:", error)
        return []
    }
}
