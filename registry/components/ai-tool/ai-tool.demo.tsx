"use client";

import {
  Tool,
  ToolHeader,
  ToolContent,
  ToolInput,
  ToolOutput,
} from "./ai-tool";

export default function AIToolDemo() {
  const tools = [
    {
      type: "tool-search_web" as const,
      state: "output-available" as const,
      input: {
        query: "React 18 features",
        limit: 5,
      },
      output:
        "Found 5 relevant results about React 18 features including automatic batching, transitions, and suspense improvements.",
    },
    {
      type: "tool-read_file" as const,
      state: "input-available" as const,
      input: {
        path: "/src/components/Button.tsx",
      },
      output: null,
    },
    {
      type: "tool-execute_code" as const,
      state: "output-error" as const,
      input: {
        language: "javascript",
        code: "console.log('Hello')",
      },
      errorText: "Permission denied: Cannot execute code in sandbox mode",
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 p-8">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          Tool Components
        </h3>
        <p className="text-sm text-muted-foreground">
          Display AI tool invocations with their inputs and outputs.
        </p>

        <div className="space-y-3">
          {tools.map((tool, index) => (
            <Tool key={index} defaultOpen>
              <ToolHeader type={tool.type} state={tool.state} />
              <ToolContent>
                <ToolInput input={tool.input} />
                {(tool.output || tool.errorText) && (
                  <ToolOutput output={tool.output} errorText={tool.errorText} />
                )}
              </ToolContent>
            </Tool>
          ))}
        </div>
      </div>
    </div>
  );
}
