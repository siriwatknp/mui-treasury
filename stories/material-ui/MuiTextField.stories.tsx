import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import MailOutlined from "@mui/icons-material/MailOutlined";

export default {
  title: "Material-UI/TextField",
} as Meta;

export const AllVariants: Story = () => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Stack spacing={2} width={256}>
          <TextField
            required
            variant="standard"
            label="Label A"
            size="small"
            helperText="This is a helper text"
          />
          <TextField
            required
            variant="outlined"
            label="Label B"
            size="small"
            helperText="This is a helper text"
          />
          <TextField
            required
            variant="filled"
            label="Label C"
            size="small"
            helperText="This is a helper text"
          />
        </Stack>
      </Grid>
      <Grid item>
        <Stack spacing={2} width={256}>
          <TextField
            required
            variant="standard"
            label="Label D"
            helperText="This is a helper text"
          />
          <TextField
            required
            variant="outlined"
            label="Label E"
            helperText="This is a helper text"
          />
          <TextField
            required
            variant="filled"
            label="Label F"
            helperText="This is a helper text"
          />
        </Stack>
      </Grid>
      <Grid item>
        <Stack spacing={2} width={256}>
          <TextField
            required
            variant="standard"
            label="Label G"
            helperText="This is a helper text"
            error
          />
          <TextField
            required
            variant="outlined"
            label="Label H"
            helperText="This is a helper text"
            error
          />
          <TextField
            required
            variant="filled"
            label="Label I"
            helperText="This is a helper text"
            error
          />
        </Stack>
      </Grid>
      <Grid item>
        <Stack spacing={2} width={256}>
          <TextField
            label="Label J"
            helperText="This is a helper text"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlined />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Label K"
            helperText="This is a helper text"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <MailOutlined />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Label L"
            helperText="This is a helper text"
            defaultValue="This is a long text. It should not be cover by icon"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlined />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <MailOutlined />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};
