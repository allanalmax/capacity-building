mixin Breathing {
  void breathe() => print('breathe');
}

mixin Swimming {
  void swim() => print('swimming');
}

class Animal with Breathing{

}

class Plant with Breathing{

}

class Fish extends Animal with Swimming {

}

class Human extends Animal with Swimming {

}

void main() {
  final fish = Fish();
  fish.swim();
  final human = Human();
  human.swim();
}