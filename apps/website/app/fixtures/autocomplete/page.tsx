'use client';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { Fixture, Section } from '../_components/layout';
import { Measured } from '../_components/measured';

// Visual fixture: mui-treasury theme Autocomplete across the size variants and
// states its styleOverrides target (scales.ts CONTROL_HEIGHTS + touch).
const SIZES = ['small', 'medium', 'large'] as const;
const OPTIONS = ['Apple', 'Banana', 'Cherry', 'Dragonfruit', 'Elderberry'];

export default function Page() {
  return (
    <Fixture title="Autocomplete">
      <Section title="Base">
        {SIZES.map((size) => (
          <Measured key={size}>
            <Autocomplete
              size={size}
              options={OPTIONS}
              sx={{ width: 240 }}
              renderInput={(params) => (
                <TextField {...params} placeholder="Base" />
              )}
            />
          </Measured>
        ))}
      </Section>

      <Section title="With label">
        {SIZES.map((size) => (
          <Measured key={size}>
            <Autocomplete
              size={size}
              options={OPTIONS}
              sx={{ width: 240 }}
              renderInput={(params) => <TextField {...params} label="Fruit" />}
            />
          </Measured>
        ))}
      </Section>

      <Section title="With value (clear + popup indicator)">
        {SIZES.map((size) => (
          <Measured key={size}>
            <Autocomplete
              size={size}
              defaultValue="Cherry"
              options={OPTIONS}
              sx={{ width: 240 }}
              renderInput={(params) => <TextField {...params} label="Fruit" />}
            />
          </Measured>
        ))}
      </Section>

      <Section title="Multiple (chips)">
        {SIZES.map((size) => (
          <Measured key={size}>
            <Autocomplete
              multiple
              size={size}
              defaultValue={['Apple', 'Banana']}
              options={OPTIONS}
              sx={{ width: 280 }}
              renderInput={(params) => <TextField {...params} label="Fruits" />}
            />
          </Measured>
        ))}
      </Section>

      <Section title="Disabled / error">
        <Measured>
          <Autocomplete
            disabled
            defaultValue="Cherry"
            options={OPTIONS}
            sx={{ width: 240 }}
            renderInput={(params) => <TextField {...params} label="Disabled" />}
          />
        </Measured>
        <Measured>
          <Autocomplete
            options={OPTIONS}
            sx={{ width: 240 }}
            renderInput={(params) => (
              <TextField
                {...params}
                error
                label="Error"
                helperText="Required"
              />
            )}
          />
        </Measured>
      </Section>

      <Section title="Open popup (paper / listbox / option)">
        {/* reserve space + lock placement so the inline listbox opens downward
            instead of flipping up over the section above */}
        <Box sx={{ minHeight: 320 }}>
          <Autocomplete
            open
            disablePortal
            options={OPTIONS}
            defaultValue="Cherry"
            sx={{ width: 280 }}
            slotProps={{
              popper: { modifiers: [{ name: 'flip', enabled: false }] },
            }}
            renderInput={(params) => <TextField {...params} label="Fruit" />}
          />
        </Box>
      </Section>
    </Fixture>
  );
}
