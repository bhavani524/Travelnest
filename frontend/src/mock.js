// Mock weather data for development
export const mockWeatherData = {
  "New York": {
    current: {
      location: "New York, NY, USA",
      temperature: 22,
      condition: "Partly cloudy",
      icon: "⛅",
      humidity: 65,
      windSpeed: 15,
      windDirection: "SW",
      pressure: 1013,
      uvIndex: 6,
      visibility: 10,
      feelsLike: 25,
      lastUpdated: "2025-01-15 14:30"
    },
    forecast: [
      {
        date: "2025-01-15",
        dayName: "Today",
        high: 24,
        low: 18,
        condition: "Partly cloudy",
        icon: "⛅",
        precipitation: 20,
        windSpeed: 15,
        humidity: 65
      },
      {
        date: "2025-01-16",
        dayName: "Tomorrow",
        high: 26,
        low: 19,
        condition: "Sunny",
        icon: "☀️",
        precipitation: 0,
        windSpeed: 12,
        humidity: 58
      },
      {
        date: "2025-01-17",
        dayName: "Friday",
        high: 21,
        low: 16,
        condition: "Rainy",
        icon: "🌧️",
        precipitation: 85,
        windSpeed: 18,
        humidity: 78
      },
      {
        date: "2025-01-18",
        dayName: "Saturday",
        high: 23,
        low: 17,
        condition: "Cloudy",
        icon: "☁️",
        precipitation: 40,
        windSpeed: 14,
        humidity: 72
      },
      {
        date: "2025-01-19",
        dayName: "Sunday",
        high: 25,
        low: 20,
        condition: "Partly cloudy",
        icon: "⛅",
        precipitation: 15,
        windSpeed: 13,
        humidity: 63
      }
    ]
  },
  "London": {
    current: {
      location: "London, UK",
      temperature: 8,
      condition: "Overcast",
      icon: "☁️",
      humidity: 82,
      windSpeed: 22,
      windDirection: "NW",
      pressure: 1008,
      uvIndex: 2,
      visibility: 8,
      feelsLike: 5,
      lastUpdated: "2025-01-15 19:30"
    },
    forecast: [
      {
        date: "2025-01-15",
        dayName: "Today",
        high: 10,
        low: 6,
        condition: "Overcast",
        icon: "☁️",
        precipitation: 60,
        windSpeed: 22,
        humidity: 82
      },
      {
        date: "2025-01-16",
        dayName: "Tomorrow",
        high: 12,
        low: 8,
        condition: "Light rain",
        icon: "🌦️",
        precipitation: 70,
        windSpeed: 18,
        humidity: 85
      },
      {
        date: "2025-01-17",
        dayName: "Friday",
        high: 9,
        low: 5,
        condition: "Rainy",
        icon: "🌧️",
        precipitation: 90,
        windSpeed: 25,
        humidity: 88
      },
      {
        date: "2025-01-18",
        dayName: "Saturday",
        high: 11,
        low: 7,
        condition: "Partly cloudy",
        icon: "⛅",
        precipitation: 30,
        windSpeed: 16,
        humidity: 75
      },
      {
        date: "2025-01-19",
        dayName: "Sunday",
        high: 13,
        low: 9,
        condition: "Sunny",
        icon: "☀️",
        precipitation: 10,
        windSpeed: 14,
        humidity: 68
      }
    ]
  },
  "Tokyo": {
    current: {
      location: "Tokyo, Japan",
      temperature: 12,
      condition: "Clear",
      icon: "☀️",
      humidity: 45,
      windSpeed: 8,
      windDirection: "E",
      pressure: 1022,
      uvIndex: 4,
      visibility: 15,
      feelsLike: 12,
      lastUpdated: "2025-01-16 03:30"
    },
    forecast: [
      {
        date: "2025-01-15",
        dayName: "Today",
        high: 15,
        low: 9,
        condition: "Clear",
        icon: "☀️",
        precipitation: 0,
        windSpeed: 8,
        humidity: 45
      },
      {
        date: "2025-01-16",
        dayName: "Tomorrow",
        high: 17,
        low: 11,
        condition: "Partly cloudy",
        icon: "⛅",
        precipitation: 20,
        windSpeed: 10,
        humidity: 52
      },
      {
        date: "2025-01-17",
        dayName: "Friday",
        high: 14,
        low: 8,
        condition: "Cloudy",
        icon: "☁️",
        precipitation: 45,
        windSpeed: 12,
        humidity: 68
      },
      {
        date: "2025-01-18",
        dayName: "Saturday",
        high: 16,
        low: 10,
        condition: "Sunny",
        icon: "☀️",
        precipitation: 5,
        windSpeed: 9,
        humidity: 48
      },
      {
        date: "2025-01-19",
        dayName: "Sunday",
        high: 18,
        low: 12,
        condition: "Partly cloudy",
        icon: "⛅",
        precipitation: 15,
        windSpeed: 11,
        humidity: 55
      }
    ]
  },
  "Sydney": {
    current: {
      location: "Sydney, Australia",
      temperature: 28,
      condition: "Sunny",
      icon: "☀️",
      humidity: 55,
      windSpeed: 12,
      windDirection: "NE",
      pressure: 1018,
      uvIndex: 8,
      visibility: 20,
      feelsLike: 31,
      lastUpdated: "2025-01-16 05:30"
    },
    forecast: [
      {
        date: "2025-01-15",
        dayName: "Today",
        high: 30,
        low: 24,
        condition: "Sunny",
        icon: "☀️",
        precipitation: 0,
        windSpeed: 12,
        humidity: 55
      },
      {
        date: "2025-01-16",
        dayName: "Tomorrow",
        high: 32,
        low: 26,
        condition: "Partly cloudy",
        icon: "⛅",
        precipitation: 10,
        windSpeed: 14,
        humidity: 58
      },
      {
        date: "2025-01-17",
        dayName: "Friday",
        high: 29,
        low: 23,
        condition: "Thunderstorms",
        icon: "⛈️",
        precipitation: 80,
        windSpeed: 20,
        humidity: 75
      },
      {
        date: "2025-01-18",
        dayName: "Saturday",
        high: 27,
        low: 21,
        condition: "Cloudy",
        icon: "☁️",
        precipitation: 40,
        windSpeed: 16,
        humidity: 70
      },
      {
        date: "2025-01-19",
        dayName: "Sunday",
        high: 31,
        low: 25,
        condition: "Sunny",
        icon: "☀️",
        precipitation: 5,
        windSpeed: 13,
        humidity: 52
      }
    ]
  }
};

