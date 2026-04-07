"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { Bot, CopyIcon, RefreshCwIcon, SquareIcon } from "lucide-react";
import { toast } from "sonner";
import { UIMessage, useChat } from "@ai-sdk/react";
import { FirebaseChatTransport } from "@/registry/firebase/firebase-chat-transport";
import { app } from "@/lib/firebase-setup";
import { Action, Actions } from "@/registry/components/ai-actions/ai-actions";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/registry/components/ai-conversation/ai-conversation";
import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/registry/components/ai-message/ai-message";
import { Loader } from "@/registry/components/ai-loader/ai-loader";
import {
  PromptInput,
  PromptInputBody,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputToolbar,
  type PromptInputMessage,
} from "@/registry/components/ai-prompt-input/ai-prompt-input";
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/registry/components/ai-reasoning/ai-reasoning";
import { Response } from "@/registry/components/ai-response/ai-response";
import {
  Suggestion,
  Suggestions,
} from "@/registry/components/ai-suggestion/ai-suggestion";

const SUGGESTED_PROMPTS = [
  "What is the meaning of life?",
  "Explain quantum computing in simple terms",
  "How do black holes work?",
];

export default function FirebaseThinkingModel() {
  const [inputValue, setInputValue] = useState("");

  const transport = React.useMemo(
    () =>
      app
        ? new FirebaseChatTransport({
            firebaseApp: app,
            modelParams: {
              model: "gemini-2.5-flash",
              systemInstruction: `You are a helpful AI assistant that thinks through problems step by step.
Always respond in a concise and clear manner.
Format responses in Markdown unless asked otherwise.
If you don't know the answer, say so honestly.`,
              generationConfig: {
                thinkingConfig: {
                  includeThoughts: true,
                  thinkingBudget: 2048,
                },
              },
            },
          })
        : null,
    [],
  );

  const { messages, status, error, sendMessage, stop, regenerate } =
    useChat<UIMessage>({
      id: "firebase-thinking-model",
      transport: transport!,
    });

  const handleSubmit = (
    message: PromptInputMessage,
    event: React.FormEvent,
  ) => {
    event.preventDefault();
    if (message.text?.trim()) {
      sendMessage({ text: message.text });
      setInputValue("");
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard");
    } catch {
      toast.error("Failed to copy to clipboard");
    }
  };

  const showSuggestions = messages.length === 0 && status === "ready";

  if (!app) {
    return (
      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Typography color="text.secondary">
          Firebase not configured. Please set up Firebase config at the top of
          the page.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        maxWidth: 768,
        mx: "auto",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Conversation>
          <ConversationContent>
            {messages.length === 0 && status === "ready" ? (
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: 2,
                  color: "text.tertiary",
                }}
              >
                <Bot size={48} />
                <Typography variant="h4" sx={{ fontWeight: 500 }}>
                  Thinking Model Demo
                </Typography>
                <Typography color="text.secondary">
                  Ask a question and watch the AI think through it
                </Typography>
              </Box>
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                {messages.map((message) => {
                  const messageText = message.parts
                    ?.filter((part) => part.type === "text")
                    .map((part) => part.text)
                    .join("\n");

                  return (
                    <Message key={message.id} from={message.role}>
                      <MessageAvatar
                        name={message.role === "user" ? "You" : "AI"}
                      />
                      <MessageContent variant="flat">
                        {message.parts?.map((part, index) => {
                          if (part.type === "reasoning") {
                            const reasoningPart = part as {
                              type: "reasoning";
                              text: string;
                              state?: "streaming" | "done";
                            };
                            return (
                              <Reasoning
                                key={index}
                                isStreaming={
                                  reasoningPart.state === "streaming"
                                }
                              >
                                <ReasoningTrigger />
                                <ReasoningContent>
                                  {reasoningPart.text}
                                </ReasoningContent>
                              </Reasoning>
                            );
                          }
                          if (part.type === "text") {
                            if (
                              message.role === "assistant" &&
                              part.state !== "done" &&
                              !part.text
                            ) {
                              return null;
                            }
                            return message.role === "assistant" ? (
                              <Response key={index}>{part.text}</Response>
                            ) : (
                              <Box key={index}>{part.text}</Box>
                            );
                          }
                          return null;
                        })}
                        {message.role === "assistant" && messageText && (
                          <Actions>
                            <Action
                              tooltip="Copy"
                              onClick={() => handleCopy(messageText)}
                            >
                              <CopyIcon size={16} />
                            </Action>
                            <Action
                              tooltip="Regenerate"
                              onClick={() => regenerate()}
                            >
                              <RefreshCwIcon size={16} />
                            </Action>
                          </Actions>
                        )}
                      </MessageContent>
                    </Message>
                  );
                })}

                {status === "submitted" && (
                  <Message from="assistant">
                    <MessageAvatar name="AI" />
                    <MessageContent variant="flat">
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <CircularProgress size={20} />
                        <Typography color="text.secondary">
                          Thinking...
                        </Typography>
                      </Box>
                    </MessageContent>
                  </Message>
                )}

                {error && (
                  <Message from="assistant">
                    <MessageAvatar name="AI" />
                    <MessageContent variant="flat">
                      <Typography sx={{ color: "error.text" }}>
                        {error.message ||
                          "An error occurred. Please try again."}
                      </Typography>
                    </MessageContent>
                  </Message>
                )}
              </Box>
            )}
            {status === "streaming" && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mt: 1,
                }}
              >
                <Loader />
                <Typography color="text.secondary">
                  Streaming response...
                </Typography>
              </Box>
            )}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>
      </Box>

      {showSuggestions && (
        <Box sx={{ mb: 2 }}>
          <Suggestions>
            {SUGGESTED_PROMPTS.map((prompt, index) => (
              <Suggestion
                key={index}
                suggestion={prompt}
                onClick={handleSuggestionClick}
              />
            ))}
          </Suggestions>
        </Box>
      )}

      <PromptInput onSubmit={handleSubmit}>
        <PromptInputBody>
          <PromptInputTextarea
            placeholder="Ask something that requires deep thinking..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={status === "submitted" || error != null}
          />
        </PromptInputBody>
        <PromptInputToolbar>
          {status === "streaming" || status === "submitted" ? (
            <Button
              variant="outlined"
              onClick={(e) => {
                e.preventDefault();
                stop();
              }}
              sx={{ minWidth: "auto", borderRadius: 2, p: 1 }}
            >
              <SquareIcon size={16} />
            </Button>
          ) : (
            <PromptInputSubmit
              status={status as "ready" | "submitted" | "streaming" | "error"}
              disabled={error != null}
            />
          )}
        </PromptInputToolbar>
      </PromptInput>
    </Box>
  );
}
