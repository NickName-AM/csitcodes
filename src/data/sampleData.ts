import { CodeSnippet, Subject, Semester } from "@/types";

export const sampleCodeSnippets: CodeSnippet[] = [
  // Semester 1
  {
    id: "1",
    title: "Hello World in C",
    description: "Basic C program to print Hello World",
    language: "c",
    code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
    subject: "Programming in C",
    semester: 1,
    tags: ["basic", "stdio", "main"],
    createdAt: "2025-09-11",
  },
  {
    id: "2",
    title: "Factorial Calculator (Recursive)",
    description: "Calculate factorial using recursion",
    language: "c",
    code: `#include <stdio.h>

int factorial(int n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

int main() {
    int num = 5;
    printf("Factorial of %d = %d\\n", num, factorial(num));
    return 0;
}`,
    subject: "Programming in C",
    semester: 1,
    tags: ["recursion", "factorial", "function"],
    createdAt: "2025-09-11",
  },
  {
    id: "3",
    title: "Factorial Calculator (Iterative)",
    description: "Calculate factorial using iterative process",
    language: "c",
    code: `#include <stdio.h>

int factorial(int n) {
    int fact = 1;
    for (int i = 1; i <= n; i++)
        fact *= i;
    return fact;
}

int main() {
    int n = 5;
    printf("Factorial of %d = %d\\n", n, factorial(n));
    return 0;
}
`,
    subject: "Programming in C",
    semester: 1,
    tags: ["iterative", "factorial", "function"],
    createdAt: "2025-09-11",
  },
  {
    id: "4",
    title: "Escape Sequence",
    description: "Demonstrate the use of escape sequences",
    language: "c",
    code: `#include <stdio.h>

int main() {
  printf("Name:\\tUttam\\nCollege:\\tNagarjuna\\n");
  return 0;
}
`,
    subject: "Programming in C",
    semester: 1,
    tags: ["escapesequence"],
    createdAt: "2025-09-15",
  },
  {
    id: "5",
    title: "Fibonacci Sequence (Iterative)",
    description: "Calculate n fibonacci sequences.",
    language: "c",
    code: `#include <stdio.h>

void fibonacci_iterative(int n) {
    int a = 0, b = 1, next;
    printf("Fibonacci Series (Iterative): ");
    for (int i = 0; i < n; i++) {
        printf("%d ", a);
        next = a + b;
        a = b;
        b = next;
    }
    printf("\\n");
}

int main() {
    int n = 10;
    fibonacci_iterative(n);
    return 0;
}`,
    subject: "Programming in C",
    semester: 1,
    tags: ["fibonacci", "function", "iterative"],
    createdAt: "2025-09-15",
  },
  {
    id: "6",
    title: "Fibonacci Sequence (Recursive)",
    description: "Calculate nth item in fibonacci sequences using recursion.",
    language: "c",
    code: `#include <stdio.h>

int fibonacci_recursive(int n) {
    if (n <= 1) return n;
    return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2);
}

int main() {
    int n = 10;
    printf("Fibonacci Series (Recursive): ");
    for (int i = 0; i < n; i++) {
        printf("%d ", fibonacci_recursive(i));
    }
    printf("\\n");
    return 0;
}
`,
    subject: "Programming in C",
    semester: 1,
    tags: ["fibonacci", "function", "recursion"],
    createdAt: "2025-09-15",
  },
  {
    id: "7",
    title: "Prime or Composite",
    description: "Check if the given number is prime or composite",
    language: "c",
    code: `#include <stdio.h>

void check_prime(int n) {
    if (n <= 1) {
        printf("%d is neither prime nor composite.\\n", n);
        return;
    }
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            printf("%d is composite.\\n", n);
            return;
        }
    }
    printf("%d is prime.\\n", n);
}

int main() {
    int num = 29;
    check_prime(num);
    return 0;
}`,
    subject: "Programming in C",
    semester: 1,
    tags: ["prime", "composite", "function", "loop", "controlflow"],
    createdAt: "2025-09-15",
  },
  {
    id: "8",
    title: "Creating struct",
    description: "Demonstrate the usage of struct",
    language: "c",
    code: `#include <stdio.h>

struct Student {
    char name[50];
    int roll;
    float marks;
};

void display_student(struct Student s) {
    printf("Student Info:\\n");
    printf("Name: %s\\n", s.name);
    printf("Roll: %d\\n", s.roll);
    printf("Marks: %.2f\\n", s.marks);
}

int main() {
    struct Student s1 = {"Alice", 101, 89.5};
    display_student(s1);
    return 0;
}
`,
    subject: "Programming in C",
    semester: 1,
    tags: ["struct", "function"],
    createdAt: "2025-09-15",
  },
  {
    id: "9",
    title: "Largest element in matrix",
    description: "Largest element in each row of matrix",
    language: "c",
    code: `#include <stdio.h>

void largest_in_rows(int p, int q, int mat[p][q]) {
    for (int i = 0; i < p; i++) {
        int max = mat[i][0];
        for (int j = 1; j < q; j++) {
            if (mat[i][j] > max)
                max = mat[i][j];
        }
        printf("Largest in row %d = %d\\n", i + 1, max);
    }
}

int main() {
    int mat[3][3] = {{3, 5, 7}, {2, 9, 1}, {6, 4, 8}};
    largest_in_rows(3, 3, mat);
    return 0;
}
`,
    subject: "Programming in C",
    semester: 1,
    tags: ["array", "multidimensionalarray", "function"],
    createdAt: "2025-09-15",
  },
  {
    id: "10",
    title: "Palindrome (Iterative)",
    description: "Check if the string is palindrome",
    language: "c",
    code: `#include <stdio.h>
#include <string.h>

int is_palindrome_iterative(char str[]) {
    int i = 0, j = strlen(str) - 1;
    while (i < j) {
        if (str[i] != str[j])
            return 0;
        i++;
        j--;
    }
    return 1;
}

int main() {
    char str[] = "madam";
    if (is_palindrome_iterative(str))
        printf("%s is a palindrome.\\n", str);
    else
        printf("%s is not a palindrome.\\n", str);
    return 0;
}
`,
    subject: "Programming in C",
    semester: 1,
    tags: ["array", "palindrome", "function", "iterative"],
    createdAt: "2025-09-15",
  },
  {
    id: "10",
    title: "Palindrome (Recursive)",
    description: "Check if the string is palindrome using recursion",
    language: "c",
    code: `#include <stdio.h>
#include <string.h>

int is_palindrome_recursive(char str[], int start, int end) {
    if (start >= end)
        return 1;
    if (str[start] != str[end])
        return 0;
    return is_palindrome_recursive(str, start + 1, end - 1);
}

int main() {
    char str[] = "level";
    if (is_palindrome_recursive(str, 0, strlen(str) - 1))
        printf("%s is a palindrome.\\n", str);
    else
        printf("%s is not a palindrome.\\n", str);
    return 0;
}
`,
    subject: "Programming in C",
    semester: 1,
    tags: ["array", "palindrome", "function", "recursion"],
    createdAt: "2025-09-15",
  },
  {
    id: "11",
    title: "Sum of 10 even numbers",
    description: "Calculate the sum of first 10 even numbers",
    language: "c",
    code: `#include <stdio.h>

int sum_even_numbers(int n) {
    int sum = 0;
    for (int i = 1; i <= n; i++)
        sum += 2 * i;
    return sum;
}

int main() {
    printf("Sum of first 10 even numbers = %d\\n", sum_even_numbers(10));
    return 0;
}
`,
    subject: "Programming in C",
    semester: 1,
    tags: ["sum", "evennumber", "function"],
    createdAt: "2025-09-15",
  },
  {
    id: "12",
    title: "Dynamic Memory Allocation",
    description: "Demonstrate dynamic memory allocation",
    language: "c",
    code: `#include <stdio.h>
#include <stdlib.h>

void demo_dynamic_memory(int n) {
    int *arr = (int *)malloc(n * sizeof(int));
    if (arr == NULL) {
        printf("Memory not allocated!\\n");
        return;
    }
    for (int i = 0; i < n; i++) {
        arr[i] = i + 1;
    }
    printf("Dynamic Array Elements: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    free(arr);
}

int main() {
    demo_dynamic_memory(5);
    return 0;
}
`,
    subject: "Programming in C",
    semester: 1,
    tags: ["dynamicmemoryallocation", "malloc", "function"],
    createdAt: "2025-09-15",
  },
  {
    id: "13",
    title: "Array Sorting",
    description: "Sort an array of 10 elements (Uses bubble sort algorithm)",
    language: "c",
    code: `#include <stdio.h>

void bubble_sort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main() {
    int arr[10] = {5, 2, 9, 1, 6, 7, 3, 8, 10, 4};
    int n = 10;

    bubble_sort(arr, n);

    printf("Sorted Array (Bubble Sort): ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");

    return 0;
}
`,
    subject: "Programming in C",
    semester: 1,
    tags: ["sorting", "bubblesort", "function"],
    createdAt: "2025-09-15",
  },


  // (GAP IN `id` FOR LATER ADDITION)
  // SECOND SEMESTER 

  {
    id: "24",
    title: "Constructor and Destructor",
    description: "Show the usage of constructor and destructor in c++",
    language: "cpp",
    code: `#include <iostream>
using namespace std;

class MyClass {
public:
    // Constructor
    MyClass() {
        cout << "Constructor called: Object created." << endl;
    }

    // Destructor
    ~MyClass() {
        cout << "Destructor called: Object destroyed." << endl;
    }

    void display() {
        cout << "Hello from MyClass!" << endl;
    }
};

int main() {
    cout << "Entering main function." << endl;

    MyClass obj;  // Constructor will be called here
    obj.display();

    cout << "Exiting main function." << endl;

    return 0;
    // Destructor will be called here (when obj goes out of scope)
}`,
    subject: "oop",
    semester: 2,
    tags: ["constructor", "destructor", "object"],
    createdAt: "2025-09-18",
  },
  {
    id: "25",
    title: "Operator Overloading",
    description: "Overload `+` operator for a Complex Number Class",
    language: "cpp",
    code: `#include <iostream>
using namespace std;

class Complex {
private:
    float real, imag;

public:
    Complex(float r = 0, float i = 0) : real(r), imag(i) {}

    // Overload + operator
    Complex operator+(const Complex& obj) {
        return Complex(real + obj.real, imag + obj.imag);
    }

    // Display function
    void display() {
        cout << real << " + " << imag << "i" << endl;
    }
};

int main() {
    Complex c1(2.5, 3.5);
    Complex c2(1.5, 4.5);

    Complex c3 = c1 + c2;

    cout << "Result: ";
    c3.display();

    return 0;
}`,
    subject: "oop",
    semester: 2,
    tags: ["operatoroverloading", "complexnumbers"],
    createdAt: "2025-09-18",
  },
  {
    id: "26",
    title: "Function Overloading",
    description: "Calculate the area of different shapes using overloaded functions",
    language: "cpp",
    code: `#include <iostream>
using namespace std;

// Area of circle
float area(float radius) {
    return 3.14f * radius * radius;
}

// Area of rectangle
int area(int length, int width) {
    return length * width;
}

int main() {
    cout << "Area of circle (r = 5): " << area(5.0f) << endl;
    cout << "Area of rectangle (l = 4, w = 6): " << area(4, 6) << endl;
    return 0;
}`,
    subject: "oop",
    semester: 2,
    tags: ["functionoverloading", "areaofcircle", "areaofrectangle"],
    createdAt: "2025-09-18",
  },
  {
    id: "27",
    title: "Inline Function",
    description: "Calculate the cube of a number using an inline function",
    language: "cpp",
    code: `#include <iostream>
using namespace std;

inline int cube(int x) {
    return x * x * x;
}

int main() {
    cout << "Cube of 3: " << cube(3) << endl;
    cout << "Cube of 5: " << cube(5) << endl;
    return 0;
}`,
    subject: "oop",
    semester: 2,
    tags: ["inlinefunction", "cubeofnumber"],
    createdAt: "2025-09-18",
  },
  {
    id: "28",
    title: "Default arguments",
    description: "Display employee details with default department",
    language: "cpp",
    code: `#include <iostream>
using namespace std;

void showDetails(string name, string department = "General") {
    cout << "Name: " << name << ", Department: " << department << endl;
}

int main() {
    showDetails("Alice", "HR");
    showDetails("Bob"); // Uses default argument
    return 0;
}`,
    subject: "oop",
    semester: 2,
    tags: ["defaultarguments", "defaultparameters"],
    createdAt: "2025-09-18",
  },
  {
    id: "29",
    title: "Pass by Reference",
    description: "Swap two numbers using pass by reference",
    language: "cpp",
    code: `#include <iostream>
using namespace std;

void swap(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int x = 10, y = 20;
    cout << "Before swap: x = " << x << ", y = " << y << endl;
    swap(x, y);
    cout << "After swap: x = " << x << ", y = " << y << endl;
    return 0;
}`,
    subject: "oop",
    semester: 2,
    tags: ["passbyreference", "swapnumbers"],
    createdAt: "2025-09-18",
  },
  {
    id: "30",
    title: "Return by Reference",
    description: "Return reference to array element and modify it",
    language: "cpp",
    code: `#include <iostream>
using namespace std;

int& getElement(int arr[], int index) {
    return arr[index]; // Returning by reference
}

int main() {
    int numbers[5] = {1, 2, 3, 4, 5};
    
    cout << "Before: " << numbers[2] << endl;
    getElement(numbers, 2) = 99; // Modify directly via reference
    cout << "After: " << numbers[2] << endl;

    return 0;
}`,
    subject: "oop",
    semester: 2,
    tags: ["returnbyreference", "arraysearch"],
    createdAt: "2025-09-18",
  },
  {
    id: "31",
    title: "Parameterized Constructor",
    description: "Initialize object with user-defined values using a parameterized constructor",
    language: "cpp",
    code: `#include <iostream>
using namespace std;

class Person {
private:
    string name;
    int age;

public:
    // Parameterized constructor
    Person(string n, int a) {
        name = n;
        age = a;
    }

    void display() {
        cout << "Name: " << name << ", Age: " << age << endl;
    }
};

int main() {
    Person p1("Alice", 30);
    Person p2("Bob", 25);

    p1.display();
    p2.display();

    return 0;
}`,
    subject: "oop",
    semester: 2,
    tags: ["parameterizedconstructor", "constructor"],
    createdAt: "2025-09-18",
  },
  {
    id: "32",
    title: "Copy Constructor",
    description: "Create a copy of an object using a copy constructor",
    language: "cpp",
    code: `#include <iostream>
using namespace std;

class Book {
private:
    string title;
    int pages;

public:
    // Parameterized constructor
    Book(string t, int p) {
        title = t;
        pages = p;
    }

    // Copy constructor
    Book(const Book &b) {
        title = b.title;
        pages = b.pages;
    }

    void display() {
        cout << "Title: " << title << ", Pages: " << pages << endl;
    }
};

int main() {
    Book b1("C++ Basics", 200);
    Book b2 = b1;  // Copy constructor is called

    b1.display();
    b2.display();

    return 0;
}
`,
    subject: "oop",
    semester: 2,
    tags: ["copyconstructor", "constructor"],
    createdAt: "2025-09-18",
  },
  {
    id: "33",
    title: "Inheritance (with access specifiers)",
    description: "Demonstrate public, protected, and private access through inheritance",
    language: "cpp",
    code: `#include <iostream>
using namespace std;

// Base class
class Animal {
public:
    void sound() {
        cout << "Animal makes sound" << endl;
    }

protected:
    void breathe() {
        cout << "Animal breathes" << endl;
    }

private:
    void eat() {
        cout << "Animal eats (private)" << endl;
    }
};

// Derived class
class Dog : public Animal {
public:
    void show() {
        sound();    // public → accessible
        breathe();  // protected → accessible in derived
        // eat();   // private → not accessible
    }
};

int main() {
    Dog d;
    d.show();
    d.sound(); // Accessible
    // d.breathe(); // Not accessible from outside
    return 0;
}`,
    subject: "oop",
    semester: 2,
    tags: ["accessspecifiers", "inheritance"],
    createdAt: "2025-09-18",
  },
  {
    id: "34",
    title: "Aggregation",
    description: "Use one class object inside another (has-a relationship)",
    language: "cpp",
    code: `#include <iostream>
using namespace std;

// Class Address
class Address {
public:
    string city;
    string country;

    Address(string c, string cn) {
        city = c;
        country = cn;
    }

    void display() {
        cout << "City: " << city << ", Country: " << country << endl;
    }
};

// Class Student (has-a Address)
class Student {
private:
    string name;
    Address addr; // Aggregation

public:
    Student(string n, Address a) : name(n), addr(a) {}

    void show() {
        cout << "Student Name: " << name << endl;
        addr.display();
    }
};

int main() {
    Address a("Delhi", "India");
    Student s("Raj", a);
    s.show();
    return 0;
}`,
    subject: "oop",
    semester: 2,
    tags: ["aggregation"],
    createdAt: "2025-09-18",
  },
  {
    id: "35",
    title: "Virtual Function",
    description: "Demonstrate function overriding using virtual functions",
    language: "cpp",
    code: `#include <iostream>
using namespace std;

class Base {
public:
    virtual void show() {
        cout << "Base class show()" << endl;
    }
};

class Derived : public Base {
public:
    void show() override {
        cout << "Derived class show()" << endl;
    }
};

int main() {
    Base* ptr;
    Derived d;
    ptr = &d;

    ptr->show();  // Calls Derived class show() due to virtual function

    return 0;
}`,
    subject: "oop",
    semester: 2,
    tags: ["virtualfunction"],
    createdAt: "2025-09-18",
  },
  {
    id: "36",
    title: "Late binding (Runtime polymorphism)",
    description: "Illustrate late binding using a base class pointer and overridden function",
    language: "cpp",
    code: `#include <iostream>
using namespace std;

class Animal {
public:
    virtual void speak() {
        cout << "Animal speaks" << endl;
    }
};

class Dog : public Animal {
public:
    void speak() override {
        cout << "Dog barks" << endl;
    }
};

int main() {
    Animal* a;
    Dog d;
    a = &d;

    a->speak();  // Late binding: Dog's speak() is called at runtime

    return 0;
}
`,
    subject: "oop",
    semester: 2,
    tags: ["latebinding", "runtimepolymorphism"],
    createdAt: "2025-09-18",
  },
  {
    id: "37",
    title: "Pure Virtual Function (Abstract Class)",
    description: "Create an abstract class with a pure virtual function",
    language: "cpp",
    code: `#include <iostream>
using namespace std;

class Shape {
public:
    virtual void draw() = 0;  // Pure virtual function
};

class Circle : public Shape {
public:
    void draw() override {
        cout << "Drawing Circle" << endl;
    }
};

int main() {
    // Shape s;  // Cannot instantiate abstract class
    Circle c;
    c.draw();   // Calls derived class implementation

    return 0;
}`,
    subject: "oop",
    semester: 2,
    tags: ["purevirtualfunction", "abstractclass"],
    createdAt: "2025-09-18",
  },
  {
    id: "38",
    title: "Friend Function",
    description: "Access private data using a friend function",
    language: "cpp",
    code: `#include <iostream>
using namespace std;

class Box {
private:
    int length;

public:
    Box(int l) : length(l) {}

    friend void printLength(Box b);  // Friend function declaration
};

// Friend function definition
void printLength(Box b) {
    cout << "Length of box: " << b.length << endl;
}

int main() {
    Box b(10);
    printLength(b);  // Accesses private member
    return 0;
}`,
    subject: "oop",
    semester: 2,
    tags: ["friendfunction"],
    createdAt: "2025-09-18",
  },
  {
    id: "39",
    title: "Static Function",
    description: "Use a static member function to access static data",
    language: "cpp",
    code: `#include <iostream>
using namespace std;

class Counter {
private:
    static int count;

public:
    Counter() {
        count++;
    }

    static void showCount() {
        cout << "Object count: " << count << endl;
    }
};

// Definition of static member
int Counter::count = 0;

int main() {
    Counter c1, c2, c3;
    Counter::showCount();  // Access without object

    return 0;
}`,
    subject: "oop",
    semester: 2,
    tags: ["staticfunction"],
    createdAt: "2025-09-18",
  },
  {
    id: "40",
    title: "Function Template",
    description: "Create a generic function to find the maximum of two values",
    language: "cpp",
    code: `#include <iostream>
using namespace std;

// Function template
template <typename T>
T getMax(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    cout << "Max of 10 and 20: " << getMax(10, 20) << endl;
    cout << "Max of 3.5 and 2.1: " << getMax(3.5, 2.1) << endl;
    cout << "Max of 'A' and 'Z': " << getMax('A', 'Z') << endl;

    return 0;
}`,
    subject: "oop",
    semester: 2,
    tags: ["functiontemplate", "maximum"],
    createdAt: "2025-09-18",
  },
  {
    id: "41",
    title: "Class Template",
    description: "Create a generic class to store and display two values of any type",
    language: "cpp",
    code: `#include <iostream>
using namespace std;

// Class template
template <class T>
class Pair {
private:
    T a, b;

public:
    Pair(T x, T y) : a(x), b(y) {}

    void display() {
        cout << "Values: " << a << " and " << b << endl;
    }
};

int main() {
    Pair<int> intPair(10, 20);
    Pair<string> stringPair("Hello", "World");

    intPair.display();
    stringPair.display();

    return 0;
}`,
    subject: "oop",
    semester: 2,
    tags: ["classtemplate"],
    createdAt: "2025-09-18",
  },
  {
    id: "42",
    title: "Exception Handling",
    description: "Handle divide-by-zero exception using try-catch block",
    language: "cpp",
    code: `#include <iostream>
using namespace std;

int divide(int a, int b) {
    if (b == 0)
        throw runtime_error("Division by zero not allowed");
    return a / b;
}

int main() {
    int x = 10, y = 0;

    try {
        int result = divide(x, y);
        cout << "Result: " << result << endl;
    } catch (const exception& e) {
        cout << "Exception caught: " << e.what() << endl;
    }

    return 0;
}`,
    subject: "oop",
    semester: 2,
    tags: ["exceptionhandling", "divisionbyzero"],
    createdAt: "2025-09-18",
  },
  {
    id: "43",
    title: "File Handling",
    description: "Write to and read from a file using C++ file handling",
    language: "cpp",
    code: `#include <iostream>
#include <fstream>  // Required for file handling
using namespace std;

int main() {
    string filename = "data.txt";

    // ----------- Writing to a file -----------
    ofstream outFile(filename);  // Create and open a file for writing
    if (!outFile) {
        cerr << "Error creating file!" << endl;
        return 1;
    }

    outFile << "Hello, File Handling in C++!\\n";
    outFile << "This is a second line.\\n";
    outFile.close();  // Close the file after writing
    cout << "Data written to file successfully.\\n";

    // ----------- Reading from a file -----------
    ifstream inFile(filename);  // Open the file for reading
    if (!inFile) {
        cerr << "Error opening file for reading!" << endl;
        return 1;
    }

    string line;
    cout << "\\nContents of the file:\\n";
    while (getline(inFile, line)) {
        cout << line << endl;  // Read and print line by line
    }
    inFile.close();  // Close the file after reading

    return 0;
}`,
    subject: "oop",
    semester: 2,
    tags: ["filehandling"],
    createdAt: "2025-09-18",
  },
];

