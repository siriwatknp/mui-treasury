'use client';
import DoneIcon from '@mui/icons-material/Done';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

import { Fixture, Section } from '../_components/layout';
import { Measured } from '../_components/measured';

// Visual fixture: mui-treasury theme Chip (scales.ts CONTROL_HEIGHTS, large augmented).
const SIZES = ['small', 'medium', 'large'] as const;
const COLORS = [
  'default',
  'primary',
  'secondary',
  'success',
  'error',
  'warning',
  'info',
] as const;

export default function Page() {
  return (
    <Fixture title="Chip">
      <Section title="Filled — sizes">
        {SIZES.map((size) => (
          <Measured key={size}>
            <Chip label="Chip" size={size} />
          </Measured>
        ))}
      </Section>

      <Section title="Outlined — sizes">
        {SIZES.map((size) => (
          <Measured key={size}>
            <Chip label="Chip" variant="outlined" size={size} />
          </Measured>
        ))}
      </Section>

      <Section title="Filled — colors">
        {COLORS.map((color) => (
          <Chip key={color} label={color} color={color} />
        ))}
      </Section>

      <Section title="Outlined — colors">
        {COLORS.map((color) => (
          <Chip key={color} label={color} variant="outlined" color={color} />
        ))}
      </Section>

      <Section title="Deletable / icon / avatar / disabled">
        <Chip label="Deletable" onDelete={() => {}} />
        <Chip label="Outlined" variant="outlined" onDelete={() => {}} />
        <Chip label="Icon" icon={<DoneIcon />} color="success" />
        <Chip label="Avatar" avatar={<Avatar>M</Avatar>} />
        <Chip label="Disabled" disabled />
      </Section>
    </Fixture>
  );
}
