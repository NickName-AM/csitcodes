import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import { CodeSnippet, SearchResult } from '@/types';

interface UseSearchProps {
  data: CodeSnippet[];
  searchFields?: string[];
  threshold?: number;
}

export const useSearch = ({ 
  data, 
  searchFields = ['title', 'description', 'tags', 'subject'],
  threshold = 0.3 
}: UseSearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const fuse = useMemo(() => {
    return new Fuse(data, {
      keys: searchFields,
      threshold,
      includeScore: true,
      includeMatches: true,
      minMatchCharLength: 2,
    });
  }, [data, searchFields, threshold]);

  const results = useMemo(() => {
    if (!searchTerm.trim()) {
      return data.map(snippet => ({ snippet, score: 0 }));
    }

    const fuseResults = fuse.search(searchTerm);
    return fuseResults.map(result => ({
      snippet: result.item,
      score: result.score || 0,
    }));
  }, [searchTerm, fuse, data]);

  return {
    searchTerm,
    setSearchTerm,
    results,
    isSearching: searchTerm.trim().length > 0,
  };
};