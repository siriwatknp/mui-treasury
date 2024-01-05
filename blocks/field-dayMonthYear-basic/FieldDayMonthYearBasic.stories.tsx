import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { DayMonthYear, DayMonthYearProps } from "./FieldDayMonthYearBasic";
import Usage from "./usage.mdx";

const meta = {
  title: "Field/DayMonthYear/Basic",
  component: DayMonthYear,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof DayMonthYear>;

export default meta;
type Story = StoryObj<DayMonthYearProps>;

export const Field: Story = {
  render: (args) => {
    return (
      <FormControl>
        <FormLabel htmlFor="day" sx={{ mb: 1 }}>
          Date of Birth
        </FormLabel>
        <DayMonthYear {...args} sx={{ width: 300 }}>
          <TextField
            id="day"
            data-slot="day"
            sx={{ flexBasis: "25%" }}
            helperText="Day"
          />
          <TextField
            id="month"
            data-slot="month"
            sx={{ flexBasis: "25%" }}
            helperText="Month"
          />
          <TextField
            id="year"
            data-slot="year"
            sx={{ flexBasis: "50%" }}
            helperText="Year"
          />
        </DayMonthYear>
      </FormControl>
    );
  },
};

export const Filled: Story = {
  render: (args) => {
    return (
      <FormControl>
        <FormLabel htmlFor="day" sx={{ mb: 1 }}>
          Date of Birth
        </FormLabel>
        <DayMonthYear {...args}>
          <FilledInput id="day" data-slot="day" hiddenLabel />
          <FilledInput data-slot="month" hiddenLabel />
          <FilledInput data-slot="year" hiddenLabel />
        </DayMonthYear>
      </FormControl>
    );
  },
};
