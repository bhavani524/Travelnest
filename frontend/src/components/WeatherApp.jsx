import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { 
  Search, 
  MapPin, 
  Thermometer, 
  Droplets, 
  Wind, 
  Eye, 
  Gauge,
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  Zap
} from 'lucide-react';
import { mockWeatherData, getWeatherByCity, getRandomWeather } from '../mockData/weatherData';

const WeatherIcon = ({ condition, size = 24 }) => {
  const iconProps = { size, className: "text-white drop-shadow-lg" };
  
  switch(condition) {
    case 'sunny':
      return <Sun {...iconProps} className="text-yellow-300 drop-shadow-lg" />;
    case 'partly-cloudy':
      return <Cloud {...iconProps} className="text-gray-200 drop-shadow-lg" />;
    case 'cloudy':
      return <Cloud {...iconProps} className="text-gray-300 drop-shadow-lg" />;
    case 'rainy':
      return <CloudRain {...iconProps} className="text-blue-300 drop-shadow-lg" />;
    case 'thunderstorm':
      return <Zap {...iconProps} className="text-yellow-400 drop-shadow-lg" />;
    case 'snowy':
      return <CloudSnow {...iconProps} className="text-white drop-shadow-lg" />;
    default:
      return <Sun {...iconProps} className="text-yellow-300 drop-shadow-lg" />;
  }
};

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchCity, setSearchCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Load default weather data on mount
    const defaultWeather = getRandomWeather();
    setWeatherData(defaultWeather);
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchCity.trim()) return;
    
    setIsLoading(true);
    setError('');
    
    // Simulate API call delay
    setTimeout(() => {
      const weather = getWeatherByCity(searchCity);
      if (weather) {
        setWeatherData(weather);
      } else {
        setError('City not found. Try: New York, London, Tokyo, Sydney, or Mumbai');
      }
      setIsLoading(false);
    }, 1000);
  };

  const backgroundStyle = {
    backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(147, 51, 234, 0.6) 100%), url('https://images.unsplash.com/photo-1619453986741-43fe6066a86e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxjbG91ZCUyMHNreXxlbnwwfHx8Ymx1ZXwxNzUzNTA5Nzg1fDA&ixlib=rb-4.1.0&q=85')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  };

  return (
    <div className="min-h-screen" style={backgroundStyle}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold text-white drop-shadow-2xl mb-4">
            Weather App
          </h1>
          <p className="text-xl text-white/90 drop-shadow-lg">
            Get real-time weather information for any city
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="text"
              placeholder="Enter city name..."
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
              className="pr-12 h-12 text-lg bg-white/20 backdrop-blur-sm border-white/30 text-white placeholder-white/70 focus:bg-white/30 transition-all duration-300"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="absolute right-1 top-1 h-10 px-3 bg-white/20 hover:bg-white/30 border-none transition-all duration-300"
            >
              <Search className="h-5 w-5 text-white" />
            </Button>
          </form>
          {error && (
            <p className="text-red-200 text-center mt-2 drop-shadow-lg">{error}</p>
          )}
        </div>

        {/* Weather Display */}
        {weatherData && (
          <div className="max-w-6xl mx-auto">
            {/* Main Weather Card */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 mb-8 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-white/80" />
                    <div>
                      <h2 className="text-3xl font-bold text-white">
                        {weatherData.city}
                      </h2>
                      <p className="text-white/80 text-lg">{weatherData.country}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-3">
                      <WeatherIcon condition={weatherData.icon} size={48} />
                      <div>
                        <div className="text-6xl font-bold text-white drop-shadow-lg">
                          {weatherData.temperature}°
                        </div>
                        <p className="text-white/90 text-lg capitalize">
                          {weatherData.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Weather Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <Droplets className="h-8 w-8 mx-auto mb-2 text-blue-300" />
                    <p className="text-white/80 text-sm">Humidity</p>
                    <p className="text-white text-xl font-bold">{weatherData.humidity}%</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <Wind className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                    <p className="text-white/80 text-sm">Wind Speed</p>
                    <p className="text-white text-xl font-bold">{weatherData.windSpeed} km/h</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <Gauge className="h-8 w-8 mx-auto mb-2 text-green-300" />
                    <p className="text-white/80 text-sm">Pressure</p>
                    <p className="text-white text-xl font-bold">{weatherData.pressure} hPa</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <Eye className="h-8 w-8 mx-auto mb-2 text-purple-300" />
                    <p className="text-white/80 text-sm">Visibility</p>
                    <p className="text-white text-xl font-bold">{weatherData.visibility} km</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 5-Day Forecast */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-white text-2xl">5-Day Forecast</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {weatherData.forecast.map((day, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <p className="text-white/80 text-sm font-medium mb-2">{day.day}</p>
                      <WeatherIcon condition={day.icon} size={32} />
                      <p className="text-white/80 text-sm mt-2 capitalize">{day.condition}</p>
                      <div className="mt-2">
                        <span className="text-white font-bold">{day.high}°</span>
                        <span className="text-white/60 ml-2">{day.low}°</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            <p className="text-white mt-4">Loading weather data...</p>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-white/70 text-sm">
            Note: This is a frontend demo with mock data. Real weather integration coming soon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;