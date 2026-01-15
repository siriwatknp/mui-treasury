"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { useChat } from "@ai-sdk/react";
import { Bot, SquareIcon } from "lucide-react";
import { app } from "@/lib/firebase-setup";
import { FirebaseChatTransport } from "@/registry/firebase/firebase-chat-transport";
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

export default function FirebaseGenerateText() {
  const [inputValue, setInputValue] = useState("");

  const transport = React.useMemo(
    () =>
      app
        ? new FirebaseChatTransport({
            firebaseApp: app,
            modelParams: {
              model: "gemini-2.0-flash",
            },
          })
        : null,
    [],
  );

  const { messages, status, error, sendMessage, stop } = useChat({
    id: "firebase-generate-text",
    transport: transport!,
  });

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

  const handleSubmit = (
    message: PromptInputMessage,
    event: React.FormEvent,
  ) => {
    event.preventDefault();
    const text = message.text?.trim();
    if (!text) return;

    sendMessage({ text });
    setInputValue("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 768,
        mx: "auto",
        width: "100%",
        height: "100%",
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
                  Generate Text
                </Typography>
                <Typography color="text.secondary">
                  Enter a prompt to generate text
                </Typography>
              </Box>
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                {messages.map((message) => (
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
                    </MessageContent>
                  </Message>
                ))}

                {/* Loading indicator */}
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

                {/* Error message */}
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
                  Streaming response...
                </Typography>
              </Box>
            )}
          </ConversationContent>

          <ConversationScrollButton />
        </Conversation>
      </Box>

      {/* Input Area */}
      <PromptInput onSubmit={handleSubmit}>
        <PromptInputBody>
          <PromptInputTextarea
            placeholder="Enter your prompt..."
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
