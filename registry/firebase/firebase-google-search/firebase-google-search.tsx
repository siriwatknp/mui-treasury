"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import {
  Bot,
  CopyIcon,
  RefreshCwIcon,
  SearchIcon,
  SquareIcon,
} from "lucide-react";
import { toast } from "sonner";
import { UIMessage, useChat } from "@ai-sdk/react";
import type { GroundingMetadata } from "firebase/ai";
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

const SUGGESTED_PROMPTS = [
  "What are the latest news about AI?",
  "What's the weather forecast for today?",
  "Who won the latest NBA game?",
];

export default function FirebaseGoogleSearch() {
  const [inputValue, setInputValue] = useState("");

  const transport = React.useMemo(
    () =>
      app
        ? new FirebaseChatTransport({
            firebaseApp: app,
            modelParams: {
              model: "gemini-2.5-flash",
              systemInstruction: `You are a helpful AI assistant with access to Google Search for up-to-date information.
When answering questions that require current information, use the search results to provide accurate, timely responses.
Always cite your sources when providing factual information.
Format responses in Markdown unless asked otherwise.`,
            },
            enableGoogleSearch: true,
          })
        : null,
    [],
  );

  const { messages, status, error, sendMessage, stop, regenerate } = useChat<
    UIMessage<GroundingMetadata>
  >({
    id: "firebase-google-search",
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
          p: 3,
        }}
      >
        <Typography color="error">
          Firebase not configured. Please set up Firebase credentials.
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
                  color: "text.secondary",
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <Bot size={48} />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: -4,
                      right: -4,
                      bgcolor: "background.paper",
                      borderRadius: "50%",
                      p: 0.5,
                    }}
                  >
                    <SearchIcon size={16} />
                  </Box>
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 500 }}>
                  Google Search Grounding
                </Typography>
                <Typography color="text.secondary" sx={{ textAlign: "center" }}>
                  Ask questions that need up-to-date information
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
                        name={message.role === "user" ? "You" : "AI"}
                      />
                      <MessageContent variant="flat">
                        {message.parts?.map((part, index) => {
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

                {status === "submitted" && (
                  <Message from="assistant">
                    <MessageAvatar name="AI" />
                    <MessageContent variant="flat">
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <CircularProgress size={16} />
                        <Typography color="text.secondary">
                          Searching...
                        </Typography>
                      </Box>
                    </MessageContent>
                  </Message>
                )}

                {error && (
                  <Message from="assistant">
                    <MessageAvatar name="AI" />
                    <MessageContent variant="flat">
                      <Typography color="error.main">
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
            placeholder="Ask something that needs current information..."
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
              sx={{ minWidth: "auto", borderRadius: 2, p: 1 }}
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
