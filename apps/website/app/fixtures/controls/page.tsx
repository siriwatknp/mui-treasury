'use client';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Switch from '@mui/material/Switch';

import { Fixture, Section } from '../_components/layout';
import { Measured } from '../_components/measured';

// Visual fixture: mui-treasury theme Checkbox / Radio / Switch.
// Switch sizes are driven by scales.ts SWITCH_SIZES (sm 36×24, md 44×28, lg 52×32).
// Note: Checkbox `large` style exists in the theme but the prop type isn't augmented,
// so only sm/md are typed-safe here.
const RADIO_SWITCH_SIZES = ['small', 'medium', 'large'] as const;

export default function Page() {
  return (
    <Fixture title="Controls">
      <Section title="Checkbox — sizes (checked)">
        {(['small', 'medium'] as const).map((size) => (
          <Measured key={size}>
            <Checkbox defaultChecked size={size} />
          </Measured>
        ))}
      </Section>

      <Section title="Radio — sizes (checked)">
        {RADIO_SWITCH_SIZES.map((size) => (
          <Measured key={size}>
            <Radio checked size={size} />
          </Measured>
        ))}
      </Section>

      <Section title="Switch — sizes (checked)">
        {RADIO_SWITCH_SIZES.map((size) => (
          <Measured key={size}>
            <Switch defaultChecked size={size} />
          </Measured>
        ))}
      </Section>

      <Section title="Checkbox — states">
        <FormControlLabel control={<Checkbox />} label="Unchecked" />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Checked"
        />
        <FormControlLabel
          control={<Checkbox indeterminate />}
          label="Indeterminate"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked disabled />}
          label="Disabled"
        />
      </Section>

      <Section title="Radio group">
        <RadioGroup row defaultValue="read">
          <FormControlLabel value="read" control={<Radio />} label="Read" />
          <FormControlLabel value="write" control={<Radio />} label="Write" />
          <FormControlLabel value="admin" control={<Radio />} label="Admin" />
          <FormControlLabel
            value="none"
            control={<Radio />}
            label="None"
            disabled
          />
        </RadioGroup>
      </Section>

      <Section title="Switch — settings rows">
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Notifications"
        />
        <FormControlLabel control={<Switch />} label="Auto-update" />
        <FormControlLabel
          control={<Switch defaultChecked disabled />}
          label="Locked"
        />
      </Section>
    </Fixture>
  );
}
