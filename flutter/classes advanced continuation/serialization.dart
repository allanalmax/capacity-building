class Person {
  Person({required this.name, required this.age});
  final String name;
  final int age;
  
  factory Person.fromJson(Map<String, Object> json) {
    final name = json['name'];
    final age = json['age'];
      if (name is String && age is int) {
        // print('My name is $name, I am $age years old');
        return Person(name: name, age: age);
      }
      throw UnsupportedError('Could not read name or age');
  }
  
  Map<String, Object> toJson() => {
    'name': name,
    'age': age,
  };
}

void main() {
  final person = Person.fromJson({
    'name': 'Andrea',
    'age': 36,
  });
  final json = person.toJson();
  print(json);
}