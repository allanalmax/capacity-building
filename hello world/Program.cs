/* namespace HelloWorld;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("What is your name?");
        var name = Console.ReadLine();
        var currentDate = DateTime.Now;
        Console.Write($"{Environment.NewLine}Hello, {name}, on {currentDate:d} at {currentDate:t}!");
        Console.Write($"{Environment.NewLine}Press any key to exit...");
        Console.ReadKey(true);
    }
} */





/*//                                        STRINGS
       Console.WriteLine("Hello David!");

       string firstFriend = "    Maria    ";
       firstFriend = firstFriend.TrimStart();

       string secondFriend = "    Scott    ";

       string friends = $"My friends are {firstFriend} and {secondFriend.Trim()}.";
       Console.WriteLine(friends);
       Console.WriteLine(friends.Contains("Scott"));
       Console.WriteLine(friends.ToUpper());
       Console.WriteLine(friends.Length);
       Console.WriteLine(friends.StartsWith("My  "));*/

//                                          NUMBERS
// int a = 18;
// int b = 6;
// int c = a + b;
// Console.WriteLine(c);

// /*double d = 18.3; // natural type*/
// decimal d = 32.2M; // explicit type
// decimal e = 6.32M;
// decimal f = checked(d + e);
// Console.WriteLine($"The answer is {f}");

//                                          CONDITIONAL LOGIC
/* int a = 1;
int b = 6;
// int c = a + b;

// bool myTest = c > 10; // true or false

if (a + b > 10) // true
{
    Console.WriteLine("The answer is greater than 10.");
}// otherwise
else 
{
    Console.WriteLine("The answer is less than 10");
} */

/* int a = 5;
int b = 3;
int c = 4;
if ((a + b + c > 10) && (a == b)) //  AND operator
{
    Console.WriteLine("The answer is greater than 10");
    Console.WriteLine("And the first number is equal to the second");
}
else
{
    Console.WriteLine("The answer is not greater than 10");
    Console.WriteLine("Or the first number is not equal to the second");
} 

int a = 5;
int b = 3;
int c = 4;
if ((a + b + c > 10) || (a == b)) // OR operator
{
    Console.WriteLine("The answer is greater than 10");
    Console.WriteLine("Or the first number is equal to the second");
}
else
{
    Console.WriteLine("The answer is not greater than 10");
    Console.WriteLine("And the first number is not equal to the second");
} */

//                                  LOOPS
//int counter = 0;
/* while (counter < 5)      // while loop
{
    Console.WriteLine(counter);
    counter++;
} */

/* do           // do while loop
{
    Console.WriteLine(counter);
    counter ++;
}
while (counter > 5); */

/* for (int i = 0; // initialize    //for loops
    i < 5; // conditional
    i++) // iteration
{
    Console.WriteLine(i);
} */

//                                  LISTS
/*List<string> names = ["Felipe", "Allan", "Ana"]; //how to initialise a list
//names.Sort();
//namespace.Add("James"); // how to add in List<T>

*//*string[] names = { "Allan", "Ana", "Felipe" }; //how to initialise an array
names = [.. names, "James"];*//*

foreach (var name in names)
{
    Console.WriteLine($"hello {name.ToUpper()}!");
}*/

/*Console.WriteLine(names[0]);
Console.WriteLine(names[3]);
Console.WriteLine(names[names.Count-1]);
Console.WriteLine(names[^1]);*/

//Lists with numbers
/*List<int> numbers = [12, 34, 54, 23, 94];

Console.WriteLine($"23 is at the index of: {numbers.IndexOf(23)}");
numbers.Sort();
Console.WriteLine($"23 is at the index of: {numbers.IndexOf(23)}");

foreach (var number in numbers) 
{
    Console.WriteLine($"{number}");
}*/

//                                                            LINQ 
// Specify the data source.
/*List<int> scores = [97, 92, 81, 60];

for (int i = 0; i < scores.Count(); i++) // manual querying in lists (imperative programming)
{
    if (scores[i] > 0)
    {
        Console.WriteLine($"Found a score over  80: {scores[i]}");
    }
}*/

/*List<int> scores = [97, 92, 95, 38, 10, 81, 87];
// Define the query expression.
IEnumerable<int> scoreQuery = // declarative programming  // Using LINQ
    from score in scores
    where score > 80
    orderby score descending
    select score;

var scoreQuery2 = scores.Where(s => s > 80).OrderByDescending(s => s);  // manual querying

List<int> myScores = scoreQuery.ToList();

foreach (var score in myScores)
{
    //Console.Write($"{Environment.NewLine}{score}");
    Console.WriteLine(score);
}*/

// Execute the query.
/*foreach (string s in scoreQuery)
{
    Console.WriteLine(s);
}*/

// Output: 97 92 81

// OOP

var p1 = new Person("Allan", "Amanya", new DateOnly(1909, 1, 1));
var p2 = new Person("John", "Doe", new DateOnly(1900, 1, 1));

p1.Pets.Add(new Dog("Johny"));
p1.Pets.Add(new Dog("Mike"));

p2.Pets.Add(new Cat("Cissy"));

List<Person> people = [p1, p2];

foreach (var person in people)
{
    Console.WriteLine($"{person}");

    foreach (var pet in person.Pets)
    {
        Console.WriteLine($"    {pet}");
    }
}
 
/*public class Person // old way
{
    public Person(string first, string last, DateOnly bd)
    {
        firstname = first;
        lastname = last;
        birthday = bd;
    }

    private string firstname;

    private string lastname;

    private DateOnly birthday;
}*/

public class Person(string firstname, string lastname, DateOnly birthday) // new way (primary constructor)
{
    public string First { get; } = firstname; //property

    public string Last { get; } = lastname;

    public DateOnly Birthday { get; } = birthday;

    public List<Pet> Pets { get; } = new();

    public override string ToString()  // overrides the abstract ToString method to print the actual names
    {
        return $"{First} {Last}";
    }
}

public abstract class Pet(string firstname) // base(parent) class
{
    public string First { get; } = firstname;

    public abstract string MakeNoise();

    public override string ToString()  // overrides the abstract ToString method to print the actual names
    {
        return $"{First}, I am a {GetType().Name} and I {MakeNoise()}"; //retrieves the name of the pet
    }
}

public class Cat(string firstname) : Pet(firstname) //inherits from the Pet class (derived class)
{
    public override string MakeNoise() => "meow"; //overrides the abstract MakeNoise method
}

public class Dog(string firstname) : Pet(firstname)
{
    public override string MakeNoise() => "bark";
}