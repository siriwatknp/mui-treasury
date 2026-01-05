# File Upload Field - Context Session

## Component Overview

A file input component built on Material UI TextField that allows users to select files from their machine. The startAdornment dynamically displays an icon based on the selected file's extension.

---

## Visual Design Analysis

### Key Components

- **Base**: MUI TextField (outlined variant)
- **startAdornment**: Dynamic icon based on file extension
- **Input**: Hidden file input triggered by clicking the field
- **Display**: Shows filename when file is selected, placeholder otherwise

### Icon Mapping Strategy

Map common file extensions to Material UI icons:

- **Images** (jpg, jpeg, png, gif, svg, webp): `ImageIcon`
- **PDF**: `PictureAsPdfIcon`
- **Documents** (doc, docx): `DescriptionIcon`
- **Spreadsheets** (xls, xlsx, csv): `TableChartIcon`
- **Code** (js, ts, jsx, tsx, html, css, json): `CodeIcon`
- **Audio** (mp3, wav, ogg): `AudioFileIcon`
- **Video** (mp4, webm, avi, mov): `VideoFileIcon`
- **Archive** (zip, rar, 7z, tar, gz): `FolderZipIcon`
- **Text** (txt, md): `ArticleIcon`
- **Default/No file**: `AttachFileIcon`

### Layout

```
┌─────────────────────────────────────────────────┐
│ [Icon] | Select a file...              [Button] │
└─────────────────────────────────────────────────┘

When file selected:
┌─────────────────────────────────────────────────┐
│ [📄] | document.pdf                    [Clear]  │
└─────────────────────────────────────────────────┘
```

### Theme Mapping

- Icon color: `text.secondary` (changes to `text.primary` when file selected)
- TextField: outlined variant, fullWidth by default
- Clear button: IconButton with `text.secondary` color

---

## Accessibility Analysis

### Critical Points

1. **Keyboard Navigation**:
   - Field must be focusable and trigger file dialog on Enter/Space
   - Clear button must be keyboard accessible

2. **Screen Reader Support**:
   - Use `aria-label` to describe the input purpose
   - Announce file selection changes with `aria-live`
   - Hidden file input should be properly labeled

3. **Visual Indicators**:
   - Clear focus states on the TextField
   - Icon provides visual cue for file type (supplementary, not sole indicator)

4. **WCAG Compliance**:
   - Ensure contrast ratios for icons and text
   - Provide text-based filename display (not icon-only)

---

## Implementation Notes

- Use `useRef` to programmatically trigger hidden file input
- Forward TextField props for full customization
- Support `accept` prop for file type filtering
- Support `onChange` callback with File object
- Optional `onClear` callback when file is removed

---

## Work Summary

### Completed

- Created `FileUploadField` component at `registry/components/file-upload-field/file-upload-field.tsx`
  - Based on MUI TextField with hidden file input
  - Dynamic icon mapping via `getFileIcon()` function
  - Supports: images, PDF, docs, spreadsheets, code, audio, video, archives, text
  - Clear button in endAdornment when file selected
  - Keyboard accessible (Enter/Space triggers file dialog)
  - Forwards all TextField props via `slotProps`
- Created preview page at `app/file-upload-field/page.tsx`
  - Shows three variants: default, image-only, disabled
- Type check passed (no errors)
