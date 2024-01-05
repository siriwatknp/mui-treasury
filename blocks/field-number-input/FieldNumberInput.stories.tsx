import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import type { FieldNumberInputError } from "./FieldNumberInput";
import Box from "@mui/material/Box";
import FilledInput from "@mui/material/FilledInput";
import FormHelperText from "@mui/material/FormHelperText";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { FieldNumberInput } from "./FieldNumberInput";
import Usage from "./usage.mdx";

const meta = {
  title: "Field/Number/Input",
  component: FieldNumberInput,
  args: {
    placeholder: "enter number",
    size: "medium",
  },
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof FieldNumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return <FieldNumberInput {...args} />;
  },
};

export const Filled: Story = {
  render: (args) => {
    return (
      <FieldNumberInput
        {...args}
        inputElement={<FilledInput hiddenLabel disableUnderline />}
      />
    );
  },
};

export const MinMax: Story = {
  args: {
    min: -5,
    max: 5,
  },
  render: (args) => {
    return <FieldNumberInput {...args} />;
  },
};

export const Precision: Story = {
  args: {
    precision: 2,
    defaultValue: 4,
  },
  render: (args) => {
    return <FieldNumberInput {...args} />;
  },
};

export const Step: Story = {
  args: {
    step: 10,
    defaultValue: 4,
  },
  render: (args) => {
    return <FieldNumberInput {...args} />;
  },
};

export const NoClampOnBlur: Story = {
  render: (args) => {
    return <FieldNumberInput {...args} />;
  },
};
NoClampOnBlur.args = {
  defaultValue: 10,
  clampValueOnBlur: false,
};

export const Wheel: Story = {
  render: (args) => {
    return <FieldNumberInput {...args} />;
  },
};
Wheel.args = {
  defaultValue: 0,
  allowMouseWheel: true,
};

export const Warning: Story = {
  render: (args) => {
    const [error, setError] = React.useState<FieldNumberInputError | null>(
      null
    );
    return (
      <Box height={100} width={256}>
        <FieldNumberInput
          {...args}
          onChange={(_, metadata) => {
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
            {error === "exceed-max" &&
              "Too high value, might affect performance"}
            {error === "below-min" && "Too low value, might not see any change"}
          </FormHelperText>
        )}
      </Box>
    );
  },
};
Warning.args = {
  defaultValue: 20,
  allowMouseWheel: true,
  step: 10,
  min: 10,
  max: 40,
  keepWithinRange: false,
};

export const ErrorOnBlur: Story = {
  render: (args) => {
    const [error, setError] = React.useState<FieldNumberInputError | null>(
      null
    );
    return (
      <Box height={100} width={256}>
        <FieldNumberInput
          {...args}
          onChange={(_, metadata) => {
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
            {error === "exceed-max" &&
              "Too high value, might affect performance"}
            {error === "below-min" && "Too low value, might not see any change"}
          </FormHelperText>
        )}
      </Box>
    );
  },
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

export const FormatAndParse: Story = {
  render: (args) => {
    function addComma(str: string) {
      return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
      <FieldNumberInput
        {...args}
        formatter={(valueText) => `$${addComma(valueText)}`}
        parser={(valueText) => valueText.replace("$", "").replace(/,/g, "")}
      />
    );
  },
};
FormatAndParse.args = {
  defaultValue: 1000,
  step: 2000,
  allowMouseWheel: true,
};