export const subjects: Subject[] = [
  // Semester 1
  {
    id: "s1-1",
    name: "Programming in C",
    code: "CS101",
    description: "Introduction to programming using C language",
    semester: 1,
  },
  // {
  //   id: "s1-2",
  //   name: "Mathematics I",
  //   code: "MATH101",
  //   description: "Calculus and linear algebra fundamentals",
  //   semester: 1,
  // },
  // {
  //   id: "s1-3",
  //   name: "Digital Logic",
  //   code: "CS102",
  //   description: "Boolean algebra and digital circuits",
  //   semester: 1,
  // },

  // Semester 2
  // {
  //   id: "s2-1",
  //   name: "Discrete Structure",
  //   code: "CS201",
  //   description: "Logic, proofs, sets, relations, functions, counting, and probability",
  //   semester: 2,
  // },
  {
    id: "s2-2",
    name: "Object Oriented Programming",
    code: "CS202",
    description: "OOP concepts using C++",
    semester: 2,
  },
  {
    id: "s2-3",
    name: "Microprocessor",
    code: "CS203",
    description: "Assembly language (8085 & 8086)",
    semester: 2,
  },

  // Semester 3
  {
    id: "s3-1",
    name: "Object Oriented Programming",
    code: "CS301",
    description: "Advanced OOP with Java",
    semester: 3,
  },
  {
    id: "s3-2",
    name: "Algorithms",
    code: "CS302",
    description: "Algorithm design and analysis",
    semester: 3,
  },
  {
    id: "s3-3",
    name: "Operating Systems",
    code: "CS303",
    description: "Process management and system calls",
    semester: 3,
  },

  // Semester 4
  {
    id: "s4-1",
    name: "Web Development",
    code: "CS401",
    description: "HTML, CSS, JavaScript, React",
    semester: 4,
  },
  {
    id: "s4-2",
    name: "Software Engineering",
    code: "CS402",
    description: "SDLC, design patterns, testing",
    semester: 4,
  },
  {
    id: "s4-3",
    name: "Computer Networks",
    code: "CS403",
    description: "TCP/IP, HTTP, socket programming",
    semester: 4,
  },

  // Semester 5
  {
    id: "s5-1",
    name: "Python Programming",
    code: "CS501",
    description: "Advanced Python and libraries",
    semester: 5,
  },
  {
    id: "s5-2",
    name: "Machine Learning",
    code: "CS502",
    description: "ML algorithms and implementation",
    semester: 5,
  },
  {
    id: "s5-3",
    name: "Mobile App Development",
    code: "CS503",
    description: "Android and iOS development",
    semester: 5,
  },

  // Semester 6
  {
    id: "s6-1",
    name: "Database Management Systems",
    code: "CS601",
    description: "SQL, NoSQL, database design",
    semester: 6,
  },
  {
    id: "s6-2",
    name: "Cloud Computing",
    code: "CS602",
    description: "AWS, Azure, containerization",
    semester: 6,
  },
  {
    id: "s6-3",
    name: "Information Security",
    code: "CS603",
    description: "Cryptography and security protocols",
    semester: 6,
  },

  // Semester 7
  {
    id: "s7-1",
    name: "Artificial Intelligence",
    code: "CS701",
    description: "AI algorithms and neural networks",
    semester: 7,
  },
  {
    id: "s7-2",
    name: "Distributed Systems",
    code: "CS702",
    description: "Microservices and distributed computing",
    semester: 7,
  },
  {
    id: "s7-3",
    name: "Blockchain Technology",
    code: "CS703",
    description: "Smart contracts and DApps",
    semester: 7,
  },

  // Semester 8
  {
    id: "s8-1",
    name: "Final Project",
    code: "CS801",
    description: "Capstone project development",
    semester: 8,
  },
  {
    id: "s8-2",
    name: "DevOps & Deployment",
    code: "CS802",
    description: "CI/CD, Docker, Kubernetes",
    semester: 8,
  },
  {
    id: "s8-3",
    name: "Advanced Topics",
    code: "CS803",
    description: "Latest trends in computer science",
    semester: 8,
  },
];

