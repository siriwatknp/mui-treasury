"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Box, { BoxProps } from "@mui/material/Box";
import cx from "clsx";
import useCarbonAds from "./useCarbonAds";
import "./CarbonAds.css";

const CarbonAds = ({
  vertical,
  ...props
}: BoxProps & { vertical?: boolean }) => {
  const [mounted, setMounted] = useState(false);
  const { id } = useCarbonAds();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <Box
      className={cx(vertical && "CarbonVertical")}
      sx={{
        position: "fixed",
        minWidth: vertical ? "initial" : 300,
        zIndex: 1300,
        top: "4rem",
        right: "1rem",
      }}
      {...props}
    >
      <div id={id} />
    </Box>,
    document.body
  );
};

export default CarbonAds;
