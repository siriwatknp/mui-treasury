'use client';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DateField } from '@mui/x-date-pickers/DateField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

import { Fixture, Section } from '../_components/layout';
import { Measured } from '../_components/measured';

// Visual fixture: mui-treasury theme date pickers (scales.ts CONTROL_HEIGHTS).
// Fixed date — pickers default to today, which is non-deterministic for baselines.
const SIZES = ['small', 'medium', 'large'] as const;
const DATE = dayjs('2024-05-21');

export default function Page() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Fixture title="Date Picker">
        <Section title="DatePicker — sizes">
          {SIZES.map((size) => (
            <Measured key={size}>
              <DatePicker
                label="Date"
                defaultValue={DATE}
                slotProps={{ textField: { size } }}
                sx={{ width: 220 }}
              />
            </Measured>
          ))}
        </Section>

        <Section title="DateField — sizes">
          {SIZES.map((size) => (
            <Measured key={size}>
              <DateField
                label="Date"
                defaultValue={DATE}
                size={size}
                sx={{ width: 220 }}
              />
            </Measured>
          ))}
        </Section>

        <Section title="States">
          <DatePicker
            label="Disabled"
            defaultValue={DATE}
            disabled
            sx={{ width: 220 }}
          />
          <DatePicker
            label="Error"
            defaultValue={DATE}
            slotProps={{ textField: { error: true, helperText: 'Invalid' } }}
            sx={{ width: 220 }}
          />
        </Section>

        <Section title="Static calendar">
          <DateCalendar defaultValue={DATE} />
        </Section>
      </Fixture>
    </LocalizationProvider>
  );
}
