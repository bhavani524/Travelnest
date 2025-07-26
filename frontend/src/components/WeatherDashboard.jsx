import React, { useState, useEffect } from 'react';
import { Search, MapPin, Wind, Droplets, Eye, Thermometer, Gauge, Sun } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { mockWeatherData, mockCities, getMockWeatherData } from '../mock';

const WeatherDashboard = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentLocation, setCurrentLocation] = useState('New York');

  useEffect(() => {
    // Simulate auto-detect current location
    handleLocationDetection();
  }, []);

  const handleLocationDetection = () => {
    setLoading(true);
    // Simulate geolocation API call
    setTimeout(() => {
      const weatherData = getMockWeatherData('New York');
      setCurrentWeather(weatherData.current);
      setForecast(weatherData.forecast);
      setCurrentLocation('New York');
      setLoading(false);
    }, 1000);
  };

  const handleSearch = (city) => {
    setLoading(true);
    setShowSuggestions(false);
    setSearchQuery(city);
    
    // Simulate API call delay
    setTimeout(() => {
      const weatherData = getMockWeatherData(city);
      setCurrentWeather(weatherData.current);
      setForecast(weatherData.forecast);
      setCurrentLocation(city);
      setLoading(false);
    }, 800);
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.length > 0) {
      const filtered = mockCities.filter(city => 
        city.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCities(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      handleSearch(searchQuery.trim());
    }
  };

  const getWeatherGradient = (condition) => {
    switch (condition?.toLowerCase()) {
      case 'sunny':
      case 'clear':
        return 'from-orange-400 via-yellow-500 to-orange-600';
      case 'partly cloudy':
        return 'from-blue-400 via-blue-500 to-blue-600';
      case 'cloudy':
      case 'overcast':
        return 'from-gray-400 via-gray-500 to-gray-600';
      case 'rainy':
      case 'light rain':
        return 'from-blue-600 via-blue-700 to-blue-800';
      case 'thunderstorms':
        return 'from-purple-600 via-purple-700 to-purple-800';
      default:
        return 'from-blue-400 via-blue-500 to-blue-600';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-xl font-semibold">Loading weather data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-black text-white mb-2 tracking-tight">
            Weather
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Pro
            </span>
          </h1>
          <p className="text-blue-100 text-lg font-medium">Your personal weather companion</p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search for cities worldwide..."
              value={searchQuery}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              className="pl-12 pr-20 py-6 text-lg bg-white/10 backdrop-blur-lg border-white/20 text-white placeholder-gray-300 rounded-2xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
            />
            <Button
              onClick={handleLocationDetection}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <MapPin className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Search Suggestions */}
          {showSuggestions && filteredCities.length > 0 && (
            <div className="absolute z-10 w-full mt-2 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 max-h-60 overflow-y-auto">
              {filteredCities.slice(0, 8).map((city, index) => (
                <div
                  key={index}
                  onClick={() => handleSearch(city)}
                  className="px-4 py-3 hover:bg-white/20 cursor-pointer text-white transition-all duration-200 first:rounded-t-xl last:rounded-b-xl"
                >
                  {city}
                </div>
              ))}
            </div>
          )}
        </div>

        {currentWeather && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Current Weather Card */}
            <div className="lg:col-span-2">
              <Card className={`bg-gradient-to-br ${getWeatherGradient(currentWeather.condition)} border-0 shadow-2xl transform hover:scale-105 transition-all duration-300`}>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-1">{currentWeather.location}</h2>
                      <p className="text-white/80 text-lg">{currentWeather.lastUpdated}</p>
                    </div>
                    <div className="text-8xl animate-pulse">
                      {currentWeather.icon}
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <span className="text-8xl font-black text-white mr-4">
                      {currentWeather.temperature}°
                    </span>
                    <div>
                      <p className="text-2xl text-white font-semibold mb-1">
                        {currentWeather.condition}
                      </p>
                      <p className="text-white/80 text-lg">
                        Feels like {currentWeather.feelsLike}°
                      </p>
                    </div>
                  </div>

                  {/* Weather Details Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <Wind className="h-6 w-6 text-white mx-auto mb-2" />
                      <p className="text-white/80 text-sm">Wind</p>
                      <p className="text-white font-semibold">{currentWeather.windSpeed} km/h</p>
                      <p className="text-white/60 text-xs">{currentWeather.windDirection}</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <Droplets className="h-6 w-6 text-white mx-auto mb-2" />
                      <p className="text-white/80 text-sm">Humidity</p>
                      <p className="text-white font-semibold">{currentWeather.humidity}%</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <Gauge className="h-6 w-6 text-white mx-auto mb-2" />
                      <p className="text-white/80 text-sm">Pressure</p>
                      <p className="text-white font-semibold">{currentWeather.pressure} hPa</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <Eye className="h-6 w-6 text-white mx-auto mb-2" />
                      <p className="text-white/80 text-sm">Visibility</p>
                      <p className="text-white font-semibold">{currentWeather.visibility} km</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* UV Index & Additional Info */}
            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Sun className="h-5 w-5 mr-2" />
                    UV Index
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-bold text-white">{currentWeather.uvIndex}</span>
                    <Badge className={`${currentWeather.uvIndex <= 2 ? 'bg-green-500' : 
                                              currentWeather.uvIndex <= 5 ? 'bg-yellow-500' : 
                                              currentWeather.uvIndex <= 7 ? 'bg-orange-500' : 'bg-red-500'} text-white`}>
                      {currentWeather.uvIndex <= 2 ? 'Low' : 
                       currentWeather.uvIndex <= 5 ? 'Moderate' : 
                       currentWeather.uvIndex <= 7 ? 'High' : 'Very High'}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Thermometer className="h-5 w-5 mr-2" />
                    Today's Highlights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Feels like</span>
                    <span className="text-white font-semibold">{currentWeather.feelsLike}°</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Wind direction</span>
                    <span className="text-white font-semibold">{currentWeather.windDirection}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Pressure</span>
                    <span className="text-white font-semibold">{currentWeather.pressure} hPa</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* 5-Day Forecast */}
        {forecast.length > 0 && (
          <Card className="mt-8 bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white text-2xl font-bold">5-Day Forecast</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {forecast.map((day, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <p className="text-white font-semibold text-lg mb-2">{day.dayName}</p>
                    <div className="text-4xl mb-3">{day.icon}</div>
                    <p className="text-white/80 text-sm mb-2">{day.condition}</p>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-bold text-lg">{day.high}°</span>
                      <span className="text-white/60">{day.low}°</span>
                    </div>
                    <div className="space-y-1 text-xs text-white/60">
                      <div className="flex items-center justify-center">
                        <Droplets className="h-3 w-3 mr-1" />
                        {day.precipitation}%
                      </div>
                      <div className="flex items-center justify-center">
                        <Wind className="h-3 w-3 mr-1" />
                        {day.windSpeed} km/h
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default WeatherDashboard;