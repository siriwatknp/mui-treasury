# AI Elements to Material UI Conversion Task List

## Overview

Converting all ai-elements from Tailwind CSS/Radix UI to Material UI components.

## Conversion Guidelines

- Replace Tailwind CSS classes with MUI sx prop and theme
- Replace Radix UI components with MUI equivalents
- Maintain the same functionality and visual design
- Follow MUI theming best practices from CLAUDE.md

## Components to Convert

### 1. [x] ai-actions

**Current:** Uses Radix Tooltip, Tailwind classes, custom Button
**Target:** MUI Tooltip, IconButton/Button, Box with sx prop
**Files:**

- `registry/components/ai-actions/ai-actions.tsx`

### 2. [x] ai-artifact

**Current:** Uses Tailwind classes
**Target:** MUI Box, Typography, Paper components
**Files:**

- `registry/components/ai-artifact/ai-artifact.tsx`

### 3. [x] ai-branch

**Current:** Uses Tailwind classes, custom components
**Target:** MUI components with sx prop
**Files:**

- `registry/components/ai-branch/ai-branch.tsx`

### 4. [x] ai-chain-of-thought

**Current:** Uses Tailwind classes
**Target:** MUI components
**Files:**

- `registry/components/ai-chain-of-thought/ai-chain-of-thought.tsx`

### 5. [x] ai-code-block

**Current:** Uses Tailwind classes, custom Button
**Target:** MUI Paper, IconButton, Box
**Files:**

- `registry/components/ai-code-block/ai-code-block.tsx`

### 6. [x] ai-context

**Current:** Uses Tailwind classes
**Target:** MUI components
**Files:**

- `registry/components/ai-context/ai-context.tsx`

### 7. [x] ai-conversation

**Current:** Uses Tailwind classes
**Target:** MUI Stack, Box components
**Files:**

- `registry/components/ai-conversation/ai-conversation.tsx`

### 8. [x] ai-image

**Current:** Uses Tailwind classes
**Target:** MUI Box component
**Files:**

- `registry/components/ai-image/ai-image.tsx`

### 9. [x] ai-inline-citation

**Current:** Uses Radix Popover, Tailwind classes
**Target:** MUI Popover/Popper, Typography
**Files:**

- `registry/components/ai-inline-citation/ai-inline-citation.tsx`

### 10. [x] ai-loader

**Current:** Uses Tailwind classes
**Target:** MUI Box, CircularProgress or custom animation
**Files:**

- `registry/components/ai-loader/ai-loader.tsx`

### 11. [x] ai-message

**Current:** Uses Tailwind classes
**Target:** MUI Box, Avatar, Typography
**Files:**

- `registry/components/ai-message/ai-message.tsx`

### 12. [x] ai-open-in-chat

**Current:** Uses Radix Dialog, Tailwind classes
**Target:** MUI Dialog, DialogTitle, DialogContent
**Files:**

- `registry/components/ai-open-in-chat/ai-open-in-chat.tsx`

### 13. [ ] ai-prompt-input

**Current:** Uses Tailwind classes, custom form components
**Target:** MUI TextField, IconButton, Box
**Files:**

- `registry/components/ai-prompt-input/ai-prompt-input.tsx`

### 14. [ ] ai-reasoning

**Current:** Uses Radix Collapsible, Tailwind classes
**Target:** MUI Accordion or Collapse component
**Files:**

- `registry/components/ai-reasoning/ai-reasoning.tsx`

### 15. [ ] ai-response

**Current:** Uses Tailwind classes
**Target:** MUI Box, Typography
**Files:**

- `registry/components/ai-response/ai-response.tsx`

### 16. [ ] ai-sources

**Current:** Uses Radix Popover, Tailwind classes
**Target:** MUI Popover, List components
**Files:**

- `registry/components/ai-sources/ai-sources.tsx`

### 17. [ ] ai-suggestion

**Current:** Uses Tailwind classes, custom Button
**Target:** MUI Chip or Button components
**Files:**

- `registry/components/ai-suggestion/ai-suggestion.tsx`

### 18. [ ] ai-task

**Current:** Uses Tailwind classes
**Target:** MUI Box, Typography, LinearProgress
**Files:**

- `registry/components/ai-task/ai-task.tsx`

### 19. [ ] ai-tool

**Current:** Uses Radix Collapsible, custom Badge, Tailwind classes
**Target:** MUI Accordion, Chip, Box components
**Files:**

- `registry/components/ai-tool/ai-tool.tsx`

### 20. [ ] ai-web-preview

**Current:** Uses Tailwind classes
**Target:** MUI Card, Box components
**Files:**

- `registry/components/ai-web-preview/ai-web-preview.tsx`

## Progress Notes

- Each component will be converted one at a time
- After each conversion, review will be requested
- Commit changes after approval
- Mark with [x] when completed and approved

## Conversion Workflow

1. Read and analyze the current component
2. Convert to Material UI components
3. Fix any TypeScript errors
4. Request review
5. After approval: commit changes and mark complete in task file
6. Move to next component
