"use client";

import { Suggestions, Suggestion } from "./ai-suggestion";

export default function AISuggestionDemo() {
  const handleSuggestionClick = (suggestion: string) => {
    console.log("Selected suggestion:", suggestion);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8 p-8">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          Basic Suggestions
        </h3>
        <Suggestions>
          <Suggestion
            suggestion="Tell me more about React hooks"
            onClick={handleSuggestionClick}
          />
          <Suggestion
            suggestion="How do I manage state?"
            onClick={handleSuggestionClick}
          />
          <Suggestion
            suggestion="What are the best practices?"
            onClick={handleSuggestionClick}
          />
          <Suggestion
            suggestion="Show me an example"
            onClick={handleSuggestionClick}
          />
        </Suggestions>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          Long Suggestions (Scrollable)
        </h3>
        <Suggestions>
          <Suggestion
            suggestion="Explain the difference between useState and useReducer"
            onClick={handleSuggestionClick}
          />
          <Suggestion
            suggestion="How do I optimize performance in React applications?"
            onClick={handleSuggestionClick}
          />
          <Suggestion
            suggestion="What are the common patterns for data fetching?"
            onClick={handleSuggestionClick}
          />
          <Suggestion
            suggestion="Can you help me understand React Server Components?"
            onClick={handleSuggestionClick}
          />
          <Suggestion
            suggestion="What's the best way to handle forms in React?"
            onClick={handleSuggestionClick}
          />
          <Suggestion
            suggestion="How do I implement authentication in Next.js?"
            onClick={handleSuggestionClick}
          />
        </Suggestions>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          Custom Styled Suggestions
        </h3>
        <Suggestions>
          <Suggestion
            suggestion="Primary action"
            onClick={handleSuggestionClick}
          />
          <Suggestion
            suggestion="Contained action"
            onClick={handleSuggestionClick}
            variant="contained"
          />
          <Suggestion
            suggestion="text action"
            onClick={handleSuggestionClick}
            variant="text"
          />
        </Suggestions>
      </div>
    </div>
  );
}
