"use client";

import React, { useState } from "react";

import { FirebaseChatTransport } from "./firebase-chat-transport";
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
import {
  PromptInput,
  PromptInputBody,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputToolbar,
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
import { useChat } from "@ai-sdk/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { Bot, CopyIcon, RefreshCwIcon, SquareIcon } from "lucide-react";
import { toast } from "sonner";

const SUGGESTED_PROMPTS = [
  "List all of the reports available in Scrapee separated by platform, respond in Thai.",
  "Explain the Line notification feature in Scrapee and how to set it up.",
];

export default function AIAssistantPage() {
  const [inputValue, setInputValue] = useState("");

  const transport = React.useMemo(
    () =>
      new FirebaseChatTransport({
        firebaseApp: app,
        modelParams: {
          model: "gemini-2.5-flash",
          // systemInstruction: '',
          // tools: [{ googleSearch: {} }],
          generationConfig: {
            thinkingConfig: {
              includeThoughts: true,
            },
          },
        },
      }),
    []
  );

  const { messages, status, error, sendMessage, stop, regenerate } = useChat({
    id: "super-admin-chat",
    transport,
  });

  const handleSubmit = (
    message: PromptInputMessage,
    event: React.FormEvent
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
    } catch (error) {
      toast.error(
        `Failed to copy to clipboard (${
          error instanceof Error ? error.message : "Unknown error"
        })`
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
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {messages.map((message) => {
                  const messageText = message.parts
                    ?.filter((part) => part.type === "text")
                    .map((part) => part.text)
                    .join("\n");

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
      <PromptInput onSubmit={handleSubmit}>
        <PromptInputBody>
          <PromptInputTextarea
            placeholder="Ask me about Scrapee"
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
              disabled={
                status === "submitted" || error != null || !inputValue.trim()
              }
            />
          )}
        </PromptInputToolbar>
      </PromptInput>
    </Box>
  );
}
