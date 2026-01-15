# Firebase Google Search Demo

## Overview

A Firebase chat demo that implements Google Search grounding using `FirebaseChatTransport` with `enableGoogleSearch: true`.

## Key Features

- Google Search grounding for real-time, up-to-date information
- Display grounding metadata (sources, search queries)
- Clickable source links from search results

## Grounding Metadata Structure

From `FirebaseChatTransport`:

- `webSearchQueries: string[]` - Search queries used
- `searchEntryPoint: { renderedContent: string }` - Required HTML to render
- `groundingChunks: Array<{ web: { uri, title } }>` - Source links
- `groundingSupports: Array<{ segment, groundingChunkIndices, confidenceScores }>` - Citation mapping

## UI Components

- Chat conversation with messages
- Grounding sources displayed below AI responses
- Search queries shown as chips/tags
- Source links as clickable cards

## Layout

```
┌─────────────────────────────────────┐
│ Header: Firebase + Google Search    │
├─────────────────────────────────────┤
│ Conversation Area                   │
│ ┌─────────────────────────────────┐ │
│ │ User message                    │ │
│ └─────────────────────────────────┘ │
│ ┌─────────────────────────────────┐ │
│ │ AI response with markdown       │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │ Sources (grounding chunks)  │ │ │
│ │ │ [Source 1] [Source 2] ...   │ │ │
│ │ └─────────────────────────────┘ │ │
│ └─────────────────────────────────┘ │
├─────────────────────────────────────┤
│ Prompt Input                        │
│ [Text input...        ] [Send]      │
└─────────────────────────────────────┘
```

## Accessibility

- Source links have proper aria-labels
- Keyboard navigation for all interactive elements
- Screen reader announces new messages

## Work Summary

- [x] Created `firebase-google-search.tsx` component
  - Uses `FirebaseChatTransport` with `enableGoogleSearch: true`
  - Displays grounding metadata (sources, search queries) using `ai-sources` component
  - Shows search queries as Chip components with search icon
  - Source links displayed in collapsible section below AI responses
- [x] Created `firebase-google-search.meta.json` registry metadata
- [x] Created preview page at `app/(public)/firebase-google-search/page.tsx`
- [x] Tested with Playwright - component renders correctly
- [x] Generated registry JSON via script
