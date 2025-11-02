"use client";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "./ai-conversation";

export default function AIConversationDemo() {
  return (
    <Paper
      variant="outlined"
      sx={{
        width: "100%",
        height: 400,
        overflow: "hidden",
        display: "flex",
      }}
    >
      <Conversation>
        <ConversationContent>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {/* Simulated conversation messages */}
            <Paper
              sx={{
                p: 1.5,
                bgcolor: "action.hover",
                maxWidth: "80%",
              }}
            >
              <Typography variant="body2">
                Hello! How can I help you today?
              </Typography>
            </Paper>

            <Paper
              sx={{
                p: 1.5,
                bgcolor: "primary.main",
                color: "primary.contrastText",
                maxWidth: "80%",
                ml: "auto",
              }}
            >
              <Typography variant="body2">
                I need help with React components.
              </Typography>
            </Paper>

            <Paper
              sx={{
                p: 1.5,
                bgcolor: "action.hover",
                maxWidth: "80%",
              }}
            >
              <Typography variant="body2">
                I&apos;d be happy to help you with React components! What
                specific aspect would you like to explore?
              </Typography>
            </Paper>

            <Paper
              sx={{
                p: 1.5,
                bgcolor: "primary.main",
                color: "primary.contrastText",
                maxWidth: "80%",
                ml: "auto",
              }}
            >
              <Typography variant="body2">
                How do I manage state in functional components?
              </Typography>
            </Paper>

            <Paper
              sx={{
                p: 1.5,
                bgcolor: "action.hover",
                maxWidth: "80%",
              }}
            >
              <Typography variant="body2" sx={{ mb: 1 }}>
                In functional React components, you can manage state using
                hooks:
              </Typography>
              <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                <Typography component="li" variant="body2" sx={{ mb: 0.5 }}>
                  useState for local component state
                </Typography>
                <Typography component="li" variant="body2" sx={{ mb: 0.5 }}>
                  useReducer for complex state logic
                </Typography>
                <Typography component="li" variant="body2">
                  useContext for global state sharing
                </Typography>
              </Box>
            </Paper>

            {/* Add more messages to demonstrate scrolling */}
            {Array.from({ length: 10 }, (_, i) => (
              <Paper
                key={i}
                sx={{
                  p: 1.5,
                  bgcolor: i % 2 === 0 ? "action.hover" : "primary.main",
                  color: i % 2 === 0 ? "text.primary" : "primary.contrastText",
                  maxWidth: "80%",
                  ...(i % 2 !== 0 && { ml: "auto" }),
                }}
              >
                <Typography variant="body2">Message {i + 6}</Typography>
              </Paper>
            ))}
          </Box>
        </ConversationContent>

        <ConversationScrollButton />
      </Conversation>
    </Paper>
  );
}
