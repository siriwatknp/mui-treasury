"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  OpenIn,
  OpenInTrigger,
  OpenInContent,
  OpenInLabel,
  OpenInSeparator,
  OpenInChatGPT,
  OpenInClaude,
  OpenInv0,
} from "./ai-open-in-chat";

export default function AIOpenInChatDemo() {
  const query = "How to implement authentication in Next.js with TypeScript?";

  return (
    <Box sx={{ width: "100%", maxWidth: 768, mx: "auto", p: 4 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Box>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            Open in Chat Demo
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
            Open your query in various AI chat applications
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, fontStyle: "italic" }}>
            Query: &quot;{query}&quot;
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <OpenIn query={query}>
            <OpenInTrigger />
            <OpenInContent>
              <OpenInLabel>Choose a chat application</OpenInLabel>
              <OpenInSeparator />
              <OpenInChatGPT />
              <OpenInClaude />
              <OpenInv0 />
            </OpenInContent>
          </OpenIn>

          <OpenIn query="Build a todo app with React">
            <OpenInTrigger>
              {/* Custom trigger button will be rendered here */}
            </OpenInTrigger>
            <OpenInContent>
              <OpenInLabel>Open in AI Chat</OpenInLabel>
              <OpenInSeparator />
              <OpenInChatGPT />
              <OpenInClaude />
            </OpenInContent>
          </OpenIn>
        </Box>
      </Box>
    </Box>
  );
}
