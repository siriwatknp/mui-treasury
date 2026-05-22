'use client';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { Fixture, Section } from '../_components/layout';
import { Measured } from '../_components/measured';

// Visual fixture: mui-treasury theme Button family (scales.ts CONTROL_HEIGHTS).
const SIZES = ['small', 'medium', 'large'] as const;
const COLORS = [
  'primary',
  'secondary',
  'success',
  'error',
  'warning',
  'info',
] as const;

export default function Page() {
  return (
    <Fixture title="Button">
      <Section title="Contained — sizes">
        {SIZES.map((size) => (
          <Measured key={size} width={false}>
            <Button variant="contained" size={size}>
              Button
            </Button>
          </Measured>
        ))}
      </Section>

      <Section title="Variants (medium)">
        {(['contained', 'outlined', 'text'] as const).map((variant) => (
          <Measured key={variant} width={false}>
            <Button variant={variant}>Button</Button>
          </Measured>
        ))}
      </Section>

      <Section title="Contained — colors">
        {COLORS.map((color) => (
          <Button key={color} variant="contained" color={color}>
            {color}
          </Button>
        ))}
      </Section>

      <Section title="Outlined — colors">
        {COLORS.map((color) => (
          <Button key={color} variant="outlined" color={color}>
            {color}
          </Button>
        ))}
      </Section>

      <Section title="Disabled / with icons">
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="contained" startIcon={<FavoriteIcon />}>
          Like
        </Button>
        <Button variant="outlined" endIcon={<AddIcon />}>
          Add
        </Button>
      </Section>

      <Section title="IconButton — sizes">
        {SIZES.map((size) => (
          <Measured key={size}>
            <IconButton size={size} color="primary">
              <FavoriteIcon />
            </IconButton>
          </Measured>
        ))}
      </Section>

      <Section title="ToggleButtonGroup">
        <ToggleButtonGroup exclusive value="left">
          <ToggleButton value="left">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center">
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right">
            <FormatAlignRightIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Section>

      <Section title="Fab — sizes">
        {SIZES.map((size) => (
          <Measured key={size}>
            <Fab size={size} color="primary">
              <AddIcon />
            </Fab>
          </Measured>
        ))}
      </Section>
    </Fixture>
  );
}