export const semesters: Semester[] = [
  {
    number: 1,
    name: "First Semester",
    description: "Foundation courses in programming and mathematics",
    subjects: subjects.filter((s) => s.semester === 1),
  },
  {
    number: 2,
    name: "Second Semester",
    description: "Data structures and object-oriented programming",
    subjects: subjects.filter((s) => s.semester === 2),
  },
  {
    number: 3,
    name: "Third Semester",
    description: "Advanced programming and algorithms",
    subjects: subjects.filter((s) => s.semester === 3),
  },
  {
    number: 4,
    name: "Fourth Semester",
    description: "Web development and software engineering",
    subjects: subjects.filter((s) => s.semester === 4),
  },
  {
    number: 5,
    name: "Fifth Semester",
    description: "Python, machine learning, and mobile development",
    subjects: subjects.filter((s) => s.semester === 5),
  },
  {
    number: 6,
    name: "Sixth Semester",
    description: "Databases, cloud computing, and security",
    subjects: subjects.filter((s) => s.semester === 6),
  },
  {
    number: 7,
    name: "Seventh Semester",
    description: "AI, distributed systems, and blockchain",
    subjects: subjects.filter((s) => s.semester === 7),
  },
  {
    number: 8,
    name: "Eighth Semester",
    description: "Final projects and industry practices",
    subjects: subjects.filter((s) => s.semester === 8),
  },
];
