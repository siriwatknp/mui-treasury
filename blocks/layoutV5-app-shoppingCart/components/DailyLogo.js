import React from "react";
import Typography from "@mui/material/Typography";

const DailyLogo = () => {
  return (
    <Typography
      variant={"h5"}
      sx={{ fontWeight: 900, textTransform: "uppercase", whiteSpace: "nowrap" }}
    >
      <span>#</span> Daily.
    </Typography>
  );
};

export default DailyLogo;
