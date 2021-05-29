import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from "@material-ui/core/InputAdornment";

import MailOutlined from "@material-ui/icons/MailOutlined";

export default {
  title: "Material-UI/Select",
} as Meta;

export const AllVariants = () => {
  const [value, setValue] = useState("");
  return (
    <Grid container spacing={2}>
      <Grid item>
        <TextField
          label="Label 0"
          size="small"
          select
          SelectProps={{ displayEmpty: true }}
          InputLabelProps={{ shrink: true }}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          helperText="This is a helper text"
        >
          <MenuItem value="">
            <em>Select Option</em>
          </MenuItem>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <MenuItem value={3}>Option 3</MenuItem>
        </TextField>
        <br />
        <br />
        <TextField
          label="Label 1"
          size="small"
          error
          select
          SelectProps={{ displayEmpty: true }}
          InputLabelProps={{ shrink: true }}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          helperText="This is a helper text"
        >
          <MenuItem value="">
            <em>Select Option</em>
          </MenuItem>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <MenuItem value={3}>Option 3</MenuItem>
        </TextField>
      </Grid>

      <Grid item>
        <TextField
          label="Label 2"
          select
          SelectProps={{ displayEmpty: true }}
          InputLabelProps={{ shrink: true }}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          helperText="This is a helper text"
        >
          <MenuItem value="">
            <em>Select Option</em>
          </MenuItem>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <MenuItem value={3}>Option 3</MenuItem>
        </TextField>
        <br />
        <br />
        <TextField
          label="Label 3"
          error
          select
          SelectProps={{ displayEmpty: true }}
          InputLabelProps={{ shrink: true }}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          helperText="This is a helper text"
        >
          <MenuItem value="">
            <em>Select Option</em>
          </MenuItem>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <MenuItem value={3}>Option 3</MenuItem>
        </TextField>
      </Grid>
      <Grid item>
        <TextField
          label="Label 4"
          size="small"
          select
          SelectProps={{ displayEmpty: true }}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutlined />
              </InputAdornment>
            ),
          }}
          margin="dense"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        >
          <MenuItem value="">
            <em>Select Option</em>
          </MenuItem>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <MenuItem value={3}>Option 3</MenuItem>
        </TextField>
        <TextField
          label="Label 5"
          select
          SelectProps={{ displayEmpty: true }}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutlined />
              </InputAdornment>
            ),
          }}
          margin="dense"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          sx={{ ml: 2 }}
        >
          <MenuItem value="">
            <em>Select Option</em>
          </MenuItem>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <MenuItem value={3}>Option 3</MenuItem>
        </TextField>
        <br />
        <br />
        <TextField
          label="Label 6"
          size="small"
          select
          SelectProps={{ displayEmpty: true }}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <MailOutlined />
              </InputAdornment>
            ),
          }}
          margin="dense"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        >
          <MenuItem value="">
            <em>Select Option</em>
          </MenuItem>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <MenuItem value={3}>Option 3</MenuItem>
        </TextField>
        <TextField
          label="Label 7"
          select
          SelectProps={{ displayEmpty: true }}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <MailOutlined />
              </InputAdornment>
            ),
          }}
          margin="dense"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          sx={{ ml: 2 }}
        >
          <MenuItem value="">
            <em>Select Option</em>
          </MenuItem>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <MenuItem value={3}>Option 3</MenuItem>
        </TextField>
      </Grid>
    </Grid>
  );
};
