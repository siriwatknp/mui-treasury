'use client';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import { Fixture, Section } from '../_components/layout';
import { Measured } from '../_components/measured';

// Visual fixture: mui-treasury theme TextField / input family (scales.ts CONTROL_HEIGHTS).
const SIZES = ['small', 'medium', 'large'] as const;
const start = (
  <InputAdornment position="start">
    <SearchIcon fontSize="small" />
  </InputAdornment>
);

export default function Page() {
  return (
    <Fixture title="TextField">
      <Section title="Base — sizes">
        {SIZES.map((size) => (
          <Measured key={size}>
            <TextField size={size} placeholder="Base" sx={{ width: 220 }} />
          </Measured>
        ))}
      </Section>

      <Section title="With label — sizes">
        {SIZES.map((size) => (
          <Measured key={size}>
            <TextField size={size} label="Label" sx={{ width: 220 }} />
          </Measured>
        ))}
      </Section>

      <Section title="Start adornment — sizes">
        {SIZES.map((size) => (
          <Measured key={size}>
            <TextField
              size={size}
              placeholder="Search"
              sx={{ width: 220 }}
              slotProps={{ input: { startAdornment: start } }}
            />
          </Measured>
        ))}
      </Section>

      <Section title="Multiline">
        <Measured>
          <TextField
            label="Notes"
            multiline
            rows={3}
            defaultValue={'Line one\nLine two'}
            sx={{ width: 280 }}
          />
        </Measured>
      </Section>

      <Section title="Variants (medium)">
        {(['outlined', 'filled', 'standard'] as const).map((variant) => (
          <Measured key={variant}>
            <TextField
              variant={variant}
              label="Label"
              defaultValue="Value"
              sx={{ width: 200 }}
            />
          </Measured>
        ))}
      </Section>

      <Section title="States">
        <TextField
          label="Error"
          error
          helperText="Required"
          sx={{ width: 220 }}
        />
        <TextField
          label="Disabled"
          disabled
          defaultValue="Value"
          sx={{ width: 220 }}
        />
        <TextField
          label="Helper"
          helperText="Some helper text"
          sx={{ width: 220 }}
        />
      </Section>
    </Fixture>
  );
}
