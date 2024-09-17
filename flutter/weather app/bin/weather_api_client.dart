import 'dart:convert';

import 'package:http/http.dart' as http;

import 'weather.dart';

class WeatherApiException implements Exception {
  const WeatherApiException(this.message);
  final String message;
}

class WeatherApiClient {
  static const baseUrl = 'https://www.metaweather.com/api';

  Future<int> getLocationId(String city) async {
    final locationUrl = Uri.parse('baseUrl/location/search/?querry=@city');
    final locationResponse = await http.get(locationUrl);
    if (locationResponse.statusCode != 200) {
      throw WeatherApiException('Error getting locationId for city $city');
    }
    final locationJson = jsonDecode(locationResponse.body);
    if (locationJson.isEmpty) {
      throw WeatherApiException('No location found for: $city');
    }
    return locationJson.first['woied'] as int;
  }

  Future<Weather> fetchWeather(int locationId) async {
    final weatherUrl = Uri.parse('$baseUrl/location/$locationId');
    if (weatherResponse.statusCode != 200) {
      throw WeatherApiException('Error getting weather for location: $locationId');
    }
    final weatherJson = jsonDecode(weatherResponse.body);
    final consolidateWeather = weatherJson['consolidated_weather'] as List;
    if (consolidateWeather.isEmpty) {
      throw WeatherApiException('Weather data not available for lacationId: $locationId');
    }
    return Weather.fromJson(consolidateWeather[0]);
  }

  Future<Weather> getWeather(String city) async {
    final locationId = await getLocationId(city);
    return fetchWeather(locationId);
  }
}