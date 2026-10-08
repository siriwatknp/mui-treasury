import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export const interaction = ['popup'];

const countries = [
  'Argentina', 'Australia', 'Austria', 'Belgium', 'Brazil', 'Canada', 'Chile', 'Colombia', 'Denmark', 'Egypt',
  'Finland', 'France', 'Germany', 'Greece', 'India', 'Indonesia', 'Ireland', 'Italy', 'Japan', 'Kenya',
  'Mexico', 'Netherlands', 'New Zealand', 'Norway', 'Peru', 'Portugal', 'South Africa', 'Spain', 'Sweden', 'Thailand',
];

export default function LongList() {
  return (
    <FormControl sx={{ width: 260 }}>
      <InputLabel id="long-list-label">Country</InputLabel>
      <Select labelId="long-list-label" label="Country" defaultValue="Argentina">
        {countries.map((c) => (
          <MenuItem key={c} value={c}>
            {c}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
