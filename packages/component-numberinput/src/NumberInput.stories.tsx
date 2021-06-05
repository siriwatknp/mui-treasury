import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Box from "@material-ui/core/Box";
import FormHelperText from "@material-ui/core/FormHelperText";
import FilledInput from "@material-ui/core/FilledInput";
import {
  NumberInput,
  NumberInputProps,
  NumberInputError,
} from "@mui-treasury/component-numberinput";

export default {
  title: "Component/NumberInput",
  component: NumberInput,
  argTypes: {
    onChange: { action: "changed" },
    size: {
      control: {
        type: "select",
        options: ["medium", "small"],
      },
    },
  },
  args: {
    placeholder: "enter number",
    size: "medium",
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Default: Story<NumberInputProps> = (args) => {
  return <NumberInput {...args} />;
};

export const Filled: Story<NumberInputProps> = (args) => {
  return (
    <NumberInput
      {...args}
      inputElement={<FilledInput hiddenLabel disableUnderline />}
    />
  );
};

export const MinMax: Story<NumberInputProps> = (args) => {
  return <NumberInput {...args} />;
};
MinMax.args = {
  min: -5,
  max: 5,
};

export const Precision: Story<NumberInputProps> = (args) => {
  return <NumberInput {...args} />;
};
Precision.args = {
  precision: 2,
  defaultValue: 4,
};

export const Step: Story<NumberInputProps> = (args) => {
  return <NumberInput {...args} />;
};
Step.args = {
  step: 10,
  defaultValue: 4,
};

export const NoClampOnBlur: Story<NumberInputProps> = (args) => {
  return <NumberInput {...args} />;
};
NoClampOnBlur.args = {
  defaultValue: 10,
  clampValueOnBlur: false,
};

export const Wheel: Story<NumberInputProps> = (args) => {
  return <NumberInput {...args} />;
};
Wheel.args = {
  defaultValue: 0,
  allowMouseWheel: true,
};

export const Warning: Story<NumberInputProps> = (args) => {
  const [error, setError] = useState<NumberInputError | null>(null);
  return (
    <Box height={100} width={256}>
      <NumberInput
        {...args}
        onChange={(value, metadata) => {
          setError(metadata.error);
        }}
        sx={{
          ...(!!error && {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "orange !important",
            },
          }),
        }}
      />
      {error && (
        <FormHelperText sx={{ ...(!!error && { color: "orange" }) }}>
          {error === "exceed-max" && "Too high value, might affect performance"}
          {error === "below-min" && "Too low value, might not see any change"}
        </FormHelperText>
      )}
    </Box>
  );
};
Warning.args = {
  defaultValue: 20,
  allowMouseWheel: true,
  step: 10,
  min: 10,
  max: 40,
  keepWithinRange: false,
};

export const ErrorOnBlur: Story<NumberInputProps> = (args) => {
  const [error, setError] = useState<NumberInputError | null>(null);
  return (
    <Box height={100} width={256}>
      <NumberInput
        {...args}
        onChange={(value, metadata) => {
          if (metadata.error && metadata.eventType === "blur") {
            setError(metadata.error);
          } else {
            setError(null);
          }
        }}
        sx={{
          ...(!!error && {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "red !important",
            },
          }),
        }}
      />
      {error && (
        <FormHelperText sx={{ ...(!!error && { color: "red" }) }}>
          {error === "exceed-max" && "Too high value, might affect performance"}
          {error === "below-min" && "Too low value, might not see any change"}
        </FormHelperText>
      )}
    </Box>
  );
};
ErrorOnBlur.args = {
  defaultValue: 20,
  allowMouseWheel: true,
  step: 10,
  min: 10,
  max: 40,
  keepWithinRange: false,
  clampValueOnBlur: false,
};

export const FormatAndParse: Story<NumberInputProps> = (args) => {
  function addComma(str: string) {
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <NumberInput
      {...args}
      formatter={(valueText) => `$${addComma(valueText)}`}
      parser={(valueText) => valueText.replace("$", "").replace(/,/g, "")}
    />
  );
};
FormatAndParse.args = {
  defaultValue: 1000,
  step: 2000,
  allowMouseWheel: true,
};
