import React from "react";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import Favorite from "@mui/icons-material/Favorite";
import ModeComment from "@mui/icons-material/ModeComment";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Rating from "@mui/material/Rating";

export function CardReview2() {
  return (
    <Card
      elevation={0}
      sx={{ display: "flex", padding: 2, borderRadius: "16px" }}
    >
      <CardContent sx={{ pr: 2 }}>
        <Box mb={1}>
          <Box
            component="h3"
            sx={{
              fontSize: 17,
              fontWeight: "bold",
              letterSpacing: "0.5px",
              marginBottom: 0,
              marginRight: 1.5,
              display: "inline-block",
            }}
          >
            Aegen magazines{" "}
          </Box>
          <Rating
            name={"rating"}
            value={2}
            size={"small"}
            sx={{ verticalAlign: "text-top" }}
          />
        </Box>
        <Box
          component="p"
          sx={{ fontSize: 14, color: "grey.500", mb: "1.275rem" }}
        >
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
          credit (www.brighttv.co.th)
        </Box>
        <Divider light sx={{ mt: 1, mb: 1 }} />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link
            component={"button"}
            sx={{
              fontSize: 14,
              color: "primary.light",
              opacity: 0.87,
              "&:hover, &:focus": {
                color: "primary.main",
                opacity: 1,
                "& $icon": {
                  opacity: 1,
                },
              },
            }}
          >
            Read more{" "}
            <ArrowForwardIos
              sx={{
                opacity: 0.6,
                fontSize: "1.125em",
                verticalAlign: "middle",
                "&:first-child": {
                  marginRight: 1,
                },
                "&:last-child": {
                  marginLeft: 1,
                },
              }}
            />
          </Link>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginLeft: "auto",
              gap: 1.5,
            }}
          >
            <Box
              component="button"
              type={"button"}
              sx={{
                display: "flex",
                alignItems: "center",
                color: "text.secondary",
                "&:hover, &:focus": {
                  color: "primary.main",
                  "& svg": {
                    opacity: 1,
                  },
                },
              }}
            >
              <ModeComment
                sx={{
                  opacity: 0.6,
                  fontSize: "1.125em",
                  verticalAlign: "middle",
                  "&:first-child": {
                    marginRight: 1,
                  },
                  "&:last-child": {
                    marginLeft: 1,
                  },
                }}
              />{" "}
              135
            </Box>
            <Box
              component="button"
              type={"button"}
              sx={{
                display: "flex",
                alignItems: "center",
                color: "text.secondary",
                "&:hover, &:focus": {
                  color: "primary.main",
                  "& svg": {
                    opacity: 1,
                  },
                },
              }}
            >
              <Favorite
                sx={{
                  opacity: 0.6,
                  fontSize: "1.125em",
                  verticalAlign: "middle",
                  "&:first-child": {
                    marginRight: 1,
                  },
                  "&:last-child": {
                    marginLeft: 1,
                  },
                }}
              />{" "}
              12
            </Box>
          </Box>
        </Box>
      </CardContent>
      <CardMedia
        image={
          "https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        }
        sx={{
          minWidth: "25%",
          maxWidth: "25%",
          flexShrink: 0,
          backgroundColor: "grey.200",
          borderRadius: "12px",
          boxShadow: "0 2px 8px 0 #c1c9d7, 0 -2px 8px 0 #cce1e9",
        }}
      />
    </Card>
  );
}
