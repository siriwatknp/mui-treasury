"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  BotIcon,
  SquareIcon,
  CopyIcon,
  RefreshCwIcon,
  ImageIcon,
} from "lucide-react";
import { useState } from "react";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "../src/mui-plus/components/ai-conversation/ai-conversation";
import {
  Message,
  MessageContent,
  MessageAvatar,
} from "../src/mui-plus/components/ai-message/ai-message";
import { Response } from "../src/mui-plus/components/ai-response/ai-response";
import { Loader } from "../src/mui-plus/components/ai-loader/ai-loader";
import {
  PromptInput,
  PromptInputBody,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputSubmit,
  PromptInputAttachments,
  PromptInputAttachment,
  PromptInputButton,
  usePromptInputAttachments,
  type PromptInputMessage,
} from "../src/mui-plus/components/ai-prompt-input/ai-prompt-input";
import {
  Suggestions,
  Suggestion,
} from "../src/mui-plus/components/ai-suggestion/ai-suggestion";
import {
  Actions,
  Action,
} from "../src/mui-plus/components/ai-actions/ai-actions";
import {
  Tool,
  ToolHeader,
  ToolContent,
  ToolInput,
  ToolOutput,
} from "../src/mui-plus/components/ai-tool/ai-tool";
import {
  Sources,
  SourcesTrigger,
  SourcesContent,
  Source,
} from "../src/mui-plus/components/ai-sources/ai-sources";
import {
  Reasoning,
  ReasoningTrigger,
  ReasoningContent,
} from "../src/mui-plus/components/ai-reasoning/ai-reasoning";

const SUGGESTED_PROMPTS = [
  "What's the weather like in San Francisco?",
  "Write a React component for a todo list",
];

// Mock reasoning based on message content
function getMockReasoning(messageText: string, hasTool: boolean) {
  if (!messageText) return null;

  const text = messageText.toLowerCase();

  // Show reasoning for weather queries
  if (text.includes("weather") || text.includes("temperature")) {
    return `Let me think about this weather query:

1. The user is asking about weather information
2. I'll need to use the getWeather tool to fetch current data
3. I should provide temperature, conditions, and humidity
4. The response should be clear and concise`;
  }

  // Show reasoning for time queries
  if (text.includes("time") || text.includes("date")) {
    return `Processing the time-related query:

1. User wants current time/date information
2. I'll call the getCurrentTime tool for accurate data
3. The response should include time, date, and ISO timestamp
4. Format should be user-friendly and readable`;
  }

  // Show reasoning for code queries
  if (
    text.includes("react") ||
    text.includes("component") ||
    text.includes("function")
  ) {
    return `Analyzing the coding request:

1. User needs a code example or component
2. I should follow best practices and modern patterns
3. Code should be clear, maintainable, and well-structured
4. I'll include proper TypeScript typing if applicable
5. Comments should explain the key concepts`;
  }

  // Show reasoning for calculations
  if (text.includes("sum") || text.includes("calculate") || hasTool) {
    return `Approaching this calculation:

1. Identifying the numbers to calculate
2. Determining the mathematical operation needed
3. Using the calculateSum tool for accuracy
4. Verifying the result before presenting`;
  }

  return null;
}

// Mock sources based on message content
function getMockSources(messageText: string, hasTool: boolean) {
  if (!messageText) return null;

  const text = messageText.toLowerCase();

  // Show sources for weather-related queries
  if (text.includes("weather") || text.includes("temperature")) {
    return [
      {
        title: "OpenWeather API Documentation",
        href: "https://openweathermap.org/api",
      },
      {
        title: "Weather.gov Climate Data",
        href: "https://www.weather.gov/",
      },
    ];
  }

  // Show sources for time-related queries
  if (text.includes("time") || text.includes("date")) {
    return [
      {
        title: "Time and Date API",
        href: "https://www.timeapi.io/",
      },
    ];
  }

  // Show sources for code-related queries
  if (
    text.includes("react") ||
    text.includes("component") ||
    text.includes("function")
  ) {
    return [
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
    ];
  }

  // Show sources for math calculations
  if (text.includes("sum") || text.includes("calculate") || hasTool) {
    return [
      {
        title: "MDN Math Reference",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math",
      },
    ];
  }

  return null;
}

function AttachButton({ disabled }: { disabled?: boolean }) {
  const attachments = usePromptInputAttachments();

  return (
    <PromptInputButton
      onClick={() => attachments.openFileDialog()}
      disabled={disabled}
      aria-label="Attach image"
    >
      <ImageIcon size={16} />
    </PromptInputButton>
  );
}

function SubmitButton({
  status,
  disabled,
  inputValue,
}: {
  status: string;
  disabled: boolean;
  inputValue: string;
}) {
  const attachments = usePromptInputAttachments();
  const hasContent =
    inputValue.trim().length > 0 || attachments.files.length > 0;

  return (
    <PromptInputSubmit
      status={status as "ready" | "submitted" | "streaming" | "error"}
      disabled={disabled || !hasContent}
    />
  );
}

