import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";

export function CardProfile() {
  return (
    <Card
      sx={{
        borderRadius: "12px",
        minWidth: 256,
        textAlign: "center",
        boxShadow:
          "0 2px 4px -2px rgba(0,0,0,0.24), 0 4px 24px -2px rgba(0, 0, 0, 0.2)",
      }}
    >
      <CardContent>
        <Avatar
          src={"https://i.pravatar.cc/300"}
          sx={{
            width: 60,
            height: 60,
            margin: "auto",
          }}
        />
        <Box
          component="h3"
          sx={{
            fontSize: 18,
            fontWeight: "bold",
            letterSpacing: "0.5px",
            marginTop: 1,
            marginBottom: 0,
          }}
        >
          Alan Podemski
        </Box>
        <Box
          component="span"
          sx={{
            fontSize: 14,
            color: "grey.500",
            marginBottom: "0.875em",
          }}
        >
          Poland
        </Box>
      </CardContent>
      <Divider light />
      <Box display={"flex"}>
        <Box
          p={2}
          flex={"auto"}
          sx={{
            position: "relative",
            "&:not(:last-of-type)": {
              "&:after": {
                content: '" "',
                display: "block",
                position: "absolute",
                height: "50%",
                width: "1px",
                backgroundColor: "rgba(0 0 0 / 0.08)",
                top: "50%",
                right: 0,
                transform: "translateY(-50%)",
              },
            },
          }}
        >
          <Box
            sx={{
              fontSize: 12,
              color: "grey.500",
              fontWeight: 500,
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
              margin: 0,
            }}
          >
            Followers
          </Box>
          <Box
            component="p"
            sx={{
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 0.5,
              letterSpacing: "1px",
            }}
          >
            6941
          </Box>
        </Box>
        <Box
          p={2}
          flex={"auto"}
          sx={{
            position: "relative",
            "&:not(:last-of-type)": {
              "&:after": {
                content: '" "',
                display: "block",
                position: "absolute",
                height: "50%",
                width: "1px",
                backgroundColor: "rgba(0 0 0 / 0.08)",
                top: "50%",
                right: 0,
                transform: "translateY(-50%)",
              },
            },
          }}
        >
          <Box
            sx={{
              fontSize: 12,
              color: "grey.500",
              fontWeight: 500,
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
              margin: 0,
            }}
          >
            Following
          </Box>
          <Box
            component="p"
            sx={{
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 0.5,
              letterSpacing: "1px",
            }}
          >
            12
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
