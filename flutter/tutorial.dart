void main() {
  var restaurants = [
    {
      'name' : 'Pizza Mario',
      'cuisine' : 'Italian',
      'ratings' : [5.0, 3.5, 4.5],
    },
    {
      'name' : 'Chez Anne',
      'cuisine' : 'Indian',
      'ratings' : [5.0, 4.5, 4.0],
    },
    {
      'name' : 'Navaratna',
      'cuisine' : 'Italian',
      'ratings' : [4.0, 4.5, 4.0],
    },
  ];
  
  for (var restaurant in restaurants) {
    final ratings = restaurant['ratings'] as List<double>;
    var total = 0.0;
    for (var rating in ratings) {
      total += rating;
    }
    final avgRating = total / ratings.length;
    restaurant['avgrating'] = avgRating;
    print(restaurant);
  }
}