'use client';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

/**
 * Test page for verifying input-family control heights match the scale system
 * across extra states (label, start/end adornment, multiline single row).
 *
 * Heights are asserted on the inner `.MuiInputBase-root`, not the outer
 * wrapper — the mui-treasury theme renders the outlined label ABOVE the field
 * (static position), so the wrapper box is taller than the control itself.
 * Every control is wrapped in a testid'd Box so the `.MuiInputBase-root`
 * descendant locator is uniform across components.
 *
 * Expected control heights from scales.ts:
 * - Desktop: sm=32, md=36, lg=42
 * - Touch (<=768px): sm=34, md=40, lg=48
 */
const SIZES = ['small', 'medium', 'large'] as const;
const SIZE_KEY = { small: 'sm', medium: 'md', large: 'lg' } as const;

const start = (
  <InputAdornment position="start">
    <SearchIcon fontSize="small" />
  </InputAdornment>
);
const end = (
  <InputAdornment position="end">
    <SearchIcon fontSize="small" />
  </InputAdornment>
);

function Field({
  id,
  size,
  children,
}: {
  id: string;
  size: (typeof SIZES)[number];
  children: React.ReactNode;
}) {
  return <Box data-testid={`${id}-${SIZE_KEY[size]}`}>{children}</Box>;
}

export default function InputHeightsTestPage() {
  return (
    <Box sx={{ p: 4, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Input Heights Test Page
      </Typography>

      {/* TextField - Outlined */}
      <Section title="TextField - base">
        {SIZES.map((size) => (
          <Field key={size} id="tf-base" size={size}>
            <TextField size={size} placeholder="Base" />
          </Field>
        ))}
      </Section>

      <Section title="TextField - label">
        {SIZES.map((size) => (
          <Field key={size} id="tf-label" size={size}>
            <TextField size={size} label="Label" />
          </Field>
        ))}
      </Section>

      <Section title="TextField - start adornment">
        {SIZES.map((size) => (
          <Field key={size} id="tf-start" size={size}>
            <TextField
              size={size}
              placeholder="Start"
              slotProps={{ input: { startAdornment: start } }}
            />
          </Field>
        ))}
      </Section>

      <Section title="TextField - end adornment">
        {SIZES.map((size) => (
          <Field key={size} id="tf-end" size={size}>
            <TextField
              size={size}
              placeholder="End"
              slotProps={{ input: { endAdornment: end } }}
            />
          </Field>
        ))}
      </Section>

      <Section title="TextField - multiline (1 row)">
        {SIZES.map((size) => (
          <Field key={size} id="tf-multiline" size={size}>
            <TextField size={size} multiline rows={1} placeholder="Multiline" />
          </Field>
        ))}
      </Section>

      {/* OutlinedInput */}
      <Section title="OutlinedInput - base">
        {SIZES.map((size) => (
          <Field key={size} id="oi-base" size={size}>
            <OutlinedInput size={size} placeholder="Base" />
          </Field>
        ))}
      </Section>

      <Section title="OutlinedInput - start adornment">
        {SIZES.map((size) => (
          <Field key={size} id="oi-start" size={size}>
            <OutlinedInput
              size={size}
              placeholder="Start"
              startAdornment={start}
            />
          </Field>
        ))}
      </Section>

      <Section title="OutlinedInput - end adornment">
        {SIZES.map((size) => (
          <Field key={size} id="oi-end" size={size}>
            <OutlinedInput size={size} placeholder="End" endAdornment={end} />
          </Field>
        ))}
      </Section>

      <Section title="OutlinedInput - multiline (1 row)">
        {SIZES.map((size) => (
          <Field key={size} id="oi-multiline" size={size}>
            <OutlinedInput
              size={size}
              multiline
              rows={1}
              placeholder="Multiline"
            />
          </Field>
        ))}
      </Section>

      {/* Select - Outlined */}
      <Section title="Select - base">
        {SIZES.map((size) => (
          <Field key={size} id="select-base" size={size}>
            <Select size={size} value="1" sx={{ minWidth: 120 }}>
              <MenuItem value="1">Base</MenuItem>
            </Select>
          </Field>
        ))}
      </Section>

      <Section title="Select - label">
        {SIZES.map((size) => (
          <Field key={size} id="select-label" size={size}>
            <InputLabel id={`select-label-id-${SIZE_KEY[size]}`}>
              Label
            </InputLabel>
            <Select
              size={size}
              value="1"
              labelId={`select-label-id-${SIZE_KEY[size]}`}
              label="Label"
              sx={{ minWidth: 120 }}
            >
              <MenuItem value="1">Label</MenuItem>
            </Select>
          </Field>
        ))}
      </Section>

      <Section title="Select - start adornment">
        {SIZES.map((size) => (
          <Field key={size} id="select-start" size={size}>
            <Select
              size={size}
              value="1"
              startAdornment={start}
              sx={{ minWidth: 120 }}
            >
              <MenuItem value="1">Start</MenuItem>
            </Select>
          </Field>
        ))}
      </Section>

      {/* Autocomplete - Outlined */}
      <Section title="Autocomplete - base">
        {SIZES.map((size) => (
          <Field key={size} id="ac-base" size={size}>
            <Autocomplete
              size={size}
              options={['Option 1']}
              sx={{ minWidth: 200 }}
              renderInput={(params) => (
                <TextField {...params} placeholder="Base" />
              )}
            />
          </Field>
        ))}
      </Section>

      <Section title="Autocomplete - label">
        {SIZES.map((size) => (
          <Field key={size} id="ac-label" size={size}>
            <Autocomplete
              size={size}
              options={['Option 1']}
              sx={{ minWidth: 200 }}
              renderInput={(params) => <TextField {...params} label="Label" />}
            />
          </Field>
        ))}
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
      <Typography variant="subtitle2" sx={{ mb: 1, color: 'text.secondary' }}>
        {title}
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        sx={{ alignItems: 'flex-start', flexWrap: 'wrap' }}
      >
        {children}
      </Stack>
    </Box>
  );
}
