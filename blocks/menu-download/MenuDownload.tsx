import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GetAppRoundedIcon from "@mui/icons-material/GetAppRounded";
import Button from "@mui/material/Button";
import Menu, { menuClasses } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export function MenuDownload() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={(event) => setAnchorEl(event.currentTarget)}
        sx={{
          minWidth: 140,
          background: "white",
          fontWeight: 500,
          textTransform: "capitalize",
          borderColor: "primary.light",
          borderStyle: "solid",
          borderWidth: "2px",
          borderRadius: "4px",
          paddingTop: "8px",
          paddingBottom: "8px",
          "& > span": {
            fontSize: "0.9em",
          },
        }}
        endIcon={
          <ExpandMoreIcon
            sx={{
              color: "primary.light",
              userSelect: "none",
              pointerEvents: "none",
              transform: anchorEl ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        }
      >
        <GetAppRoundedIcon
          sx={{
            color: "primary.light",
            userSelect: "none",
            pointerEvents: "none",
            marginRight: "6px",
          }}
        />
        Download
      </Button>
      <Menu
        id="simple-menu"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        sx={{
          [`& .${menuClasses.paper}`]: {
            minWidth: 140,
            borderRadius: "4px",
            marginTop: "8px",
          },
        }}
      >
        <MenuItem onClick={() => setAnchorEl(null)}>PDF File</MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>CSV File</MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>XLS File</MenuItem>
      </Menu>
    </div>
  );
}
