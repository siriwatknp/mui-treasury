import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Slider, { sliderClasses } from "@mui/material/Slider";

export default function CardKanban() {
  const family =
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
  return (
    <Card
      elevation={0}
      sx={{
        display: "flex",
        padding: 2,
        minWidth: 288,
        borderRadius: "12px",
        boxShadow: "0 2px 4px 0 rgba(138, 148, 159, 0.2)",
        "& > *:nth-of-type(1)": {
          marginRight: 2,
        },
        "& > *:nth-of-type(2)": {
          flex: "auto",
        },
      }}
    >
      <Avatar src={"https://i.pravatar.cc/300"} />
      <Box>
        <Box
          component="h3"
          sx={{ fontFamily: family, fontSize: 16, marginBottom: 0 }}
        >
          Sarah Onella
        </Box>
        <Box
          sx={{
            fontFamily: family,
            fontSize: 14,
            color: "grey.600",
            letterSpacing: "1px",
            marginBottom: "4px",
          }}
        >
          23 y.o • Canada
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <Slider
            defaultValue={30}
            sx={{
              height: 4,
              [`& .${sliderClasses.rail}`]: {
                borderRadius: "10px",
                height: 4,
                backgroundColor: "rgb(202,211,216)",
              },
              [`& .${sliderClasses.track}`]: {
                borderRadius: "10px",
                height: 4,
                backgroundColor: "rgb(117,156,250)",
                border: "none",
              },
              [`& .${sliderClasses.thumb}`]: {
                display: "none",
              },
            }}
          />
          <Box
            component="span"
            sx={{
              marginLeft: 1,
              fontSize: 14,
              color: "grey.500",
            }}
          >
            3/10
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
