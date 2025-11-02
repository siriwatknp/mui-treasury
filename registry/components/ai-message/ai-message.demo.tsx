"use client";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Message, MessageContent, MessageAvatar } from "./ai-message";

export default function AIMessageDemo() {
  return (
    <Box sx={{ width: "100%", maxWidth: 896, mx: "auto", p: 4 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Box>
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, color: "text.secondary", mb: 2 }}
          >
            Message Types
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {/* User Message */}
            <Message from="user">
              <MessageContent>
                <Typography variant="body2">
                  How do I create a custom hook in React?
                </Typography>
              </MessageContent>
              <MessageAvatar name="User" />
            </Message>

            {/* Assistant Message */}
            <Message from="assistant">
              <MessageContent>
                <Typography variant="body2">
                  To create a custom hook in React, follow these steps:
                </Typography>
                <Box
                  component="ol"
                  sx={{
                    listStyleType: "decimal",
                    listStylePosition: "inside",
                    mt: 1,
                    "& li": { mb: 0.5 },
                  }}
                >
                  <Typography component="li" variant="body2">
                    Start the function name with "use"
                  </Typography>
                  <Typography component="li" variant="body2">
                    Call other hooks inside if needed
                  </Typography>
                  <Typography component="li" variant="body2">
                    Return necessary values
                  </Typography>
                </Box>
              </MessageContent>
              <MessageAvatar name="AI" />
            </Message>

            {/* User Message with longer content */}
            <Message from="user">
              <MessageAvatar name="User" />
              <MessageContent>
                <Typography variant="body2">
                  Can you show me an example?
                </Typography>
              </MessageContent>
            </Message>

            {/* Assistant Message with code */}
            <Message from="assistant">
              <MessageAvatar name="AI" />
              <MessageContent>
                <Typography variant="body2">
                  Here's a simple example of a custom hook:
                </Typography>
                <Paper
                  variant="outlined"
                  component="pre"
                  sx={{
                    mt: 1,
                    p: 1,
                    bgcolor: "background.default",
                    borderRadius: 1,
                    fontSize: "0.75rem",
                    overflowX: "auto",
                  }}
                >
                  <code>{`function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return { count, increment, decrement };
}`}</code>
                </Paper>
              </MessageContent>
            </Message>
          </Box>
        </Box>

        <Box>
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, color: "text.secondary", mb: 2 }}
          >
            Flat Variant
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Message from="user">
              <MessageAvatar name="User" />
              <MessageContent variant="flat">
                <Typography variant="body2">
                  What about TypeScript support?
                </Typography>
              </MessageContent>
            </Message>

            <Message from="assistant">
              <MessageAvatar name="AI" />
              <MessageContent variant="flat">
                <Typography variant="body2">
                  TypeScript works great with custom hooks. You can add type
                  annotations for parameters and return values:
                </Typography>
                <Paper
                  variant="outlined"
                  component="pre"
                  sx={{
                    mt: 1,
                    p: 1,
                    bgcolor: "background.default",
                    borderRadius: 1,
                    fontSize: "0.75rem",
                    overflowX: "auto",
                  }}
                >
                  <code>{`function useCounter(initialValue: number = 0) {
  const [count, setCount] = useState<number>(initialValue);
  // ...
}`}</code>
                </Paper>
              </MessageContent>
            </Message>
          </Box>
        </Box>

        <Box>
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, color: "text.secondary", mb: 2 }}
          >
            Avatar Positioning
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", display: "block", mb: 2 }}
          >
            The avatar position automatically adjusts based on the order of
            children
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {/* Avatar after content for user messages */}
            <Message from="user">
              <MessageContent>
                <Typography variant="body2">
                  Avatar appears on the right for user messages
                </Typography>
              </MessageContent>
              <MessageAvatar name="John" />
            </Message>

            {/* Avatar before content for assistant messages */}
            <Message from="assistant">
              <MessageAvatar name="Bot" />
              <MessageContent>
                <Typography variant="body2">
                  Avatar appears on the left for assistant messages
                </Typography>
              </MessageContent>
            </Message>

            {/* Avatar can also be placed differently */}
            <Message from="user">
              <MessageAvatar name="Jane" />
              <MessageContent>
                <Typography variant="body2">
                  When avatar is placed first for user messages, it appears on
                  the left
                </Typography>
              </MessageContent>
            </Message>

            <Message from="assistant">
              <MessageContent>
                <Typography variant="body2">
                  When avatar is placed last for assistant messages, it appears
                  on the right
                </Typography>
              </MessageContent>
              <MessageAvatar name="AI" />
            </Message>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
