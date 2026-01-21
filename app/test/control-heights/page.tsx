"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import FormatBoldIcon from "@mui/icons-material/FormatBold";

/**
 * Test page for verifying MUI control heights match the scale system.
 * Each component is rendered with data-testid for Playwright assertions.
 *
 * Expected heights from scales.ts:
 * - Desktop: sm=32, md=36, lg=42
 * - Touch (<=768px): sm=34, md=40, lg=48
 *
 * Switch uses separate scale:
 * - Desktop: sm={h:22,w:36}, md={h:28,w:44}
 * - Touch: sm={h:28,w:44}, md={h:34,w:56}
 */
export default function ControlHeightsTestPage() {
  return (
    <Box sx={{ p: 4, maxWidth: 1200, mx: "auto" }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Control Heights Test Page
      </Typography>

      {/* Button - all variants */}
      <Section title="Button - Contained">
        <Button
          variant="contained"
          size="small"
          data-testid="button-contained-sm"
        >
          Small
        </Button>
        <Button
          variant="contained"
          size="medium"
          data-testid="button-contained-md"
        >
          Medium
        </Button>
        <Button
          variant="contained"
          size="large"
          data-testid="button-contained-lg"
        >
          Large
        </Button>
      </Section>

      <Section title="Button - Outlined">
        <Button variant="outlined" size="small" data-testid="button-outlined-sm">
          Small
        </Button>
        <Button
          variant="outlined"
          size="medium"
          data-testid="button-outlined-md"
        >
          Medium
        </Button>
        <Button variant="outlined" size="large" data-testid="button-outlined-lg">
          Large
        </Button>
      </Section>

      <Section title="Button - Text">
        <Button variant="text" size="small" data-testid="button-text-sm">
          Small
        </Button>
        <Button variant="text" size="medium" data-testid="button-text-md">
          Medium
        </Button>
        <Button variant="text" size="large" data-testid="button-text-lg">
          Large
        </Button>
      </Section>

      {/* ToggleButton */}
      <Section title="ToggleButton">
        <ToggleButtonGroup value="bold">
          <ToggleButton
            value="bold"
            size="small"
            data-testid="toggle-button-sm"
          >
            <FormatBoldIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup value="bold">
          <ToggleButton
            value="bold"
            size="medium"
            data-testid="toggle-button-md"
          >
            <FormatBoldIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup value="bold">
          <ToggleButton
            value="bold"
            size="large"
            data-testid="toggle-button-lg"
          >
            <FormatBoldIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Section>

      {/* TextField - Outlined */}
      <Section title="TextField - Outlined">
        <TextField
          variant="outlined"
          size="small"
          placeholder="Small"
          data-testid="textfield-outlined-sm"
        />
        <TextField
          variant="outlined"
          size="medium"
          placeholder="Medium"
          data-testid="textfield-outlined-md"
        />
        <TextField
          variant="outlined"
          size="large"
          placeholder="Large"
          data-testid="textfield-outlined-lg"
        />
      </Section>

      {/* Select - Outlined */}
      <Section title="Select - Outlined">
        <Select
          variant="outlined"
          size="small"
          value="1"
          data-testid="select-outlined-sm"
          sx={{ minWidth: 120 }}
        >
          <MenuItem value="1">Small</MenuItem>
        </Select>
        <Select
          variant="outlined"
          size="medium"
          value="1"
          data-testid="select-outlined-md"
          sx={{ minWidth: 120 }}
        >
          <MenuItem value="1">Medium</MenuItem>
        </Select>
        <Select
          variant="outlined"
          size="large"
          value="1"
          data-testid="select-outlined-lg"
          sx={{ minWidth: 120 }}
        >
          <MenuItem value="1">Large</MenuItem>
        </Select>
      </Section>

      {/* Autocomplete - Outlined */}
      <Section title="Autocomplete - Outlined">
        <Autocomplete
          size="small"
          options={["Option 1"]}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Small"
              data-testid="autocomplete-outlined-sm"
            />
          )}
          sx={{ minWidth: 200 }}
        />
        <Autocomplete
          size="medium"
          options={["Option 1"]}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Medium"
              data-testid="autocomplete-outlined-md"
            />
          )}
          sx={{ minWidth: 200 }}
        />
        <Autocomplete
          size="large"
          options={["Option 1"]}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Large"
              data-testid="autocomplete-outlined-lg"
            />
          )}
          sx={{ minWidth: 200 }}
        />
      </Section>

      {/* Chip - all sizes */}
      <Section title="Chip">
        <Chip label="Small" size="small" data-testid="chip-sm" />
        <Chip label="Medium" size="medium" data-testid="chip-md" />
        <Chip label="Large" size="large" data-testid="chip-lg" />
      </Section>

      {/* Checkbox */}
      <Section title="Checkbox">
        <Checkbox size="small" data-testid="checkbox-sm" />
        <Checkbox size="medium" data-testid="checkbox-md" />
        <Checkbox size="large" data-testid="checkbox-lg" />
      </Section>

      {/* Radio */}
      <Section title="Radio">
        <Radio size="small" data-testid="radio-sm" />
        <Radio size="medium" data-testid="radio-md" />
        <Radio size="large" data-testid="radio-lg" />
      </Section>

      {/* Switch */}
      <Section title="Switch">
        <Switch size="small" data-testid="switch-sm" />
        <Switch size="medium" data-testid="switch-md" />
      </Section>
    </Box>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="subtitle2" sx={{ mb: 1, color: "text.secondary" }}>
        {title}
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
        {children}
      </Stack>
    </Box>
  );
}
