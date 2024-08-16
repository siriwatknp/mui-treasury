import { styled } from "@mui/material/styles";
import Switch, { switchClasses } from "@mui/material/Switch";

export const SwitchTextTrack = styled(Switch)({
  width: 80,
  height: 48,
  padding: 8,
  [`& .${switchClasses.switchBase}`]: {
    padding: 11,
    color: "#ff6a00",
  },
  [`& .${switchClasses.thumb}`]: {
    width: 26,
    height: 26,
    backgroundColor: "#fff",
  },
  [`& .${switchClasses.track}`]: {
    background: "linear-gradient(to right, #ee0979, #ff6a00)",
    opacity: "1 !important",
    borderRadius: 20,
    position: "relative",
    "&:before, &:after": {
      display: "inline-block",
      position: "absolute",
      top: "50%",
      width: "50%",
      transform: "translateY(-50%)",
      color: "#fff",
      textAlign: "center",
      fontSize: "0.75rem",
      fontWeight: 500,
    },
    "&:before": {
      content: '"ON"',
      left: 4,
      opacity: 0,
    },
    "&:after": {
      content: '"OFF"',
      right: 4,
    },
  },
  [`& .${switchClasses.checked}`]: {
    [`&.${switchClasses.switchBase}`]: {
      color: "#185a9d",
      transform: "translateX(32px)",
      "&:hover": {
        backgroundColor: "rgba(24,90,257,0.08)",
      },
    },
    [`& .${switchClasses.thumb}`]: {
      backgroundColor: "#fff",
    },
    [`& + .${switchClasses.track}`]: {
      background: "linear-gradient(to right, #43cea2, #185a9d)",
      "&:before": {
        opacity: 1,
      },
      "&:after": {
        opacity: 0,
      },
    },
  },
});
