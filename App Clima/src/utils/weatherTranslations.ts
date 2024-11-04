const weatherDescriptions: {[key: string]: string} = {
    "clear sky": "Cielo despejado",
    "few clouds": "Pocas nubes",
    "light rain": "Lluvia ligera",
    "scattered clouds": "Nubes dispersas",
    "broken clouds": "Nubes fragmentadas",
    "shower rain": "Chubascos",
    "rain": "Lluvia",
    "thunderstorm": "Tormenta",
    "snow": "Nieve",
    "mist": "Niebla",
    "overcast clouds": "Nublado"
}

export const translateDescription = (description: string) => {
    return weatherDescriptions[description] || description
}