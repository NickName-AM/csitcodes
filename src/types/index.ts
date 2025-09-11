export interface CodeSnippet {
  id: string;
  title: string;
  description: string;
  language: string;
  code: string;
  subject: string;
  semester: number;
  tags: string[];
  createdAt: string;
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  description: string;
  semester: number;
}

export interface Semester {
  number: number;
  name: string;
  description: string;
  subjects: Subject[];
}

export interface SearchResult {
  snippet: CodeSnippet;
  score: number;
}