export default function ChatPage() {
  const { messages, sendMessage, status, error, regenerate, stop } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
    onError: (error) => {
      console.error("Chat error:", error);
    },
  });

  const [inputValue, setInputValue] = useState("");

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  const handleSubmit = (
    message: PromptInputMessage,
    event: React.FormEvent,
  ) => {
    event.preventDefault();
    if (message.text?.trim() || message.files?.length) {
      sendMessage({
        text: message.text || "",
        files: message.files,
      });
      setInputValue("");
    }
  };

  const handleRetry = () => {
    regenerate();
  };

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  const showSuggestions = messages.length === 0 && status === "ready";

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      {/* Main Chat Area */}
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
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  gap: 2,
                  px: 2,
                }}
              >
                <BotIcon size={48} style={{ opacity: 0.5 }} />
                <Box sx={{ textAlign: "center" }}>
                  <Box sx={{ fontSize: "1.5rem", fontWeight: 600, mb: 1 }}>
                    Welcome to MUI+ AI Chat
                  </Box>
                  <Box sx={{ color: "text.secondary", fontSize: "0.875rem" }}>
                    Try one of the suggestions below or ask anything
                  </Box>
                </Box>
              </Box>
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {messages.map((message) => {
                  // Get all text parts combined for copying
                  const messageText = message.parts
                    ?.filter((part) => part.type === "text")
                    .map((part) => part.text)
                    .join("\n");

                  // Check if message has tool usage
                  const hasTool = message.parts?.some((part) =>
                    part.type.startsWith("tool-"),
                  );

                  // Get mock sources and reasoning based on message content
                  const mockSources =
                    message.role === "assistant"
                      ? getMockSources(messageText || "", hasTool || false)
                      : null;

                  const mockReasoning =
                    message.role === "assistant"
                      ? getMockReasoning(messageText || "", hasTool || false)
                      : null;

                  return (
                    <Message key={message.id} from={message.role}>
                      <MessageAvatar
                        name={message.role === "user" ? "User" : "AI Assistant"}
                      />
                      <MessageContent variant="flat">
                        {mockReasoning && (
                          <Reasoning isStreaming={status === "streaming"}>
                            <ReasoningTrigger />
                            <ReasoningContent>{mockReasoning}</ReasoningContent>
                          </Reasoning>
                        )}
                        {message.parts?.map((part, index: number) => {
                          if (part.type === "text") {
                            return message.role === "assistant" ? (
                              <Response key={index}>{part.text}</Response>
                            ) : (
                              <Box key={index}>{part.text}</Box>
                            );
                          }
                          if (
                            part.type === "file" &&
                            part.mediaType?.startsWith("image/")
                          ) {
                            return (
                              <Box
                                key={index}
                                component="img"
                                src={part.url}
                                alt={part.filename || "attachment"}
                                sx={{
                                  maxWidth: "100%",
                                  height: "auto",
                                  borderRadius: 1,
                                  mt: index > 0 ? 1 : 0,
                                }}
                              />
                            );
                          }
                          if (
                            part.type.startsWith("tool-") &&
                            "state" in part &&
                            "input" in part
                          ) {
                            return (
                              <Box key={index} sx={{ mt: index > 0 ? 1 : 0 }}>
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
                            <Action tooltip="Regenerate" onClick={handleRetry}>
                              <RefreshCwIcon size={16} />
                            </Action>
                          </Actions>
                        )}
                        {mockSources && mockSources.length > 0 && (
                          <Sources>
                            <SourcesTrigger count={mockSources.length} />
                            <SourcesContent>
                              {mockSources.map((source, idx) => (
                                <Source
                                  key={idx}
                                  href={source.href}
                                  title={source.title}
                                />
                              ))}
                            </SourcesContent>
                          </Sources>
                        )}
                      </MessageContent>
                    </Message>
                  );
                })}

                {/* Loading indicator - only show before streaming starts */}
                {status === "submitted" && (
                  <Message from="assistant">
                    <MessageAvatar name="AI Assistant" />
                    <MessageContent variant="flat">
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Loader />
                        <Box
                          sx={{ fontSize: "0.875rem", color: "text.secondary" }}
                        >
                          Thinking...
                        </Box>
                      </Box>
                    </MessageContent>
                  </Message>
                )}

                {/* Error message */}
                {error && (
                  <Message from="assistant">
                    <MessageAvatar name="AI Assistant" />
                    <MessageContent variant="flat">
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1.5,
                        }}
                      >
                        <Box sx={{ color: "error.text", fontSize: "0.875rem" }}>
                          {error.message ||
                            "An error occurred. Please make sure Ollama is running."}
                        </Box>
                        <Box>
                          <Button
                            variant="outlined"
                            size="small"
                            onClick={handleRetry}
                            sx={{ textTransform: "none" }}
                          >
                            Retry
                          </Button>
                        </Box>
                      </Box>
                    </MessageContent>
                  </Message>
                )}
              </Box>
            )}
          </ConversationContent>

          <ConversationScrollButton />
        </Conversation>
      </Box>

      {/* Input Area */}
      <Box
        sx={{
          borderTop: 1,
          borderColor: "divider",
          bgcolor: "background.paper",
          p: 2,
        }}
      >
        <Box sx={{ maxWidth: 896, mx: "auto" }}>
          {/* Suggestions */}
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

          {/* Input Form */}
          <PromptInput
            onSubmit={handleSubmit}
            accept="image/*"
            multiple
            maxFiles={5}
          >
            <PromptInputAttachments>
              {(attachment) => <PromptInputAttachment data={attachment} />}
            </PromptInputAttachments>
            <PromptInputBody>
              <PromptInputTextarea
                placeholder="Ask me anything..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={status === "submitted" || error != null}
              />
            </PromptInputBody>
            <PromptInputToolbar>
              <AttachButton
                disabled={status === "submitted" || error != null}
              />
              {status === "streaming" ? (
                <Button
                  variant="contained"
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
                <SubmitButton
                  status={status}
                  disabled={status === "submitted" || error != null}
                  inputValue={inputValue}
                />
              )}
            </PromptInputToolbar>
          </PromptInput>
        </Box>
      </Box>
    </Box>
  );
}
