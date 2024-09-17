class Fraction {
  Fraction(this.numerator, this.denominator) {
    if (denominator == 0) {
      throw UnsupportedError('Integer division by zero exception');
    }
  }
  final int numerator;
  final int denominator;

  double get value => numerator / denominator;
}

void testFraction() {
  try {
    final f = Fraction(3, 5);
    print(f.value);
  } on UnsupportedError catch (e) {
    print(e);
    rethrow;
  }on Exception catch (e) {
    print(e);
  } finally {
    print('Test fraction done');
  }
}

void main() {
  testFraction();
  print('Done');
}