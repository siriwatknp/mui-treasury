"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  OutlinedInput,
  Select,
  MenuItem,
  Autocomplete,
  Stack,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Switch,
} from "@mui/material";

const autocompleteOptions = [
  { label: "Option 1" },
  { label: "Option 2" },
  { label: "Option 3" },
];

export default function FieldsAndControlsPage() {
  const [selectValue, setSelectValue] = useState("");
  const [smallSelectValue, setSmallSelectValue] = useState("");
  const [autocompleteValue, setAutocompleteValue] = useState<{
    label: string;
  } | null>(null);
  const [autocompleteMultipleValue, setAutocompleteMultipleValue] = useState<
    { label: string }[]
  >([]);
  const [smallAutocompleteValue, setSmallAutocompleteValue] = useState<{
    label: string;
  } | null>(null);
  const [smallAutocompleteMultipleValue, setSmallAutocompleteMultipleValue] =
    useState<{ label: string }[]>([]);

  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState("option1");
  const [switchValue, setSwitchValue] = useState(false);
  const [smallCheckboxValue, setSmallCheckboxValue] = useState(false);
  const [smallRadioValue, setSmallRadioValue] = useState("option1");
  const [smallSwitchValue, setSmallSwitchValue] = useState(false);

  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: "auto" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Fields and Controls
      </Typography>

      {/* Normal Size Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Normal Size
        </Typography>
        <Stack spacing={3}>
          <TextField
            label="TextField"
            placeholder="Enter text"
            variant="outlined"
            fullWidth
          />

          <OutlinedInput placeholder="OutlinedInput" fullWidth />

          <FormControl fullWidth>
            <InputLabel>Select</InputLabel>
            <Select
              value={selectValue}
              label="Select"
              onChange={(e) => setSelectValue(e.target.value)}
            >
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          </FormControl>

          <Autocomplete
            options={autocompleteOptions}
            value={autocompleteValue}
            onChange={(_, newValue) => setAutocompleteValue(newValue)}
            renderInput={(params) => (
              <TextField {...params} label="Autocomplete" />
            )}
          />

          <Autocomplete
            multiple
            options={autocompleteOptions}
            value={autocompleteMultipleValue}
            onChange={(_, newValue) => setAutocompleteMultipleValue(newValue)}
            renderInput={(params) => (
              <TextField {...params} label="Autocomplete Multiple" />
            )}
          />
        </Stack>
      </Box>

      {/* Small Size Section */}
      <Box>
        <Typography variant="h5" component="h2" gutterBottom>
          Small Size
        </Typography>
        <Stack spacing={3}>
          <TextField
            label="TextField"
            placeholder="Enter text"
            variant="outlined"
            size="small"
            fullWidth
          />

          <OutlinedInput placeholder="OutlinedInput" size="small" fullWidth />

          <FormControl fullWidth size="small">
            <InputLabel>Select</InputLabel>
            <Select
              value={smallSelectValue}
              label="Select"
              onChange={(e) => setSmallSelectValue(e.target.value)}
            >
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          </FormControl>

          <Autocomplete
            options={autocompleteOptions}
            size="small"
            value={smallAutocompleteValue}
            onChange={(_, newValue) => setSmallAutocompleteValue(newValue)}
            renderInput={(params) => (
              <TextField {...params} label="Autocomplete" />
            )}
          />

          <Autocomplete
            multiple
            options={autocompleteOptions}
            size="small"
            value={smallAutocompleteMultipleValue}
            onChange={(_, newValue) =>
              setSmallAutocompleteMultipleValue(newValue)
            }
            renderInput={(params) => (
              <TextField {...params} label="Autocomplete Multiple" />
            )}
          />
        </Stack>
      </Box>

      {/* Controls Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Controls
        </Typography>
        <Stack spacing={3}>
          <FormControlLabel
            control={
              <Checkbox
                checked={checkboxValue}
                onChange={(e) => setCheckboxValue(e.target.checked)}
              />
            }
            label="Checkbox"
          />

          <FormControl>
            <RadioGroup
              value={radioValue}
              onChange={(e) => setRadioValue(e.target.value)}
            >
              <FormControlLabel
                value="option1"
                control={<Radio />}
                label="Radio Option 1"
              />
              <FormControlLabel
                value="option2"
                control={<Radio />}
                label="Radio Option 2"
              />
              <FormControlLabel
                value="option3"
                control={<Radio />}
                label="Radio Option 3"
              />
            </RadioGroup>
          </FormControl>

          <FormControlLabel
            control={
              <Switch
                checked={switchValue}
                onChange={(e) => setSwitchValue(e.target.checked)}
              />
            }
            label="Switch"
          />
        </Stack>
      </Box>

      {/* Small Controls Section */}
      <Box>
        <Typography variant="h5" component="h2" gutterBottom>
          Small Controls
        </Typography>
        <Stack spacing={3}>
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                checked={smallCheckboxValue}
                onChange={(e) => setSmallCheckboxValue(e.target.checked)}
              />
            }
            label="Checkbox"
          />

          <FormControl size="small">
            <RadioGroup
              value={smallRadioValue}
              onChange={(e) => setSmallRadioValue(e.target.value)}
            >
              <FormControlLabel
                value="option1"
                control={<Radio size="small" />}
                label="Radio Option 1"
              />
              <FormControlLabel
                value="option2"
                control={<Radio size="small" />}
                label="Radio Option 2"
              />
              <FormControlLabel
                value="option3"
                control={<Radio size="small" />}
                label="Radio Option 3"
              />
            </RadioGroup>
          </FormControl>

          <FormControlLabel
            control={
              <Switch
                size="small"
                checked={smallSwitchValue}
                onChange={(e) => setSmallSwitchValue(e.target.checked)}
              />
            }
            label="Switch"
          />
        </Stack>
      </Box>
    </Box>
  );
}
