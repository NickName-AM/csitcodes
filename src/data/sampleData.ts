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
    title: "Factorial Calculator",
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
  // Semester 2
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
