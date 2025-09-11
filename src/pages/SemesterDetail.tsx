import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Filter, Code, Search as SearchIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import SearchBar from '@/components/SearchBar';
import CodeCard from '@/components/CodeCard';
import { useSearch } from '@/hooks/useSearch';
import { sampleCodeSnippets, semesters } from '@/data/sampleData';

const SemesterDetail: React.FC = () => {
  const { semesterNumber } = useParams<{ semesterNumber: string }>();
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  
  const semester = semesters.find(s => s.number === parseInt(semesterNumber || '1'));
  const semesterSnippets = sampleCodeSnippets.filter(
    snippet => snippet.semester === parseInt(semesterNumber || '1')
  );

  const filteredSnippets = selectedSubject === 'all' 
    ? semesterSnippets 
    : semesterSnippets.filter(snippet => snippet.subject === selectedSubject);

  const { searchTerm, setSearchTerm, results } = useSearch({
    data: filteredSnippets,
    searchFields: ['title', 'description', 'tags', 'subject'],
  });

  const subjects = Array.from(new Set(semesterSnippets.map(s => s.subject)));

  if (!semester) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Semester Not Found</h1>
          <p className="text-muted-foreground mb-4">The requested semester could not be found.</p>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
              </Link>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Code className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-foreground">
                    {semester.name}
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    {semester.description}
                  </p>
                </div>
              </div>
            </div>
            
            <Badge variant="secondary" className="text-sm">
              {results.length} {results.length === 1 ? 'snippet' : 'snippets'}
            </Badge>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <SearchBar
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder={`Search in ${semester.name}...`}
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Subject:</span>
              </div>
              
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Subjects</SelectItem>
                  {subjects.map((subject) => (
                    <SelectItem key={subject} value={subject}>
                      {subject}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Search Results Info */}
          {searchTerm && (
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <SearchIcon className="h-4 w-4" />
              <span>
                {results.length === 0 
                  ? 'No results found' 
                  : `Found ${results.length} ${results.length === 1 ? 'result' : 'results'}`
                } for "{searchTerm}"
              </span>
            </div>
          )}
        </div>

        {/* Code Snippets */}
        <div className="space-y-8">
          {results.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <Code className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {searchTerm ? 'No matching code snippets' : 'No code snippets yet'}
              </h3>
              <p className="text-muted-foreground">
                {searchTerm 
                  ? 'Try adjusting your search terms or filters'
                  : 'Code snippets for this semester will appear here'
                }
              </p>
            </div>
          ) : (
            results.map(({ snippet }) => (
              <CodeCard
                key={snippet.id}
                snippet={snippet}
                showSemester={false}
                showSubject={true}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SemesterDetail;