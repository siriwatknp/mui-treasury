import React from "react";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio, { radioClasses } from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useColorScheme } from "@mui/material/styles";

function System() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  );
}

function DarkMode() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function LightMode() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v1" />
      <path d="M12 20v1" />
      <path d="M3 12h1" />
      <path d="M20 12h1" />
      <path d="m18.364 5.636-.707.707" />
      <path d="m6.343 17.657-.707.707" />
      <path d="m5.636 5.636.707.707" />
      <path d="m17.657 17.657.707.707" />
    </svg>
  );
}

const size = "44px";
const gap = "4px";

export default function ColorSchemeTabsBasic() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return (
      <Box
        sx={{
          display: "grid",
          alignItems: "center",
          height: "44px",
          gap,
          opacity: 0.5,
          gridTemplateColumns: `repeat(3, ${size})`,
          placeItems: "center",
          color: "text.primary",
          "& > div": { lineHeight: 0 },
          "& svg": { transform: "scale(0.8)" },
        }}
      >
        <div>
          <LightMode />
        </div>
        <div>
          <System />
        </div>
        <div>
          <DarkMode />
        </div>
      </Box>
    );
  }
  return (
    <RadioGroup
      defaultValue="system"
      row
      aria-label="Color scheme"
      name="color-scheme-segmented-control"
      sx={{
        display: "flex",
        gap,
        "& svg": { transform: "scale(0.8)", transition: "0.2s" },
        [`& .${radioClasses.checked} svg`]: { transform: "scale(1)" },
        [`& .${radioClasses.root}`]: {
          width: size,
          height: size,
          border: "1px solid transparent",
          borderRadius: "8px",
          [`&.${radioClasses.checked}`]: {
            border: "1px solid",
            borderColor: "divider",
            color: "text.primary",
          },
        },
        "& label": { margin: 0 },
      }}
      onChange={(event) => {
        setMode(event.target.value as "light" | "system" | "dark");
      }}
    >
      <FormControlLabel
        value="light"
        control={
          <Radio
            color="default"
            disableTouchRipple
            checkedIcon={<LightMode />}
            icon={<LightMode />}
          />
        }
        label=""
      />
      <FormControlLabel
        value="system"
        control={
          <Radio
            color="default"
            disableTouchRipple
            checkedIcon={<System />}
            icon={<System />}
          />
        }
        label=""
      />
      <FormControlLabel
        value="dark"
        control={
          <Radio
            color="default"
            disableTouchRipple
            checkedIcon={<DarkMode />}
            icon={<DarkMode />}
          />
        }
        label=""
      />
    </RadioGroup>
  );
}