export const mockCities = [
  "New York",
  "London",
  "Tokyo",
  "Sydney",
  "Paris",
  "Berlin",
  "Dubai",
  "Mumbai",
  "São Paulo",
  "Mexico City",
  "Cairo",
  "Moscow",
  "Beijing",
  "Los Angeles",
  "Toronto",
  "Bangkok",
  "Singapore",
  "Istanbul",
  "Rome",
  "Madrid"
];

export const getMockWeatherData = (city) => {
  const normalizedCity = city.toLowerCase();
  
  // Return specific city data if available
  const cityKey = Object.keys(mockWeatherData).find(key => 
    key.toLowerCase() === normalizedCity
  );
  
  if (cityKey) {
    return mockWeatherData[cityKey];
  }
  
  // Generate random weather data for other cities
  const conditions = [
    { condition: "Sunny", icon: "☀️" },
    { condition: "Partly cloudy", icon: "⛅" },
    { condition: "Cloudy", icon: "☁️" },
    { condition: "Rainy", icon: "🌧️" },
    { condition: "Overcast", icon: "☁️" },
    { condition: "Clear", icon: "☀️" }
  ];
  
  const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
  const baseTemp = Math.floor(Math.random() * 30) + 5; // 5-35°C
  
  return {
    current: {
      location: city,
      temperature: baseTemp,
      condition: randomCondition.condition,
      icon: randomCondition.icon,
      humidity: Math.floor(Math.random() * 40) + 40,
      windSpeed: Math.floor(Math.random() * 20) + 5,
      windDirection: ["N", "NE", "E", "SE", "S", "SW", "W", "NW"][Math.floor(Math.random() * 8)],
      pressure: Math.floor(Math.random() * 50) + 1000,
      uvIndex: Math.floor(Math.random() * 10) + 1,
      visibility: Math.floor(Math.random() * 15) + 5,
      feelsLike: baseTemp + Math.floor(Math.random() * 6) - 3,
      lastUpdated: new Date().toLocaleString()
    },
    forecast: Array.from({ length: 5 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() + i);
      const dayNames = ["Today", "Tomorrow", "Friday", "Saturday", "Sunday", "Monday", "Tuesday"];
      const forecastCondition = conditions[Math.floor(Math.random() * conditions.length)];
      
      return {
        date: date.toISOString().split('T')[0],
        dayName: i < 2 ? dayNames[i] : date.toLocaleDateString('en-US', { weekday: 'long' }),
        high: baseTemp + Math.floor(Math.random() * 6) - 3,
        low: baseTemp - Math.floor(Math.random() * 8) - 2,
        condition: forecastCondition.condition,
        icon: forecastCondition.icon,
        precipitation: Math.floor(Math.random() * 100),
        windSpeed: Math.floor(Math.random() * 20) + 5,
        humidity: Math.floor(Math.random() * 40) + 40
      };
    })
  };
};