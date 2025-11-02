"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { LineChart } from "@mui/x-charts/LineChart";

export default function CustomerMetricsCard() {
  return (
    <Card variant="outlined" sx={{ maxWidth: 400 }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography color="text.secondary">Total customers</Typography>
          <IconButton size="small" aria-label="More options" sx={{ mr: -0.5 }}>
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 4,
          }}
        >
          <div>
            <Typography variant="h3" component="div" fontWeight="medium">
              2,420
            </Typography>
            <Stack
              direction="row"
              spacing={0.5}
              alignItems="center"
              sx={{ mt: 1 }}
            >
              <TrendingUpIcon fontSize="small" sx={{ color: "success.main" }} />
              <Typography variant="body2" color="success.text">
                40% vs last month
              </Typography>
            </Stack>
          </div>

          <Box sx={{ width: 120, height: 60 }}>
            <LineChart
              series={[
                {
                  data: [20, 35, 30, 40, 38, 48],
                  color: "#52c759",
                  curve: "natural",
                  showMark: false,
                },
              ]}
              xAxis={[
                {
                  data: [1, 2, 3, 4, 5, 6],
                  scaleType: "point",
                  height: 0,
                  position: "none",
                },
              ]}
              margin={{
                left: 0,
                right: 0,
                top: 5,
                bottom: 5,
              }}
              yAxis={[
                {
                  width: 0,
                  position: "none",
                },
              ]}
              slotProps={{
                line: {
                  strokeWidth: 2,
                },
              }}
              height={60}
              skipAnimation
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
