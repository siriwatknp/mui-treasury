# Dropzone-01 Context Session

## Overview

A primitive dropzone component integrating `react-dropzone` with Material UI, providing drag-and-drop file upload functionality with visual feedback.

## Visual Design Analysis

### Key Components

- **Container**: Box with dashed border for dropzone area
- **Icon**: Upload cloud icon (CloudUploadOutlined from @mui/icons-material)
- **Typography**: Primary instruction text + secondary helper text
- **File List**: Shows accepted files with name and size

### Theme Mapping

- **Border**: Dashed 2px with `divider` color, transitions to `primary.main` on drag
- **Background**: `action.hover` on drag active, `success.light` on accept, `error.light` on reject
- **Text**: `text.secondary` for instructions
- **Icon**: `text.icon` color, 48px size
- **Spacing**: `p: 4` internal padding, `gap: 1` between elements

### Layout

```
┌─────────────────────────────────────────────┐
│              ┌───────────────┐              │
│              │   ☁️ Upload    │              │
│              └───────────────┘              │
│                                             │
│    Drag & drop files here, or click to      │
│                   browse                    │
│                                             │
│         PNG, JPG, PDF up to 10MB           │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ ✓ document.pdf (2.5 MB)              ✕     │
│ ✓ image.png (1.2 MB)                 ✕     │
└─────────────────────────────────────────────┘
```

### Accessibility

- Focusable via keyboard (tabIndex)
- Screen reader announces dropzone purpose
- ARIA live region for file upload feedback
- Clear visual states for drag accept/reject
- Focus ring visible on keyboard navigation

## API Design

```tsx
interface DropzoneProps {
  accept?: Record<string, string[]>; // MIME types
  maxSize?: number; // bytes
  maxFiles?: number;
  disabled?: boolean;
  onDrop?: (files: File[]) => void;
  onDropRejected?: (rejections: FileRejection[]) => void;
}
```

## Implementation Notes

- Use `useDropzone` hook from react-dropzone
- getRootProps and getInputProps for accessibility
- Visual feedback via isDragActive, isDragAccept, isDragReject
- Display file list with remove option

## Work Summary (Iteration 1)

- **Created `dropzone-01.tsx`**: Primitive dropzone component integrating `react-dropzone` with Material UI
  - Controlled component pattern with `value`/`onChange` props
  - Supports `accept`, `maxSize`, `maxFiles`, `disabled` options from react-dropzone
  - Visual feedback for drag states (active, accept, reject, focused)
  - Dashed border styling with smooth transitions
  - File list display with thumbnail preview for images
  - Remove button for each uploaded file
  - Proper file size formatting utility
  - Accessible with keyboard navigation and proper ARIA attributes via react-dropzone

- **Created preview page**: `/app/dropzone-01/page.tsx` for testing
  - Demonstrates controlled state management
  - Configured to accept images and PDFs up to 10MB

- **Dependencies added**: `react-dropzone` (v14.3.8)

- **Registry entry created**:
  - Category: `primitive`
  - Subcategory: `dropzone`
  - Tags: `dropzone`, `file-upload`, `drag-drop`
