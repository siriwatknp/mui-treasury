"use client";

import { Response } from "./ai-response";

export default function AIResponseDemo() {
  const markdownContent = `
## Welcome to AI Response

This component renders **markdown content** with proper formatting.

### Features
- Supports **bold** and *italic* text
- Lists and nested lists
- Code blocks with syntax highlighting
- Links and images
- Tables and more

### Code Example

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('World'));
\`\`\`

### Table Example

| Feature | Status | Priority |
|---------|--------|----------|
| Markdown | ✅ | High |
| Streaming | ✅ | High |
| Syntax Highlighting | ✅ | Medium |

> This is a blockquote with some important information.

That's all for this demo!`;

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8 p-8">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          AI Response with Markdown
        </h3>
        <div className="border rounded-lg p-4">
          <Response>{markdownContent}</Response>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          Simple Response
        </h3>
        <div className="border rounded-lg p-4">
          <Response>
            This is a simple response without any markdown formatting. It can be
            used for plain text responses from AI.
          </Response>
        </div>
      </div>
    </div>
  );
}
