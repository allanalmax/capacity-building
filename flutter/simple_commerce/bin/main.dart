import 'dart:io';

import 'package:test/cart.dart';
import 'package:test/product.dart';

const allProducts = [
  Product(id: 1, name: 'apples', price: 1.60),
  Product(id: 2, name: 'bananas', price: 0.70),
  Product(id: 3, name: 'courgettes', price: 1.0),
  Product(id: 4, name: 'grapes', price: 2.00),
  Product(id: 5, name: 'mushrooms', price: 0.80),
  Product(id: 6, name: 'potatoes', price: 1.50),
];

void main() {
  final cart = Cart();
  while (true) {
    stdout.write('What do you want to do? (v)iew items, (a)dd items, (c)heckout items: ');
    final line = stdin.readLineSync();
    if (line == 'a') {
      final product = chooseProduct();
      if (product != null) {
        cart.addProduct(product);
        print(cart);
      }
    } else if (line == 'v') {
      print(cart);  
    } else if (line == 'c') {
      
    }
  }
}

Product? chooseProduct() {
  final productsList = allProducts.map((product) => product.displayName).join('\n');
  stdout.write('Available products:\n$productsList\nYourchoice: ');
  final line = stdin.readLineSync();
  for (var product in allProducts) {
    if (product.initial == line) {
        return product;
    }
  }
  print('Not found');
  return null;
}