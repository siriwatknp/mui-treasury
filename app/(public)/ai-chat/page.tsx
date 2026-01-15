"use client";

import React, { useState } from "react";

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
import { Response } from "@/mui-treasury/components/ai-response/ai-response";
import {
  Suggestion,
  Suggestions,
} from "@/mui-treasury/components/ai-suggestion/ai-suggestion";
import { useChat } from "@ai-sdk/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { DefaultChatTransport } from "ai";
import { Bot, CopyIcon, RefreshCwIcon, SquareIcon } from "lucide-react";
import { toast } from "sonner";

const SUGGESTED_PROMPTS = [
  "What is the difference between React and Vue?",
  "Explain how async/await works in JavaScript.",
];

export default function AIChatPage() {
  const [inputValue, setInputValue] = useState("");

  const transport = React.useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/chat",
      }),
    [],
  );

  const { messages, status, error, sendMessage, stop, regenerate } = useChat({
    id: "ai-chat",
    transport,
    onData: (data) => {
      console.log("data", data);
    },
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
                                  maxWidth: 300,
                                  maxHeight: 300,
                                  borderRadius: 1,
                                  mt: index > 0 ? 1 : 0,
                                }}
                              />
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
                        <CircularProgress size="sm" />
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

      <PromptInput onSubmit={handleSubmit} accept="image/*" multiple>
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
