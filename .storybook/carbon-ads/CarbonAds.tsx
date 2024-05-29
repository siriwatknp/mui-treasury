import React from "react";
import { createPortal } from "react-dom";
import Box, { BoxProps } from "@mui/material/Box";
import cx from "clsx";
import useCarbonAds from "./useCarbonAds";
import "./CarbonAds.css";

const CarbonAds = ({
  vertical,
  ...props
}: BoxProps & { vertical?: boolean }) => {
  const { id, error } = useCarbonAds();
  if (error || process.env.NODE_ENV === "development") return null;
  return createPortal(
    <Box
      className={cx(vertical && "CarbonVertical")}
      sx={{
        position: "fixed",
        minWidth: vertical ? "initial" : 300,
        zIndex: 1300,
        top: "3.5rem",
        right: "1rem",
      }}
      {...props}
    >
      <div id={id} />
    </Box>,
    document.body,
  );
};

export default CarbonAds;
