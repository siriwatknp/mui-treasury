"use client";

import { useState } from "react";
import { Reasoning, ReasoningTrigger, ReasoningContent } from "./ai-reasoning";

export default function AIReasoningDemo() {
  const [isStreaming, setIsStreaming] = useState(false);

  const simulateStreaming = () => {
    setIsStreaming(true);
    setTimeout(() => setIsStreaming(false), 3000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 p-8">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          Reasoning Component
        </h3>

        <div className="space-y-4">
          <Reasoning isStreaming={isStreaming} defaultOpen>
            <ReasoningTrigger />
            <ReasoningContent>
              {`Let me analyze this step by step:

1. First, I need to understand the context
2. Then, I'll consider different approaches
3. Finally, I'll provide the best solution

This reasoning process helps me give you more accurate and thoughtful responses.`}
            </ReasoningContent>
          </Reasoning>

          <button
            onClick={simulateStreaming}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm"
          >
            Simulate Streaming
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          Collapsed by Default
        </h3>

        <Reasoning>
          <ReasoningTrigger />
          <ReasoningContent>
            {`This reasoning is collapsed by default. Click the trigger to expand and see the thought process.

I'm analyzing multiple factors:
- User requirements
- Technical constraints
- Best practices
- Performance considerations`}
          </ReasoningContent>
        </Reasoning>
      </div>
    </div>
  );
}
