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
  {
    id: "s1-2",
    name: "Mathematics I",
    code: "MATH101",
    description: "Calculus and linear algebra fundamentals",
    semester: 1,
  },
  {
    id: "s1-3",
    name: "Digital Logic",
    code: "CS102",
    description: "Boolean algebra and digital circuits",
    semester: 1,
  },

  // Semester 2
  {
    id: "s2-1",
    name: "Data Structures",
    code: "CS201",
    description: "Arrays, linked lists, stacks, queues, trees",
    semester: 2,
  },
  {
    id: "s2-2",
    name: "Object Oriented Programming",
    code: "CS202",
    description: "OOP concepts using C++",
    semester: 2,
  },
  {
    id: "s2-3",
    name: "Computer Organization",
    code: "CS203",
    description: "CPU architecture and assembly language",
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
