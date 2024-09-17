class Weather {
  Weather({required this.weatherState, required this.minTemp, required this.maxTemp, required this.temp,});
  final String weatherState;
  final double minTemp;
  final double maxTemp;
  final double temp;
  factory Weather.fromJson(Map<String, Object?> json) => Weather(
    weatherState: json['weather_state_name'] as String,
    minTemp: json['min temp'] as double,
    maxTemp: json['max temp'] as double,
    temp: json['the_temp'] as double,
  );

  @override
  String toString() => '''

Current Temp: ${temp.toStringAsFixed(0)}C
Condition: $weatherState
Daily Min: ${minTemp.toStringAsFixed}C
Daily Max: ${maxTemp.toStringAsFixed}C
''';
}