import React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel, {
  formControlLabelClasses,
} from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const Field = styled(FormControlLabel)({
  padding: "1rem 1rem 1rem 0.5rem",
  margin: 0,
  transition: "0.3s",
  borderRadius: 3,
  width: "100%",
  "&:hover": {
    backgroundColor: "rgba(63, 93, 181, 0.1)",
  },
  [`& .${formControlLabelClasses.label}`]: {
    marginLeft: "0.25rem",
    [`&.${formControlLabelClasses.disabled} span`]: {
      color: "inherit",
    },
  },
  [`&.${formControlLabelClasses.disabled}`]: {
    "&:hover": {
      backgroundColor: "unset",
    },
  },
});

export function CheckboxBanner() {
  return (
    <Box display="grid">
      <Field
        control={
          <Checkbox
            defaultChecked
            color="primary"
            sx={{ marginTop: "-9px", alignSelf: "flex-start" }}
          />
        }
        label={
          <>
            Auto start
            <Typography
              component="span"
              sx={{
                display: "block",
                fontSize: "0.875rem",
                color: "text.secondary",
              }}
            >
              Starting with your OS
            </Typography>
          </>
        }
      />
      <Field
        control={
          <Checkbox
            color="secondary"
            sx={{ marginTop: "-9px", alignSelf: "flex-start" }}
          />
        }
        label={
          <>
            Auto update
            <Typography
              component="span"
              sx={{
                display: "block",
                fontSize: "0.875rem",
                color: "text.secondary",
              }}
            >
              Download and install new version
            </Typography>
          </>
        }
        sx={{
          "&:hover": {
            backgroundColor: "rgba(255, 64, 148, 0.1)",
          },
        }}
      />
      <Field
        disabled
        control={
          <Checkbox sx={{ marginTop: "-9px", alignSelf: "flex-start" }} />
        }
        label={
          <>
            Don't check auth key
            <Typography
              component="span"
              sx={{
                display: "block",
                fontSize: "0.875rem",
                color: "text.secondary",
              }}
            >
              All connections will not be checked
            </Typography>
          </>
        }
      />
    </Box>
  );
}
