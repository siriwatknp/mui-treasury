"use client";

import { Sources, SourcesTrigger, SourcesContent, Source } from "./ai-sources";
import { BookIcon } from "lucide-react";

export default function AISourcesDemo() {
  const sources = [
    {
      title: "React Documentation",
      href: "https://react.dev/learn",
    },
    {
      title: "MDN Web Docs",
      href: "https://developer.mozilla.org",
    },
    {
      title: "TypeScript Handbook",
      href: "https://www.typescriptlang.org/docs/",
    },
    {
      title: "Next.js Documentation",
      href: "https://nextjs.org/docs",
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 p-8">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          Sources Component
        </h3>
        <p className="text-sm text-muted-foreground">
          Display sources used in AI responses with collapsible list.
        </p>

        <div className="space-y-4">
          <Sources>
            <SourcesTrigger count={sources.length} />
            <SourcesContent>
              {sources.map((source, index) => (
                <Source key={index} href={source.href} title={source.title}>
                  <BookIcon className="h-3 w-3" />
                  <span className="text-xs underline">{source.title}</span>
                </Source>
              ))}
            </SourcesContent>
          </Sources>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          Custom Trigger Text
        </h3>

        <Sources>
          <SourcesTrigger count={3}>
            <p className="font-medium">View {3} references</p>
          </SourcesTrigger>
          <SourcesContent>
            <Source href="#" title="Reference 1">
              <BookIcon className="h-3 w-3" />
              <span className="text-xs underline">Reference 1</span>
            </Source>
            <Source href="#" title="Reference 2">
              <BookIcon className="h-3 w-3" />
              <span className="text-xs underline">Reference 2</span>
            </Source>
            <Source href="#" title="Reference 3">
              <BookIcon className="h-3 w-3" />
              <span className="text-xs underline">Reference 3</span>
            </Source>
          </SourcesContent>
        </Sources>
      </div>
    </div>
  );
}
