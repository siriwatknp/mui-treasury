"use client";

import React, { useState } from "react";

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
import { Response } from "@/registry/components/ai-response/ai-response";
import {
  Suggestion,
  Suggestions,
} from "@/registry/components/ai-suggestion/ai-suggestion";
import {
  Tool,
  ToolContent,
  ToolHeader,
  ToolInput,
  ToolOutput,
} from "@/registry/components/ai-tool/ai-tool";
import { useChat } from "@ai-sdk/react";
import { stepCountIs, tool } from "ai";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { Bot, CopyIcon, RefreshCwIcon, SquareIcon } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const SUGGESTED_PROMPTS = [
  "What's the weather like in Tokyo?",
  "Get the current time in New York",
  "Tell me the weather in Paris and London",
];

export default function FirebaseToolCalling() {
  const [inputValue, setInputValue] = useState("");

  const transport = React.useMemo(
    () =>
      app
        ? new FirebaseChatTransport({
            firebaseApp: app,
            modelParams: {
              model: "gemini-2.5-flash",
              systemInstruction: `You are a helpful AI assistant with access to tools.
When the user asks about weather or time, use the appropriate tool to get the information.
Always respond in a concise and clear manner using Markdown format.`,
            },
            tools: {
              getWeather: tool({
                description: "Get the current weather for a city",
                inputSchema: z.object({
                  city: z.string().describe("The city name"),
                  country: z.string().optional().describe("The country code"),
                }),
                execute: async ({ city, country }) => {
                  await new Promise((resolve) => setTimeout(resolve, 1000));
                  return {
                    city,
                    country: country || "US",
                    temperature: Math.round(15 + Math.random() * 20),
                    conditions: ["sunny", "cloudy", "rainy", "windy"][
                      Math.floor(Math.random() * 4)
                    ],
                    humidity: Math.round(40 + Math.random() * 40),
                  };
                },
              }),
              getTime: tool({
                description: "Get the current time for a timezone",
                inputSchema: z.object({
                  timezone: z
                    .string()
                    .describe(
                      "The timezone (e.g., America/New_York, Europe/London)",
                    ),
                }),
                execute: async ({ timezone }) => {
                  await new Promise((resolve) => setTimeout(resolve, 500));
                  const now = new Date();
                  const formatter = new Intl.DateTimeFormat("en-US", {
                    timeZone: timezone,
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  });
                  return {
                    timezone,
                    datetime: formatter.format(now),
                  };
                },
              }),
            },
            stopWhen: stepCountIs(5),
          })
        : null,
    [],
  );

  const { messages, status, error, sendMessage, stop, regenerate } = useChat({
    id: "firebase-tool-calling",
    transport: transport!,
  });

  const handleSubmit = (
    message: PromptInputMessage,
    event: React.FormEvent,
  ) => {
    event.preventDefault();
    const hasText = message.text?.trim();
    if (hasText) {
      sendMessage({ text: message.text! });
    }
    setInputValue("");
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      toast.error(
        `Failed to copy (${
          err instanceof Error ? err.message : "Unknown error"
        })`,
      );
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
                  Tool Calling
                </Typography>
                <Typography color="text.secondary">
                  Ask me about weather or time
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
                        {message.parts?.map((part, index: number) => {
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
                          if (
                            part.type.startsWith("tool-") &&
                            "state" in part &&
                            "input" in part
                          ) {
                            return (
                              <Box key={index} sx={{ my: 1 }}>
                                <Tool>
                                  <ToolHeader
                                    type={part.type as `tool-${string}`}
                                    state={part.state}
                                  />
                                  <ToolContent>
                                    <ToolInput input={part.input} />
                                    {"output" in part &&
                                      (part.output || part.errorText) && (
                                        <ToolOutput
                                          output={part.output}
                                          errorText={part.errorText}
                                        />
                                      )}
                                  </ToolContent>
                                </Tool>
                              </Box>
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
                    <MessageAvatar name="AI Assistant" />
                    <MessageContent variant="flat">
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <CircularProgress size={20} />
                        <Typography sx={{ color: "text.secondary" }}>
                          Thinking...
                        </Typography>
                      </Box>
                    </MessageContent>
                  </Message>
                )}

                {error && (
                  <Message from="assistant">
                    <MessageAvatar name="AI Assistant" />
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
                <Typography sx={{ color: "text.secondary" }}>
                  Streaming...
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
            placeholder="Ask about weather or time..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={status === "submitted" || error != null}
          />
        </PromptInputBody>
        <PromptInputToolbar>
          {status === "streaming" ? (
            <Button
              variant="outlined"
              onClick={(e) => {
                e.preventDefault();
                stop();
              }}
              sx={{
                minWidth: "auto",
                borderRadius: 2,
                p: 1,
              }}
            >
              <SquareIcon size={16} />
            </Button>
          ) : (
            <PromptInputSubmit
              status={status as "ready" | "submitted" | "streaming" | "error"}
              disabled={status === "submitted" || error != null}
            />
          )}
        </PromptInputToolbar>
      </PromptInput>
    </Box>
  );
}
