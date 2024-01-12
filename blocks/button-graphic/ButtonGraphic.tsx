import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const GraphicButton = styled(Button)(({ theme }) => {
  const initialShadow = `0 4px 6px 2px rgba(0,0,0,0.08), 0px 2px 4px 0px rgba(0,0,0,0.24), inset 0 -3px 0 0 rgba(0,0,0,0.12)`;
  return {
    borderRadius: 50,
    textTransform: "initial",
    marginTop: -2,
    variants: [
      {
        props: { variant: "contained", color: "primary" },
        style: {
          textShadow: "0 1px 0 rgba(0,0,0,0.2)",
          transition: "0.2s",
          background: `linear-gradient(to top, ${
            (theme.vars || theme).palette.primary.main
          }, #7fb8d0)`,
          boxShadow: initialShadow,
          textTransform: "uppercase",
          letterSpacing: "0.5px",
          "&:hover, &:focus": {
            boxShadow: initialShadow,
          },
          "&:active": {
            boxShadow: `inset 0 4px 4px 0 rgba(0,0,0,0.14)`,
          },
        },
      },
    ],
  };
});

export function ButtonGraphic() {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <GraphicButton variant={"contained"} color={"primary"}>
        Graphic
      </GraphicButton>
    </Box>
  );
}
