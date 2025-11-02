"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { LineChart } from "@mui/x-charts/LineChart";

export default function MembersMetric() {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Typography color="text.secondary" gutterBottom>
            Members
          </Typography>
          <IconButton
            size="small"
            aria-label="More options for members metric"
            sx={{ color: "text.icon" }}
          >
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box>
            <Typography variant="h3" component="div" sx={{ mb: 1 }}>
              1,210
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              spacing={0.5}
              sx={{ color: "error.text" }}
            >
              <TrendingDownIcon fontSize="small" sx={{ color: "error.main" }} />
              <Typography variant="body2">10% vs last month</Typography>
            </Stack>
          </Box>

          <Box sx={{ flexGrow: 1, minWidth: 100 }}>
            <LineChart
              series={[
                {
                  data: [8, 7.5, 6, 7, 6.5, 5],
                  color: "rgb(255, 56, 60)",
                  showMark: false,
                  curve: "natural",
                },
              ]}
              height={60}
              margin={{
                left: 0,
                right: 0,
                top: 5,
                bottom: 5,
              }}
              xAxis={[
                {
                  scaleType: "point",
                  data: [1, 2, 3, 4, 5, 6],
                  disableLine: true,
                  disableTicks: true,
                  tickLabelStyle: {
                    fontSize: 0,
                  },
                },
              ]}
              yAxis={[
                {
                  disableLine: true,
                  disableTicks: true,
                  tickLabelStyle: {
                    fontSize: 0,
                  },
                },
              ]}
              skipAnimation
              disableAxisListener
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
