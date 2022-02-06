import React from "react";
import { Story, Meta, StoryContext } from "@storybook/react/types-6-0";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Input from "@mui/material/Input";
import OutlinedInput from "@mui/material/OutlinedInput";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import MailOutlined from "@mui/icons-material/MailOutlined";

function withContainer(Story: any, context: StoryContext) {
  return (
    <Box width={320}>
      <Story {...context} />
    </Box>
  );
}

export default {
  title: "Material UI/Input",
} as Meta;

export const AllVariants: Story<unknown> = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item>
          <Stack spacing={2}>
            <Input placeholder="Small Input" size="small" />
            <OutlinedInput placeholder="Small OutlinedInput" size="small" />
            <FilledInput
              placeholder="Small FilledInput"
              size="small"
              // @ts-expect-error material-ui bug
              hiddenLabel
            />
          </Stack>
        </Grid>
        <Grid item>
          <Stack spacing={2}>
            <Input placeholder="Input" />
            <OutlinedInput placeholder="OutlinedInput" />
            <FilledInput
              placeholder="filledInput" // @ts-expect-error material-ui bug
              hiddenLabel
            />
          </Stack>
        </Grid>
        <Grid item>
          <Stack spacing={2}>
            <Input placeholder="Input" disabled />
            <OutlinedInput placeholder="OutlinedInput" disabled />
            <FilledInput
              placeholder="FilledInput"
              // @ts-expect-error material-ui bug
              hiddenLabel
              disabled
            />
          </Stack>
        </Grid>
        <Grid item>
          <Stack spacing={2}>
            <Input placeholder="Input" multiline rows={2} />
            <OutlinedInput placeholder="OutlinedInput" multiline rows={2} />
            <FilledInput
              placeholder="FilledInput"
              // @ts-expect-error material-ui bug
              hiddenLabel
              multiline
              rows={2}
            />
          </Stack>
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={2}>
        <Grid item>
          <Stack spacing={2}>
            <Input placeholder="Small Input" size="small" error />
            <OutlinedInput
              placeholder="Small OutlinedInput"
              size="small"
              error
            />
            <FilledInput
              placeholder="Small FilledInput"
              size="small"
              error
              // @ts-expect-error material-ui bug
              hiddenLabel
            />
          </Stack>
        </Grid>
        <Grid item>
          <Stack spacing={2}>
            <Input placeholder="Input" error />
            <OutlinedInput placeholder="OutlinedInput" error />
            <FilledInput
              placeholder="filledInput"
              error
              // @ts-expect-error material-ui bug
              hiddenLabel
            />
          </Stack>
        </Grid>
        <Grid item>
          <Stack spacing={2}>
            <Input placeholder="Input" error disabled />
            <OutlinedInput placeholder="OutlinedInput" error disabled />
            <FilledInput
              placeholder="FilledInput"
              // @ts-expect-error material-ui bug
              hiddenLabel
              error
              disabled
            />
          </Stack>
        </Grid>
        <Grid item>
          <Stack spacing={2}>
            <Input placeholder="Input" error multiline rows={2} />
            <OutlinedInput
              placeholder="OutlinedInput"
              error
              multiline
              rows={2}
            />
            <FilledInput
              placeholder="FilledInput"
              // @ts-expect-error material-ui bug
              hiddenLabel
              error
              multiline
              rows={2}
            />
          </Stack>
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={2}>
        <Grid item>
          <Stack spacing={2}>
            <Input
              placeholder="Input"
              defaultValue="This is a long text. It should not be cover by icon"
              startAdornment={
                <InputAdornment position="start">
                  <MailOutlined />
                </InputAdornment>
              }
            />
            <OutlinedInput
              placeholder="OutlinedInput"
              defaultValue="This is a long text. It should not be cover by icon"
              startAdornment={
                <InputAdornment position="start">
                  <MailOutlined />
                </InputAdornment>
              }
            />
            <FilledInput
              placeholder="filledInput" // @ts-expect-error material-ui bug
              hiddenLabel
              defaultValue="This is a long text. It should not be cover by icon"
              startAdornment={
                <InputAdornment position="start">
                  <MailOutlined />
                </InputAdornment>
              }
            />
            <br />
            <Input
              placeholder="Small Input"
              size="small"
              error
              defaultValue="This is a long text. It should not be cover by icon"
              startAdornment={
                <InputAdornment position="start">
                  <MailOutlined />
                </InputAdornment>
              }
            />
            <OutlinedInput
              placeholder="Small OutlinedInput"
              size="small"
              error
              defaultValue="This is a long text. It should not be cover by icon"
              startAdornment={
                <InputAdornment position="start">
                  <MailOutlined />
                </InputAdornment>
              }
            />
            <FilledInput
              placeholder="Small FilledInput"
              size="small"
              error
              // @ts-expect-error material-ui bug
              hiddenLabel
              defaultValue="This is a long text. It should not be cover by icon"
              startAdornment={
                <InputAdornment position="start">
                  <MailOutlined />
                </InputAdornment>
              }
            />
          </Stack>
        </Grid>
        <Grid item>
          <Stack spacing={2}>
            <Input
              placeholder="Input"
              defaultValue="This is a long text. It should not be cover by icon"
              endAdornment={
                <InputAdornment position="end">
                  <MailOutlined />
                </InputAdornment>
              }
            />
            <OutlinedInput
              placeholder="OutlinedInput"
              defaultValue="This is a long text. It should not be cover by icon"
              endAdornment={
                <InputAdornment position="end">
                  <MailOutlined />
                </InputAdornment>
              }
            />
            <FilledInput
              placeholder="filledInput" // @ts-expect-error material-ui bug
              hiddenLabel
              defaultValue="This is a long text. It should not be cover by icon"
              endAdornment={
                <InputAdornment position="end">
                  <MailOutlined />
                </InputAdornment>
              }
            />
            <br />
            <Input
              placeholder="Small Input"
              size="small"
              error
              defaultValue="This is a long text. It should not be cover by icon"
              endAdornment={
                <InputAdornment position="end">
                  <MailOutlined />
                </InputAdornment>
              }
            />
            <OutlinedInput
              placeholder="Small OutlinedInput"
              size="small"
              error
              defaultValue="This is a long text. It should not be cover by icon"
              endAdornment={
                <InputAdornment position="end">
                  <MailOutlined />
                </InputAdornment>
              }
            />
            <FilledInput
              placeholder="Small FilledInput"
              size="small"
              error
              // @ts-expect-error material-ui bug
              hiddenLabel
              defaultValue="This is a long text. It should not be cover by icon"
              endAdornment={
                <InputAdornment position="end">
                  <MailOutlined />
                </InputAdornment>
              }
            />
          </Stack>
        </Grid>
        <Grid item>
          <Stack spacing={2}>
            <Input
              placeholder="Input"
              defaultValue="This is a long text. It should not be cover by icon"
              startAdornment={
                <InputAdornment position="start">
                  <MailOutlined />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <MailOutlined />
                </InputAdornment>
              }
            />
            <OutlinedInput
              placeholder="OutlinedInput"
              defaultValue="This is a long text. It should not be cover by icon"
              startAdornment={
                <InputAdornment position="start">
                  <MailOutlined />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <MailOutlined />
                </InputAdornment>
              }
            />
            <FilledInput
              placeholder="filledInput" // @ts-expect-error material-ui bug
              hiddenLabel
              defaultValue="This is a long text. It should not be cover by icon"
              startAdornment={
                <InputAdornment position="start">
                  <MailOutlined />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <MailOutlined />
                </InputAdornment>
              }
            />
            <br />
            <Input
              placeholder="Small Input"
              size="small"
              error
              defaultValue="This is a long text. It should not be cover by icon"
              startAdornment={
                <InputAdornment position="start">
                  <MailOutlined />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <MailOutlined />
                </InputAdornment>
              }
            />
            <OutlinedInput
              placeholder="Small OutlinedInput"
              size="small"
              error
              defaultValue="This is a long text. It should not be cover by icon"
              startAdornment={
                <InputAdornment position="start">
                  <MailOutlined />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <MailOutlined />
                </InputAdornment>
              }
            />
            <FilledInput
              placeholder="Small FilledInput"
              size="small"
              error
              // @ts-expect-error material-ui bug
              hiddenLabel
              defaultValue="This is a long text. It should not be cover by icon"
              startAdornment={
                <InputAdornment position="start">
                  <MailOutlined />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <MailOutlined />
                </InputAdornment>
              }
            />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export const LabelInside: Story = () => {
  return (
    <Stack spacing={2}>
      <FormControl>
        <InputLabel variant="standard">Label</InputLabel>
        <Input placeholder="Input" />
      </FormControl>
      <FormControl>
        <InputLabel variant="outlined">Label</InputLabel>
        <OutlinedInput placeholder="OutlinedInput" label="Label" />
      </FormControl>
      <FormControl>
        <InputLabel variant="filled">Label</InputLabel>
        <FilledInput placeholder="filledInput" />
      </FormControl>
    </Stack>
  );
};

export const LabelOutside: Story = () => {
  return (
    <Stack spacing={2}>
      <FormControl>
        <FormLabel>Label</FormLabel>
        <Input placeholder="Input" />
      </FormControl>
      <FormControl>
        <FormLabel>Label</FormLabel>
        <OutlinedInput placeholder="OutlinedInput" />
      </FormControl>
      <FormControl>
        <FormLabel>Label</FormLabel>
        <FilledInput
          placeholder="filledInput"
          // @ts-expect-error
          hiddenLabel
        />
      </FormControl>
    </Stack>
  );
};
