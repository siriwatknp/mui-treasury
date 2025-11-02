"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  PromptInput,
  PromptInputBody,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputTools,
  PromptInputButton,
  PromptInputSubmit,
  type PromptInputMessage,
} from "./ai-prompt-input";
import { PaperclipIcon, ImageIcon, MicIcon } from "lucide-react";

export default function AIPromptInputDemo() {
  const handleSubmit = (message: PromptInputMessage) => {
    console.log("Message:", message.text);
    console.log("Files:", message.files);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 672, mx: "auto", p: 4 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <Box>
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, color: "text.secondary", mb: 1 }}
          >
            Basic Prompt Input
          </Typography>
          <PromptInput onSubmit={handleSubmit}>
            <PromptInputBody>
              <PromptInputTextarea placeholder="Ask me anything..." />
            </PromptInputBody>
            <PromptInputToolbar>
              <PromptInputTools>
                <PromptInputButton onClick={() => console.log("Attach")}>
                  <PaperclipIcon size={16} />
                </PromptInputButton>
                <PromptInputButton onClick={() => console.log("Image")}>
                  <ImageIcon size={16} />
                </PromptInputButton>
              </PromptInputTools>
              <PromptInputSubmit />
            </PromptInputToolbar>
          </PromptInput>
        </Box>

        <Box>
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, color: "text.secondary", mb: 1 }}
          >
            With Additional Tools
          </Typography>
          <PromptInput onSubmit={handleSubmit}>
            <PromptInputBody>
              <PromptInputTextarea placeholder="Type your message here..." />
            </PromptInputBody>
            <PromptInputToolbar>
              <PromptInputTools>
                <PromptInputButton onClick={() => console.log("Attach")}>
                  <PaperclipIcon size={16} />
                  <Typography variant="caption">Attach</Typography>
                </PromptInputButton>
                <PromptInputButton onClick={() => console.log("Image")}>
                  <ImageIcon size={16} />
                  <Typography variant="caption">Image</Typography>
                </PromptInputButton>
                <PromptInputButton onClick={() => console.log("Voice")}>
                  <MicIcon size={16} />
                  <Typography variant="caption">Voice</Typography>
                </PromptInputButton>
              </PromptInputTools>
              <PromptInputSubmit />
            </PromptInputToolbar>
          </PromptInput>
        </Box>

        <Box>
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, color: "text.secondary", mb: 1 }}
          >
            Loading State
          </Typography>
          <PromptInput onSubmit={handleSubmit}>
            <PromptInputBody>
              <PromptInputTextarea placeholder="Processing..." disabled />
            </PromptInputBody>
            <PromptInputToolbar>
              <PromptInputTools>
                <PromptInputButton disabled>
                  <PaperclipIcon size={16} />
                </PromptInputButton>
              </PromptInputTools>
              <PromptInputSubmit status="streaming" disabled />
            </PromptInputToolbar>
          </PromptInput>
        </Box>
      </Box>
    </Box>
  );
}
