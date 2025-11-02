# MUI+ AI Chat - Advanced Demo

A comprehensive demonstration of an AI chatbot built with **Next.js 15**, **Material UI v7**, and **Vercel AI SDK** connected to a local **Ollama** instance.

This example showcases 8 scenarios including tool execution, source citations, and AI reasoning display.

## Quick Start

1. Install and run [Ollama](https://ollama.com) with `ollama pull llama3.2`
2. Run `pnpm install && pnpm dev`
3. Open [http://localhost:3000](http://localhost:3000)
4. Try asking: "What's the weather in San Francisco?" to see tool execution with sources and reasoning!

## Features Implemented

### Phase 1: MVP (Scenarios 1-3) ✅

**Scenario 1: Basic Text Chat**

- Real-time streaming AI responses
- User and assistant message display
- Loading indicators during AI processing
- Auto-scroll to bottom behavior
- Comprehensive error handling:
  - Error messages displayed in chat
  - Retry button to regenerate failed responses
  - Input disabled during error state
  - Console logging via `onError` callback

**Scenario 2: Interactive Input with Suggestions**

- Multi-line textarea with auto-resize
- Pre-defined suggestion chips
- Keyboard shortcuts (Enter to submit, Shift+Enter for new line)
- Status-aware submit button
- Stop button during streaming (click to cancel response)
- Input enabled during streaming to allow interruption

**Scenario 3: Code Blocks**

- Syntax highlighting for code snippets
- Copy-to-clipboard functionality
- Support for multiple programming languages
- Markdown rendering in responses

### Phase 2: Enhanced UX ✅

**Scenario 4: Chat with Message Actions**

- Copy button on AI messages (copies response text to clipboard)
- Regenerate button to retry last AI response
- Hover tooltips for action buttons
- Actions appear only on assistant messages

**Scenario 5: Chat with File Attachments**

- Image upload via click or drag & drop
- Image preview before sending
- Support for multiple images (max 5)
- Image display in both user and assistant messages
- Auto-clearing of attachments after send
- Visual attachment previews with remove buttons
- Smart submit button (enabled when text or images present)

### Phase 3: Advanced Features ✅

**Scenario 6: Chat with Tool Execution**

- Three demo tools: getWeather, getCurrentTime, calculateSum
- Tool execution status badges (Pending/Running/Completed/Error)
- Collapsible tool interface
- Parameter display with JSON formatting
- Result/error output display
- Status-aware color coding
- Animated "Running" state indicator

**Scenario 7: Chat with Sources & Citations**

- Context-aware source display based on message content
- Collapsible source list with "Used X sources" trigger
- External links to relevant documentation
- Smart source detection for:
  - Weather queries → Weather APIs
  - Time queries → Time/Date APIs
  - Code queries → React/TypeScript/MDN docs
  - Math calculations → Math reference docs
- Book icon indicators for each source
- Opens links in new tab with proper rel attributes

**Scenario 8: Chat with Reasoning Display**

- AI thinking process displayed before responses
- Auto-opens during streaming, auto-closes after completion
- Duration tracking ("Thought for X seconds")
- Collapsible interface with brain icon
- Context-aware reasoning for:
  - Weather queries → Tool usage and data formatting
  - Time queries → API call planning
  - Code queries → Best practices and structure analysis
  - Calculations → Mathematical approach breakdown
- Manual toggle to re-read reasoning after auto-close
- Markdown formatting for step-by-step reasoning

## Prerequisites

### 1. Install Ollama

Download and install Ollama from [https://ollama.com](https://ollama.com)

### 2. Pull the Model

```bash
ollama pull llama3.2
```

### 3. Verify Ollama is Running

```bash
ollama serve
```

Ollama should be running on `http://localhost:11434`

## Getting Started

### Install Dependencies

```bash
pnpm install
```

### Pull Theme and AI Elements

```bash
npx shadcn-ui@latest add https://mui-treasury.com/r/mui-plus.json
npx shadcn-ui@latest add https://mui-treasury.com/r/ai-elements.json
```

### Enable the ThemeProvider in `app/layout.tsx`

Uncomment the `ThemeProvider` component wrapping `{children}` in `app/layout.tsx`.

```tsx
import { ThemeProvider } from "@/mui-plus/theme";

<ThemeProvider>{children}</ThemeProvider>;
```

### Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
examples/nextjs-ai-chat/
├── app/
│   ├── api/chat/route.ts       # API endpoint with tool definitions
│   ├── layout.tsx               # Root layout with MUI providers
│   └── page.tsx                 # Main chat interface with all scenarios
├── src/
│   └── mui-plus/
│       └── components/          # Reusable AI UI components
│           ├── ai-conversation/ # Scrollable chat container
│           ├── ai-message/      # Message display components
│           ├── ai-response/     # Markdown renderer with Streamdown
│           ├── ai-loader/       # Loading spinner
│           ├── ai-prompt-input/ # Input area with file attachments
│           ├── ai-suggestion/   # Suggestion chips
│           ├── ai-actions/      # Message action buttons
│           ├── ai-tool/         # Tool execution display
│           ├── ai-sources/      # Source citations
│           └── ai-reasoning/    # AI thinking process display
├── AI_CHATBOT_ANALYSIS.md      # Complete scenario roadmap
└── package.json
```

## How It Works

### Backend (API Route)

The `/api/chat` route (`app/api/chat/route.ts`) handles:

1. Receiving messages from the client
2. Connecting to Ollama using `ollama-ai-provider-v2`
3. Defining and executing tools (getWeather, getCurrentTime, calculateSum)
4. Streaming responses back using `streamText` from Vercel AI SDK
5. Multi-step tool calling with `stopWhen: stepCountIs(5)`

### Frontend (Chat Page)

The main chat page (`app/page.tsx`) implements:

- **State Management**: `useChat` hook from `@ai-sdk/react`
- **Message Display**: Message, MessageContent, MessageAvatar components
- **Rich Responses**: Markdown rendering with Streamdown
- **Tool Execution**: Tool, ToolHeader, ToolInput, ToolOutput components
- **Source Citations**: Sources, SourcesTrigger, Source components
- **AI Reasoning**: Reasoning, ReasoningTrigger, ReasoningContent components
- **File Uploads**: PromptInputAttachments with drag & drop support
- **Message Actions**: Copy and regenerate buttons
- **Auto-scroll**: Smooth scrolling with `use-stick-to-bottom`

## Available Tools

The example includes three demonstration tools:

1. **getWeather**: Get weather information for a city

   - Parameters: `city` (string), `unit` (celsius/fahrenheit)
   - Returns: temperature, condition, humidity

2. **getCurrentTime**: Get current date and time

   - Parameters: none
   - Returns: time, date, ISO timestamp

3. **calculateSum**: Calculate sum of two numbers
   - Parameters: `a` (number), `b` (number)
   - Returns: result, operation

Ask questions that trigger these tools (e.g., "What's the weather in San Francisco?") to see tool execution in action.

## Tech Stack

### Core Dependencies

- **Next.js 15** - React framework with App Router
- **Material UI v7** - Component library
- **Vercel AI SDK 5.0** - AI streaming and state management
- **@ai-sdk/react 2.0** - React hooks for AI SDK
- **ollama-ai-provider-v2 1.5** - Ollama integration

### UI Components

- **lucide-react** - Icons
- **streamdown** - Streaming markdown renderer
- **react-syntax-highlighter** - Code syntax highlighting
- **use-stick-to-bottom** - Auto-scroll behavior

## Customization

### Change the Model

Edit `app/api/chat/route.ts`:

```typescript
const result = streamText({
  model: ollama("qwen2.5"), // Change model here
  messages: modelMessages,
  temperature: 0.7,
  stopWhen: stepCountIs(5),
  tools: {
    // Your tools here
  },
});
```

### Add More Suggestions

Edit `app/page.tsx`:

```typescript
const SUGGESTED_PROMPTS = [
  "What's the weather like in San Francisco?",
  "Write a React component for a todo list",
  // Add more...
];
```

### Adjust Ollama URL

Edit `app/api/chat/route.ts`:

```typescript
const ollama = createOllama({
  baseURL: "http://your-ollama-server:11434",
});
```

## Troubleshooting

### "Failed to process chat request"

**Solution:** Make sure Ollama is running:

```bash
ollama serve
```

### "Model not found"

**Solution:** Pull the model:

```bash
ollama pull llama3.2
```

### Port Already in Use

**Solution:** Use a different port:

```bash
pnpm dev -- -p 3001
```

## Next Steps

To extend this prototype with additional scenarios from the analysis document:

- **Scenario 9**: Response branching (⭐⭐⭐⭐)
- **Scenario 10**: Chain of thought (⭐⭐⭐⭐)
- **Scenario 11**: Artifacts panel (⭐⭐⭐⭐)
- **Scenario 12**: Web preview (⭐⭐⭐⭐⭐)
- **Scenario 13**: Complete experience (⭐⭐⭐⭐⭐)

Refer to `AI_CHATBOT_ANALYSIS.md` for the complete roadmap.

## License

This project is part of the MUI+ component registry.
