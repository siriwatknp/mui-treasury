"use client";

import { CodeBlock, CodeBlockCopyButton } from "./ai-code-block";

export default function AICodeBlockDemo() {
  const sampleCode = `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage
console.log(fibonacci(10)); // 55`;

  const tsxCode = `import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-blue-500 text-white rounded"
  >
    {children}
  </button>
);`;

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6 p-8">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          JavaScript Code Block
        </h3>
        <CodeBlock code={sampleCode} language="javascript" showLineNumbers>
          <CodeBlockCopyButton />
        </CodeBlock>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          TypeScript Code Block
        </h3>
        <CodeBlock code={tsxCode} language="tsx" showLineNumbers>
          <CodeBlockCopyButton />
        </CodeBlock>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          Without Line Numbers
        </h3>
        <CodeBlock code={sampleCode} language="javascript">
          <CodeBlockCopyButton />
        </CodeBlock>
      </div>
    </div>
  );
}
