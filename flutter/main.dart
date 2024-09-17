void main() {
  print('Hello, Dart World!');

  int myNumber = 39;
  print(myNumber);

  double myDouble = 3.14;
  print(myDouble);

  bool myVariable = true;
  print(myVariable);

  String myString = 'Hello';
  print(myString);

  print('$myString World');

  const myAge = 20;
  print('I am $myAge years old');

  final today = DateTime.now();
  print(today);

  int ?myVar;
  print('ten: $myVar');

  myVar = 10;
  print('ten: $myVar');

  int age = 20;

  if (age == 20) {
    print('Correct');
  } else {
    print('Wrong');
  }
}