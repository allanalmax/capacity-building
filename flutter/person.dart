class Person {
  Person ({
    required this.name,
    required this.age,
    required this.height,
  });
  final String name;
  final int age;
  final double height;
  
  void printDescription() {
    print('My name is $name. I\'m $age years old, I\'m $height meters tall.');
  }
}

void main() {
  // ignore: unused_local_variable
  final person = <String, dynamic>{'name': 'Allan', 'age': 22, 'height': 1.80};
  final person1 = Person(name: 'Ben', age: 29, height: 1.98);
  final person2 = Person(name: 'Jane', age: 30, height: 1.89);
  person1.printDescription();
  person2.printDescription();
}