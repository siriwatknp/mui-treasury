import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import Select, { selectClasses } from "@mui/material/Select";

export function SelectBorder() {
  const [val, setVal] = React.useState(1);

  return (
    <FormControl>
      <InputLabel
        id="inputLabel"
        sx={{
          marginLeft: "4px",
          color: "grey.500",
          transform: "none",
          fontSize: "0.875rem",
          fontWeight: 500,
          letterSpacing: "1px",
          "&.Mui-focused": {
            color: "grey.500", // to overwrite the default behaviour
          },
        }}
      >
        LABEL
      </InputLabel>
      <Select
        disableUnderline
        labelId="inputLabel"
        IconComponent={ExpandMoreIcon}
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
        }}
        value={val}
        onChange={(event) => setVal(event.target.value as number)}
        sx={{
          mt: 2.5,
          [`& .${selectClasses.select}`]: {
            minWidth: "200px",
            background: "white",
            color: "grey.700",
            borderRadius: "4px",
            paddingLeft: "12px",
            paddingTop: "14px",
            paddingBottom: "15px",
          },
          [`& .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "grey.300",
            borderStyle: "solid",
            borderWidth: "2px",
          },
          "&:hover": {
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "grey.400",
            },
          },
        }}
      >
        <MenuItem value={0}>None</MenuItem>
        <MenuItem value={1}>One</MenuItem>
        <MenuItem value={2}>Two</MenuItem>
        <MenuItem value={3}>Three</MenuItem>
      </Select>
    </FormControl>
  );
}
