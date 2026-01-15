# Firebase Tool Calling Demo

## Overview

A Firebase chat demo showcasing tool calling capabilities with Gemini AI.

## Visual Design Analysis

### Key Components

- **Conversation area**: Display messages with `ai-conversation` components
- **Message bubbles**: User and assistant messages with `ai-message`
- **Tool calls display**: Show tool invocations with `ai-tool` (ToolHeader, ToolContent, ToolInput, ToolOutput)
- **Prompt input**: Text input with submit button using `ai-prompt-input`
- **Suggestions**: Initial prompt suggestions with `ai-suggestion`
- **Actions**: Copy/regenerate buttons with `ai-actions`

### Layout

```
┌─────────────────────────────────────────┐
│           Conversation Area             │
│  ┌───────────────────────────────────┐  │
│  │ [Avatar] User message             │  │
│  └───────────────────────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │ [Avatar] Assistant                │  │
│  │  ┌─────────────────────────────┐  │  │
│  │  │ Tool: get_weather           │  │  │
│  │  │ Input: {"city": "Tokyo"}    │  │  │
│  │  │ Output: {"temp": "22°C"}    │  │  │
│  │  └─────────────────────────────┘  │  │
│  │  Response text here...            │  │
│  │  [Copy] [Regenerate]              │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │ Scroll to bottom button           │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│ [Suggestion 1] [Suggestion 2]           │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│ [Textarea input...              ] [Send]│
└─────────────────────────────────────────┘
```

### Theme Mapping

- Primary palette for interactive elements
- `text.secondary` for metadata
- `grey.100`/`grey.900` for tool call backgrounds
- Standard spacing (2 for sections, 1-1.5 for inline elements)

## Accessibility Attention Points

1. **Tool call display**: Use semantic structure with proper headings
2. **Keyboard navigation**: Full tab order through messages and actions
3. **Screen reader**: Announce tool calls and their status
4. **Focus management**: Return focus appropriately after actions

## Tools to Implement

Example tools for demo:

- `get_weather`: Get weather for a city
- `get_time`: Get current time for a timezone

## Work Summary

- [ ] Create main component with FirebaseChatTransport
- [ ] Implement tool calling with ai-tool components
- [ ] Add suggestions and actions
- [ ] Create preview page
- [ ] Test and screenshot
