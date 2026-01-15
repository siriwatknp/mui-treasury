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
} from "@/registry/components/ai-prompt-input/ai-prompt-input";
import { Response } from "@/registry/components/ai-response/ai-response";
import {
  Suggestion,
  Suggestions,
} from "@/registry/components/ai-suggestion/ai-suggestion";
import { UIMessage, useChat } from "@ai-sdk/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { CopyIcon, ImageIcon, RefreshCwIcon, SquareIcon } from "lucide-react";
import { toast } from "sonner";

const SUGGESTED_PROMPTS = [
  "What objects can you identify in this image?",
  "Describe this image in detail",
  "Extract any text visible in this image",
  "What emotions or mood does this image convey?",
];

export default function FirebaseAnalyzeImage() {
  const [inputValue, setInputValue] = useState("");

  const transport = React.useMemo(
    () =>
      app
        ? new FirebaseChatTransport({
            firebaseApp: app,
            modelParams: {
              model: "gemini-2.5-flash",
              systemInstruction: `You are a helpful AI assistant specialized in image analysis.
When the user shares an image, analyze it thoroughly and provide detailed insights.
If no image is provided, politely ask the user to share an image for analysis.
Always respond in a clear and organized manner using Markdown formatting.`,
            },
          })
        : null,
    [],
  );

  const { messages, status, error, sendMessage, stop, regenerate } =
    useChat<UIMessage>({
      id: "firebase-analyze-image",
      transport: transport!,
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
      toast.success("Copied to clipboard");
    } catch (err) {
      toast.error(
        `Failed to copy (${err instanceof Error ? err.message : "Unknown error"})`,
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
                <ImageIcon size={48} />
                <Typography variant="h4" sx={{ fontWeight: 500 }}>
                  Analyze Image
                </Typography>
                <Typography color="text.secondary">
                  Upload an image to analyze
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
                            part.type === "file" &&
                            part.mediaType?.startsWith("image/")
                          ) {
                            return (
                              <Box
                                key={index}
                                component="img"
                                src={part.url}
                                alt={part.filename || "uploaded image"}
                                sx={{
                                  maxWidth: "100%",
                                  height: "auto",
                                  borderRadius: 2,
                                  my: 1,
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
                    <MessageAvatar name="AI" />
                    <MessageContent variant="flat">
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <CircularProgress size={20} />
                        <Typography sx={{ color: "text.secondary" }}>
                          Analyzing image...
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
                <Typography sx={{ color: "text.secondary" }}>
                  Analyzing...
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

      <PromptInput onSubmit={handleSubmit} accept="image/*" multiple>
        <PromptInputAttachments>
          {(attachment) => <PromptInputAttachment data={attachment} />}
        </PromptInputAttachments>
        <PromptInputBody>
          <PromptInputTextarea
            placeholder="Ask about the image or upload one to analyze..."
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
