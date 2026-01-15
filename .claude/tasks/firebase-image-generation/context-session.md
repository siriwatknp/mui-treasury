# Firebase Image Generation Demo

## Overview

A chat interface that demonstrates Firebase AI's interleaved text and image generation using `gemini-2.5-flash-image` model.

## Visual Design Analysis

### Layout Structure

```
┌─────────────────────────────────────────┐
│ Header: "Image Generation"              │
├─────────────────────────────────────────┤
│                                         │
│  Conversation Area                      │
│  ┌─────────────────────────────────┐    │
│  │ User message                    │    │
│  └─────────────────────────────────┘    │
│  ┌─────────────────────────────────┐    │
│  │ AI response with generated      │    │
│  │ image inline                    │    │
│  │ ┌─────────────┐                 │    │
│  │ │  Generated  │                 │    │
│  │ │   Image     │                 │    │
│  │ └─────────────┘                 │    │
│  │ Description text continues...   │    │
│  └─────────────────────────────────┘    │
│                                         │
├─────────────────────────────────────────┤
│ ┌─────────────────────────────────────┐ │
│ │ Prompt input                        │ │
│ │ [Text area] [Send]                  │ │
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

### Key Components

- Header with title
- Conversation container with scroll
- Message bubbles (user/assistant)
- Generated images displayed inline with text
- Prompt input with send button

### Theme Mapping

- Primary color for user messages
- Background paper for assistant messages
- Border radius: 2-3 for messages
- Spacing: 1-2 between messages

### Accessibility

- Proper alt text for generated images
- Keyboard navigation for input
- Screen reader support for messages
- Focus management

## Implementation Notes

- Use `gemini-2.0-flash-exp-image-generation` model
- Enable `ResponseModality.TEXT` and `ResponseModality.IMAGE`
- Handle `file` chunks for image display
- Images come as base64 data URLs

## Work Summary

### Created Files

- `registry/firebase/firebase-image-generation/firebase-image-generation.tsx` - Main component
- `registry/firebase/firebase-image-generation/firebase-image-generation.meta.json` - Registry metadata
- `app/(public)/firebase-image-generation/page.tsx` - Preview page

### Key Implementation Details

- Uses `gemini-2.0-flash-exp-image-generation` model with `ResponseModality.TEXT` and `ResponseModality.IMAGE`
- Images emitted as `file` chunks with base64 data URLs are rendered inline
- Includes 4 suggested prompts for image generation
- Handles Firebase not configured state gracefully
- Copy and regenerate actions for assistant messages
- Stop button during streaming
