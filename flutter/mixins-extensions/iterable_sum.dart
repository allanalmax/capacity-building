extension IterableX<T extends num> on Iterable<T> {
  T sum() => reduce((value, element) => (value + element) as T);
}

void main() {
  // ignore: unused_local_variable
  int sum1 = [1, 2, 4, 5].sum();
  double sum = [1.0, 2.0, 3.0, 4.0].sum();
  print(sum);
}