// Mock weather data for frontend-only implementation
export const mockWeatherData = {
  "New York": {
    city: "New York",
    country: "US",
    temperature: 22,
    description: "Partly cloudy",
    humidity: 65,
    windSpeed: 12,
    pressure: 1013,
    visibility: 10,
    uvIndex: 5,
    icon: "partly-cloudy",
    forecast: [
      { day: "Today", high: 25, low: 18, condition: "Partly cloudy", icon: "partly-cloudy" },
      { day: "Tomorrow", high: 28, low: 20, condition: "Sunny", icon: "sunny" },
      { day: "Wednesday", high: 23, low: 16, condition: "Rainy", icon: "rainy" },
      { day: "Thursday", high: 26, low: 19, condition: "Cloudy", icon: "cloudy" },
      { day: "Friday", high: 24, low: 17, condition: "Thunderstorm", icon: "thunderstorm" }
    ]
  },
  "London": {
    city: "London",
    country: "UK",
    temperature: 15,
    description: "Cloudy",
    humidity: 78,
    windSpeed: 8,
    pressure: 1008,
    visibility: 8,
    uvIndex: 2,
    icon: "cloudy",
    forecast: [
      { day: "Today", high: 18, low: 12, condition: "Cloudy", icon: "cloudy" },
      { day: "Tomorrow", high: 16, low: 10, condition: "Rainy", icon: "rainy" },
      { day: "Wednesday", high: 19, low: 14, condition: "Partly cloudy", icon: "partly-cloudy" },
      { day: "Thursday", high: 21, low: 15, condition: "Sunny", icon: "sunny" },
      { day: "Friday", high: 17, low: 11, condition: "Rainy", icon: "rainy" }
    ]
  },
  "Tokyo": {
    city: "Tokyo",
    country: "JP",
    temperature: 28,
    description: "Sunny",
    humidity: 58,
    windSpeed: 6,
    pressure: 1018,
    visibility: 12,
    uvIndex: 7,
    icon: "sunny",
    forecast: [
      { day: "Today", high: 30, low: 24, condition: "Sunny", icon: "sunny" },
      { day: "Tomorrow", high: 32, low: 26, condition: "Partly cloudy", icon: "partly-cloudy" },
      { day: "Wednesday", high: 29, low: 23, condition: "Cloudy", icon: "cloudy" },
      { day: "Thursday", high: 27, low: 21, condition: "Rainy", icon: "rainy" },
      { day: "Friday", high: 31, low: 25, condition: "Sunny", icon: "sunny" }
    ]
  },
  "Sydney": {
    city: "Sydney",
    country: "AU",
    temperature: 20,
    description: "Rainy",
    humidity: 85,
    windSpeed: 15,
    pressure: 1005,
    visibility: 6,
    uvIndex: 3,
    icon: "rainy",
    forecast: [
      { day: "Today", high: 22, low: 16, condition: "Rainy", icon: "rainy" },
      { day: "Tomorrow", high: 24, low: 18, condition: "Partly cloudy", icon: "partly-cloudy" },
      { day: "Wednesday", high: 26, low: 20, condition: "Sunny", icon: "sunny" },
      { day: "Thursday", high: 25, low: 19, condition: "Cloudy", icon: "cloudy" },
      { day: "Friday", high: 23, low: 17, condition: "Thunderstorm", icon: "thunderstorm" }
    ]
  },
  "Mumbai": {
    city: "Mumbai",
    country: "IN",
    temperature: 32,
    description: "Thunderstorm",
    humidity: 92,
    windSpeed: 18,
    pressure: 1002,
    visibility: 4,
    uvIndex: 6,
    icon: "thunderstorm",
    forecast: [
      { day: "Today", high: 34, low: 28, condition: "Thunderstorm", icon: "thunderstorm" },
      { day: "Tomorrow", high: 33, low: 27, condition: "Rainy", icon: "rainy" },
      { day: "Wednesday", high: 31, low: 26, condition: "Cloudy", icon: "cloudy" },
      { day: "Thursday", high: 30, low: 25, condition: "Partly cloudy", icon: "partly-cloudy" },
      { day: "Friday", high: 29, low: 24, condition: "Sunny", icon: "sunny" }
    ]
  }
};

export const getWeatherByCity = (city) => {
  const normalizedCity = city.toLowerCase();
  const cityKeys = Object.keys(mockWeatherData).map(key => key.toLowerCase());
  const foundKey = cityKeys.find(key => key.includes(normalizedCity));
  
  if (foundKey) {
    const originalKey = Object.keys(mockWeatherData).find(key => key.toLowerCase() === foundKey);
    return mockWeatherData[originalKey];
  }
  
  return null;
};

export const getRandomWeather = () => {
  const cities = Object.keys(mockWeatherData);
  const randomCity = cities[Math.floor(Math.random() * cities.length)];
  return mockWeatherData[randomCity];
};