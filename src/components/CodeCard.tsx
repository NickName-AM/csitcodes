import React from 'react';
import { CodeSnippet } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Tag, Book } from 'lucide-react';
import CodeBlock from './CodeBlock';

interface CodeCardProps {
  snippet: CodeSnippet;
  showSubject?: boolean;
  showSemester?: boolean;
}

const CodeCard: React.FC<CodeCardProps> = ({ 
  snippet, 
  showSubject = true, 
  showSemester = true 
}) => {
  return (
    <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300 animate-in">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl font-semibold text-foreground">
              {snippet.title}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {snippet.description}
            </CardDescription>
          </div>
          <Badge variant="secondary" className="ml-4">
            {snippet.language.toUpperCase()}
          </Badge>
        </div>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          {showSemester && (
            <div className="flex items-center gap-1">
              <Book className="h-4 w-4" />
              <span>Semester {snippet.semester}</span>
            </div>
          )}
          
          {showSubject && (
            <div className="flex items-center gap-1">
              <Tag className="h-4 w-4" />
              <span>{snippet.subject}</span>
            </div>
          )}
          
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{new Date(snippet.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <CodeBlock 
          code={snippet.code} 
          language={snippet.language}
          title={`${snippet.title} - ${snippet.language.toUpperCase()}`}
        />
        
        {snippet.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {snippet.tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-xs border-primary/30 text-primary"
              >
                #{tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CodeCard;