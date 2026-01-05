# Color Picker Field - Context Session

## Visual Design Analysis

### Component Overview

A TextField-based color picker that displays the selected color as both a swatch and hex value, with a popover containing a color picker (saturation/brightness area + hue slider).

### Structure Breakdown

```
┌─────────────────────────────────────────────────┐
│ Input label                                     │  <- Typography (label outside)
│ Input description                               │  <- Typography (helper text style)
├─────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────┐ │
│ │ (●) #ffffff                                 │ │  <- TextField with startAdornment
│ └─────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────┐ │
│ │ ┌─────────────────────────────────────────┐ │ │  <- Popover
│ │ │                                         │ │ │
│ │ │     Saturation/Brightness Picker        │ │ │  <- react-colorful HexColorPicker
│ │ │                                         │ │ │
│ │ └─────────────────────────────────────────┘ │ │
│ │ ┌─────────────────────────────────────────┐ │ │
│ │ │ ○ ═══════════════════════════════════   │ │ │  <- Hue slider (part of HexColorPicker)
│ │ └─────────────────────────────────────────┘ │ │
│ └─────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────┘
```

### Key Components

- **TextField** (outlined variant) - main input showing hex value
- **InputAdornment** (start) - color swatch circle
- **Popover** - container for color picker
- **HexColorPicker** from react-colorful - saturation/brightness + hue picker

### Theme Mapping

- TextField: outlined variant (default)
- Color swatch: circular Box with bgcolor set to selected color
- Popover: default MUI popover styling

### Layout Details

- Color swatch: ~24x24px circle in startAdornment
- Hex value: displayed as text in input (read-only visually, but editable)
- Popover anchored to TextField, opens below

### Interaction

1. User clicks TextField -> Popover opens with color picker
2. User selects color in picker -> onChange called with hex value
3. Popover closes on click away

### Accessibility Considerations

- TextField maintains proper label association
- Popover has proper focus management
- Color swatch has appropriate aria-hidden (decorative)
- Keyboard navigation support

---

## Implementation Notes

- Using react-colorful HexColorPicker for simplicity
- TextField is read-only (user picks from color picker, not typing)
- Controlled component with value/onChange pattern
- Support standard TextField props (label, helperText, etc.)

## Implementation Summary

### Component Structure

- `ColorPickerField` wraps MUI TextField with color picker functionality
- Uses `InputAdornment` with color swatch circle (24x24px) on start
- `Popover` anchored to TextField displays `HexColorPicker` from react-colorful
- Click on TextField opens popover, click away closes it

### Key Decisions

- TextField `readOnly` - user must use color picker (no manual hex input)
- Color swatch has `border: 1px solid divider` for visibility on white backgrounds
- Cursor set to `pointer` on input to indicate clickability
- Default value `#000000` if not provided
- Forwards ref and spreads remaining TextField props

### Files Created

- `registry/components/color-picker-field/color-picker-field.tsx` - main component
- `app/color-picker-field/page.tsx` - preview page
- `registry/components/color-picker-field/color-picker-field.meta.json` - registry meta

### Dependencies

- `react-colorful` - lightweight color picker library
- `@mui/material` - TextField, Popover, InputAdornment, Box
