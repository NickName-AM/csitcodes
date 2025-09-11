import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Code2, Search, BookOpen, Sparkles, Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SearchBar from "@/components/SearchBar";
import SemesterGrid from "@/components/SemesterGrid";
import CodeCard from "@/components/CodeCard";
import { useSearch } from "@/hooks/useSearch";
import { sampleCodeSnippets, semesters } from "@/data/sampleData";

const Index = () => {
  const navigate = useNavigate();
  const [showAllResults, setShowAllResults] = useState(false);

  const { searchTerm, setSearchTerm, results, isSearching } = useSearch({
    data: sampleCodeSnippets,
    searchFields: ["title", "description", "tags", "subject"],
  });

  const displayedResults = showAllResults ? results : results.slice(0, 6);

  const handleSemesterClick = (semesterNumber: number) => {
    navigate(`/semester/${semesterNumber}`);
  };

  const totalSnippets = sampleCodeSnippets.length;
  const totalSubjects = new Set(sampleCodeSnippets.map((s) => s.subject)).size;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center animate-glow">
                <Code2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <Badge variant="secondary" className="text-sm px-3 py-1">
                College Code Archive
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                CSIT Codes
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive collection of code snippets from 8 semesters of
              Bsc.CSIT program. Explore, search, and learn from my programming
              evolution.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4 text-primary" />
                <span>{semesters.length} Semesters</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code2 className="h-4 w-4 text-primary" />
                <span>{totalSnippets} Code Snippets</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>{totalSubjects} Subjects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Search Across All Code
          </h2>
          <div className="max-w-2xl mx-auto">
            <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Search across all semesters and subjects..."
            />
          </div>
        </div>

        {/* Search Results */}
        {isSearching && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Search className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  Search Results
                </h3>
                <Badge variant="secondary">
                  {results.length} {results.length === 1 ? "result" : "results"}
                </Badge>
              </div>

              {results.length > 6 && (
                <Button
                  variant="outline"
                  onClick={() => setShowAllResults(!showAllResults)}
                >
                  {showAllResults ? "Show Less" : `Show All ${results.length}`}
                </Button>
              )}
            </div>

            {results.length === 0 ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h4 className="text-lg font-medium text-foreground mb-2">
                  No results found
                </h4>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or browse by semester below
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                {displayedResults.map(({ snippet }) => (
                  <CodeCard
                    key={snippet.id}
                    snippet={snippet}
                    showSemester={true}
                    showSubject={true}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Semesters Grid */}
        {!isSearching && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Browse by Semester
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore code snippets organized by semester. Each semester
                contains multiple subjects with various programming assignments
                and projects.
              </p>
            </div>

            <SemesterGrid
              semesters={semesters}
              onSemesterClick={handleSemesterClick}
            />
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code2 className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">Maintainers</span>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  window.open("https://github.com/NickName-AM/", "_blank")
                }
              >
                @NickName-AM
              </Button>
              {/*<Button variant="ghost" size="sm">
                <Globe className="mr-2 h-4 w-4" />
                @
              </Button>*/}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
