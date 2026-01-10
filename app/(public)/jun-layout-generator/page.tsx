"use client";

import React, { useState } from "react";

import { FirebaseChatTransport } from "./firebase-chat-transport";
import type { GroundingMetadata } from "firebase/ai";
import { app } from "./firebase-setup";
import {
  Action,
  Actions,
} from "@/mui-treasury/components/ai-actions/ai-actions";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/mui-treasury/components/ai-conversation/ai-conversation";
import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/mui-treasury/components/ai-message/ai-message";
import { Loader } from "@/mui-treasury/components/ai-loader/ai-loader";
import {
  PromptInput,
  PromptInputActionAddAttachments,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuTrigger,
  PromptInputAttachment,
  PromptInputAttachments,
  PromptInputBody,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputTools,
  type PromptInputMessage,
} from "@/mui-treasury/components/ai-prompt-input/ai-prompt-input";
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/mui-treasury/components/ai-reasoning/ai-reasoning";
import { Response } from "@/mui-treasury/components/ai-response/ai-response";
import {
  Suggestion,
  Suggestions,
} from "@/mui-treasury/components/ai-suggestion/ai-suggestion";
import {
  Tool,
  ToolContent,
  ToolHeader,
  ToolInput,
  ToolOutput,
} from "@/mui-treasury/components/ai-tool/ai-tool";
import { UIMessage, useChat } from "@ai-sdk/react";
import { tool } from "ai";
import Box from "@mui/material/Box";
import { z } from "zod";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { Bot, CopyIcon, RefreshCwIcon, SquareIcon } from "lucide-react";
import { toast } from "sonner";
// import { ResponseModality } from "firebase/ai";

const SUGGESTED_PROMPTS: string[] = [];

export default function AIAssistantPage() {
  const [inputValue, setInputValue] = useState("");

  const transport = React.useMemo(
    () =>
      new FirebaseChatTransport({
        firebaseApp: app,
        // enableGoogleSearch: true,
        modelParams: {
          model: "gemini-2.5-flash-lite",
          systemInstruction: `You are a useful AI assistant that answers user general questions.
Always respond in a concise and clear manner.
The format of the respose MUST be in Markdown unless the user specifically asks for another format.
If you do not know the answer, just say you do not know.
Do not try to make up an answer.
          `,
          generationConfig: {
            // responseModalities: [ResponseModality.TEXT, ResponseModality.IMAGE],
            thinkingConfig: {
              includeThoughts: true,
              thinkingBudget: 1024,
            },
          },
        },
        tools: {
          getWeather: tool({
            description: "Get the current weather for a location",
            inputSchema: z.object({
              city: z.string().describe("The city name"),
              country: z.string().optional().describe("The country code"),
            }),
            execute: async ({ city, country }) => {
              // Simulate API delay
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
        },
      }),
    [],
  );

  const { messages, status, error, sendMessage, stop, regenerate } = useChat<
    UIMessage<GroundingMetadata>
  >({
    id: "super-admin-chat",
    transport,
  });

  const handleSubmit = (
    message: PromptInputMessage,
    event: React.FormEvent,
  ) => {
    event.preventDefault();
    const hasText = message.text?.trim();
    const hasFiles = message.files && message.files.length > 0;

    if (hasText && hasFiles) {
      sendMessage({ text: message.text!, files: message.files });
    } else if (hasText) {
      sendMessage({ text: message.text! });
    } else if (hasFiles) {
      sendMessage({ files: message.files! });
    }
    setInputValue("");
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      toast.error(
        `Failed to copy to clipboard (${
          error instanceof Error ? error.message : "Unknown error"
        })`,
      );
    }
  };

  const showSuggestions = messages.length === 0 && status === "ready";

  return (
    <Box
      sx={{
        height: "calc(100vh - var(--jun-H-h))",
        display: "flex",
        flexDirection: "column",
        maxWidth: 896,
        margin: "0 auto",
        p: 2,
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
                <Typography>
                  Start a conversation with the AI assistant
                </Typography>
              </Box>
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                {messages.map((message) => {
                  const messageText = message.parts
                    ?.filter((part) => part.type === "text")
                    .map((part) => part.text)
                    .join("\n");

                  const renderedContent =
                    message.metadata?.searchEntryPoint?.renderedContent;
                  return (
                    <Message key={message.id} from={message.role}>
                      <MessageAvatar
                        name={message.role === "user" ? "User" : "AI Assistant"}
                      />
                      <MessageContent variant="flat">
                        {message.parts?.map((part, index: number) => {
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
                              <Box key={index}>
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
                        {renderedContent && (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: renderedContent,
                            }}
                          />
                        )}
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

                {/* Loading indicator - only show before streaming starts */}
                {status === "submitted" && (
                  <Message from="assistant">
                    <MessageAvatar name="AI Assistant" />
                    <MessageContent variant="flat">
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <CircularProgress size="sm" />
                        <Typography sx={{ color: "text.secondary" }}>
                          Thinking...
                        </Typography>
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
                        <Typography sx={{ color: "danger.plainColor" }}>
                          {error.message ||
                            "An error occurred. Please try again."}
                        </Typography>
                      </Box>
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
                  Streaming response...
                </Typography>
              </Box>
            )}
          </ConversationContent>

          <ConversationScrollButton />
        </Conversation>
      </Box>

      <Box>
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
      </Box>

      {/* Input Area */}
      <PromptInput onSubmit={handleSubmit} accept="image/*" multiple>
        <PromptInputAttachments>
          {(attachment) => <PromptInputAttachment data={attachment} />}
        </PromptInputAttachments>
        <PromptInputBody>
          <PromptInputTextarea
            placeholder="Ask me about Scrapee"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={status === "submitted" || error != null}
          />
        </PromptInputBody>
        <PromptInputToolbar>
          <PromptInputTools>
            <PromptInputActionMenu>
              <PromptInputActionMenuTrigger />
              <PromptInputActionMenuContent>
                <PromptInputActionAddAttachments />
              </PromptInputActionMenuContent>
            </PromptInputActionMenu>
          </PromptInputTools>
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
