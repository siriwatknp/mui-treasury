"use client";

import {
  CodeBlock,
  CodeBlockCopyButton,
} from "@/registry/components/ai-code-block/ai-code-block";

const usageCode = `import * as React from "react";
import { initializeApp } from "firebase/app";
import { tool, stepCountIs } from "ai";
import { useChat } from "@ai-sdk/react";
import { z } from "zod";
import { FirebaseChatTransport } from "./firebase-chat-transport";

const app = initializeApp({ ... });

const transport = React.useMemo(
  () =>
    new FirebaseChatTransport({
      firebaseApp: app,
      modelParams: {
        // see https://firebase.google.com/docs/ai-logic/models for available models
        model: "gemini-2.5-flash-lite",
        systemInstruction: "...",
      },
      tools: {
        yourCustomTool: tool({
          // See https://ai-sdk.dev/docs/ai-sdk-core/tools-and-tool-calling for more details
        }),
      },
      stopWhen: stepCountIs(3),
    }),
  [],
);

const { messages, status, error, sendMessage, stop, regenerate } = useChat({
  transport,
});`;

export default function FirebaseChatTransportDemo() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <CodeBlock code={usageCode} language="tsx" showLineNumbers>
        <CodeBlockCopyButton />
      </CodeBlock>
    </div>
  );
}
