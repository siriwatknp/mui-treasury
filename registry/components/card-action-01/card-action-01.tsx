"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import Link from "@mui/material/Link";

export default function CardAction01() {
  return (
    <Card
      sx={(theme) => ({
        border: 0,
        bgcolor: "grey.100",
        position: "relative",
        overflow: "hidden",
        borderRadius: 3.5,
        p: 3,
        width: {
          xs: 260,
          sm: 304,
          md: 344,
          lg: 372,
          xl: 405,
        },
        minHeight: {
          xs: 480,
          sm: 560,
          md: 628,
          lg: 680,
          xl: 740,
        },
        maxHeight: {
          xs: 530,
          sm: 610,
          md: 684,
          lg: 744,
          xl: 804,
        },
        display: "flex",
        flexDirection: "column",
        ...theme.applyStyles("dark", {
          bgcolor: "grey.900",
        }),
        transition: "transform .3s cubic-bezier(0,0,.5,1)",
        "&:hover": {
          transform: "scale(1.023)",
        },
        "&:has(:focus-visible)": {
          outline: `2px solid ${(theme.vars || theme).palette.primary.main}`,
          outlineOffset: 2,
        },
      })}
    >
      <Box
        component="figure"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
          },
        }}
      >
        <img src="https://placehold.co/405x804/transparent/CCC" alt="" />
      </Box>

      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          component="h3"
          gutterBottom
          sx={{ fontSize: "14px", fontWeight: 600 }}
        >
          macOS and Apple Intelligence
        </Typography>
        <Typography
          variant="h3"
          component="p"
          sx={{
            fontSize: { xs: "21px", md: "24px", lg: "28px" },
            textWrap: "pretty",
            fontWeight: 600,
          }}
        >
          Easy to use.
          <br /> Easy to love.
        </Typography>
      </Box>

      <Link sx={{ position: "absolute", inset: 0 }} href="#" underline="none">
        <Box
          aria-label="Add"
          sx={{
            position: "absolute",
            bottom: 20,
            right: 20,
            zIndex: 1,
            width: 36,
            height: 36,
            borderRadius: "50%",
            bgcolor: "grey.800",
            color: "common.white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AddIcon sx={{ color: "inherit" }} />
        </Box>
      </Link>
    </Card>
  );
}
