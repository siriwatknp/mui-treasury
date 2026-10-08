import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export const interaction = ['popup'];

const countries = [
  'Argentina', 'Australia', 'Austria', 'Belgium', 'Brazil', 'Canada', 'Chile', 'Colombia', 'Denmark', 'Egypt',
  'Finland', 'France', 'Germany', 'Greece', 'India', 'Indonesia', 'Ireland', 'Italy', 'Japan', 'Kenya',
  'Mexico', 'Netherlands', 'New Zealand', 'Norway', 'Peru', 'Portugal', 'South Africa', 'Spain', 'Sweden', 'Thailand',
];

export default function LongList() {
  return <Autocomplete options={countries} sx={{ width: 260 }} renderInput={(params) => <TextField {...params} label="Country" />} />;
}
