import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import FilledInput from "@material-ui/core/FilledInput";
import {
  DayMonthYear,
  DayMonthYearProps,
} from "@mui-treasury/component-daymonthyear";

export default {
  title: "Component/DayMonthYear",
  component: DayMonthYear,
  argTypes: {},
  args: {},
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Field: Story<DayMonthYearProps> = (args) => {
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
};

export const Filled: Story<DayMonthYearProps> = (args) => {
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
};
