import React from 'react';
import { Semester } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight, Book, Code } from 'lucide-react';
import { sampleCodeSnippets } from '@/data/sampleData';

interface SemesterGridProps {
  semesters: Semester[];
  onSemesterClick: (semester: number) => void;
}

const SemesterGrid: React.FC<SemesterGridProps> = ({ semesters, onSemesterClick }) => {
  const getCodeCount = (semesterNumber: number) => {
    return sampleCodeSnippets.filter(snippet => snippet.semester === semesterNumber).length;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {semesters.map((semester) => {
        const codeCount = getCodeCount(semester.number);
        
        return (
          <Card 
            key={semester.number}
            className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300 cursor-pointer group"
            onClick={() => onSemesterClick(semester.number)}
          >
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <Book className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <Badge variant="secondary">
                    Sem {semester.number}
                  </Badge>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <CardTitle className="text-lg font-semibold">
                {semester.name}
              </CardTitle>
              <CardDescription>
                {semester.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subjects:</span>
                  <span className="font-medium">{semester.subjects.length}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Code className="h-3 w-3" />
                    Code Snippets:
                  </span>
                  <span className="font-medium text-primary">{codeCount}</span>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  View Details
                  <ChevronRight className="ml-2 h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default SemesterGrid;