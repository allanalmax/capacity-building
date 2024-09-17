void main() async{
  // different stream constructors 
  final stream = Stream.fromIterable(([1, 2, 3, 4]));
  // Stream.value(10);
  // Stream.error(Exception('something went wrong'));
  // Stream.empty();
  // Stream.fromFuture(Future.delayed(Duration(seconds: 1), () => 43));
  // Stream.periodic(Duration(seconds: 1), (index) => index);

  // stream methods
  // final value = await stream.first;
  // print(value);

  // await stream.forEach((element) => print(element),);

  final doubles = stream.map((value) => value * 2).where((value) => value > 3);
  await doubles.forEach(print); 
}