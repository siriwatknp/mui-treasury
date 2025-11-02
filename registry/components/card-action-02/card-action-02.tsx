"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Link from "@mui/material/Link";

export interface CardAction02Props {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: string;
  href?: string;
}

export default function CardAction02({
  icon = (
    <Box
      component="svg"
      viewBox="0 0 24 24"
      sx={{ width: 16, height: 16, fill: "currentColor" }}
    >
      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </Box>
  ),
  title = (
    <>
      Pay over time,
      <br />
      interest-free.
    </>
  ),
  description = "When you choose to check out at Apple with Apple Card Monthly Installments.",
  href = "#",
}: CardAction02Props) {
  return (
    <Card
      sx={(theme) => ({
        border: 0,
        position: "relative",
        borderRadius: 3.5,
        p: 3,
        width: {
          xs: 340,
          sm: 380,
          md: 420,
          lg: 460,
        },
        minHeight: {
          xs: 380,
          sm: 420,
          md: 460,
        },
        display: "flex",
        flexDirection: "column",
        gap: 3,
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
        sx={(theme) => ({
          width: 68,
          height: 46,
          borderRadius: 1.5,
          border: "2px solid",
          borderColor: "grey.800",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 1,
          ...theme.applyStyles("dark", {
            borderColor: "grey.300",
          }),
        })}
      >
        {icon}
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        <Typography
          component="h3"
          sx={{
            fontSize: { xs: "28px", md: "32px", lg: "40px" },
            textWrap: "pretty",
            fontWeight: 600,
            lineHeight: 1.1,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "17px", md: "19px" },
            color: "text.secondary",
            textWrap: "pretty",
            lineHeight: 1.4,
          }}
        >
          {description}
        </Typography>
      </Box>

      <Link
        sx={{ position: "absolute", inset: 0 }}
        href={href}
        underline="none"
      >
        <Button
          component="span"
          variant="contained"
          aria-label="Add"
          role={undefined}
          tabIndex={-1}
          disableRipple
          sx={(theme) => ({
            position: "absolute",
            bottom: 20,
            right: 20,
            minWidth: 56,
            width: 56,
            height: 56,
            borderRadius: "50%",
            bgcolor: "grey.800",
            color: "common.white",
            p: 0,
            ...theme.applyStyles("dark", {
              bgcolor: "grey.300",
              color: "grey.900",
            }),
            "@media (hover: hover)": {
              "&:hover": {
                bgcolor: "grey.700",
                ...theme.applyStyles("dark", {
                  bgcolor: "grey.400",
                }),
              },
            },
          })}
        >
          <AddIcon sx={{ fontSize: 28 }} />
        </Button>
      </Link>
    </Card>
  );
}
