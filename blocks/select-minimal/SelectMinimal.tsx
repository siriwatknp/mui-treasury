import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { deepPurple } from "@mui/material/colors";
import FormControl from "@mui/material/FormControl";
import { menuClasses } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Select, { selectClasses } from "@mui/material/Select";

export function SelectMinimal() {
  const [val, setVal] = React.useState(1);
  return (
    <FormControl>
      <Select
        disableUnderline
        variant="standard"
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
          sx: {
            marginBlock: "0.5rem",
            [`& .${menuClasses.paper}`]: {
              borderRadius: "12px",
            },
            [`& .${menuClasses.list}`]: {
              paddingTop: 0,
              paddingBottom: 0,
              background: "white",
              "& li": {
                paddingTop: "12px",
                paddingBottom: "12px",
              },
              "& li:hover": {
                background: deepPurple[50],
              },
              "& li.Mui-selected": {
                color: "white",
                background: deepPurple[400],
              },
              "& li.Mui-selected:hover": {
                background: deepPurple[500],
              },
            },
          },
        }}
        IconComponent={ExpandMoreIcon}
        value={val}
        onChange={(event) => setVal(event.target.value as number)}
        sx={{
          minWidth: 200,
          [`& .${selectClasses.select}`]: {
            background: "white",
            color: deepPurple[500],
            borderRadius: "12px",
            paddingLeft: "24px",
            paddingRight: "24px",
            paddingTop: "14px",
            paddingBottom: "15px",
            boxShadow: "0px 5px 8px -3px rgba(0,0,0,0.14)",
            "&:focus": {
              borderRadius: "12px",
              background: "white",
              borderColor: deepPurple[100],
            },
          },
          [`& .${selectClasses.icon}`]: {
            right: "12px",
          },
        }}
      >
        <MenuItem value={0}>Principle</MenuItem>
        <MenuItem value={1}>Sketch</MenuItem>
        <MenuItem value={2}>Photoshop</MenuItem>
        <MenuItem value={3}>Framer</MenuItem>
      </Select>
    </FormControl>
  );
}
