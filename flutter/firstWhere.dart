void main() {
  const list = [1, 2, 3, 4];
  final result = firstWhere(list, (value) => value == 5, orElse: () => -1);
  print(result);
}

T firstWhere<T>(List<T> items, bool Function(T) filter, {required T Function() orElse}) {
  for (var item in items) {
    if (filter(item)) {
      return item;
    }
  }
  return orElse();
}