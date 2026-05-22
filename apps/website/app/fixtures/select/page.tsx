'use client';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { Fixture, Section } from '../_components/layout';
import { Measured } from '../_components/measured';

// Visual fixture: mui-treasury theme Select (scales.ts CONTROL_HEIGHTS).
const SIZES = ['small', 'medium', 'large'] as const;
const OPTIONS = ['Apple', 'Banana', 'Cherry'];

export default function Page() {
  return (
    <Fixture title="Select">
      <Section title="Base — sizes">
        {SIZES.map((size) => (
          <Measured key={size}>
            <Select size={size} value="Apple" sx={{ minWidth: 160 }}>
              {OPTIONS.map((o) => (
                <MenuItem key={o} value={o}>
                  {o}
                </MenuItem>
              ))}
            </Select>
          </Measured>
        ))}
      </Section>

      <Section title="With label — sizes">
        {SIZES.map((size) => (
          <Measured key={size}>
            <FormControl size={size} sx={{ minWidth: 160 }}>
              <InputLabel id={`s-${size}`}>Fruit</InputLabel>
              <Select labelId={`s-${size}`} label="Fruit" value="Apple">
                {OPTIONS.map((o) => (
                  <MenuItem key={o} value={o}>
                    {o}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Measured>
        ))}
      </Section>

      <Section title="Multiple (chips)">
        {SIZES.map((size) => (
          <Measured key={size}>
            <FormControl size={size} sx={{ minWidth: 220 }}>
              <InputLabel id={`m-${size}`}>Fruits</InputLabel>
              <Select
                multiple
                labelId={`m-${size}`}
                label="Fruits"
                value={['Apple', 'Banana']}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                    {selected.map((v) => (
                      <Chip key={v} label={v} size="small" />
                    ))}
                  </Box>
                )}
              >
                {OPTIONS.map((o) => (
                  <MenuItem key={o} value={o}>
                    {o}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Measured>
        ))}
      </Section>

      <Section title="States">
        <FormControl disabled sx={{ minWidth: 160 }}>
          <InputLabel id="disabled">Disabled</InputLabel>
          <Select labelId="disabled" label="Disabled" value="Apple">
            <MenuItem value="Apple">Apple</MenuItem>
          </Select>
        </FormControl>
        <FormControl error sx={{ minWidth: 160 }}>
          <InputLabel id="error">Error</InputLabel>
          <Select labelId="error" label="Error" value="">
            <MenuItem value="Apple">Apple</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>
      </Section>
    </Fixture>
  );
}
