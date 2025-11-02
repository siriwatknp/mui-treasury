"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import { LineChart } from "@mui/x-charts/LineChart";

const chartData = [
  { date: "Feb 1", value: 3800 },
  { date: "Feb 5", value: 3200 },
  { date: "Feb 8", value: 3900 },
  { date: "Feb 11", value: 3900 },
  { date: "Feb 15", value: 4251 },
  { date: "Feb 18", value: 5100 },
  { date: "Feb 22", value: 4800 },
  { date: "Feb 25", value: 4800 },
  { date: "Feb 28", value: 5200 },
];

export default function PaymentHistoryChart() {
  const [period, setPeriod] = React.useState("1M");

  const handlePeriodChange = (
    event: React.MouseEvent<HTMLElement>,
    newPeriod: string | null
  ) => {
    if (newPeriod !== null) {
      setPeriod(newPeriod);
    }
  };

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography variant="h6" component="h2">
            Payment History
          </Typography>
          <ToggleButtonGroup
            value={period}
            exclusive
            onChange={handlePeriodChange}
            aria-label="time period selection"
            size="small"
          >
            <ToggleButton value="1M" aria-label="1 month">
              1M
            </ToggleButton>
            <ToggleButton value="3M" aria-label="3 months">
              3M
            </ToggleButton>
            <ToggleButton value="6M" aria-label="6 months">
              6M
            </ToggleButton>
            <ToggleButton value="1Y" aria-label="1 year">
              1Y
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Stack spacing={0.5} sx={{ mb: 3 }}>
          <Typography variant="h3" sx={{ fontWeight: 600 }}>
            $12,135.69
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Chip
              label="+23%"
              size="small"
              variant="filled"
              color="success"
              sx={{
                height: 24,
                fontSize: "0.875rem",
                fontWeight: 500,
              }}
            />
            <Typography variant="body2" color="text.secondary">
              vs last month
            </Typography>
          </Box>
        </Stack>

        <Box sx={{ position: "relative" }}>
          <LineChart
            xAxis={[
              {
                data: chartData.map((_, index) => index),
                valueFormatter: (value: number) => {
                  const labels = [
                    "Feb 1",
                    "Feb 8",
                    "Feb 15",
                    "Feb 22",
                    "Feb 28",
                  ];
                  const step = Math.floor(
                    (value * labels.length) / chartData.length
                  );
                  return labels[Math.min(step, labels.length - 1)] || "";
                },
                tickNumber: 5,
                position: "bottom",
              },
            ]}
            yAxis={[
              {
                position: "none",
              },
            ]}
            series={[
              {
                data: chartData.map((d) => d.value),
                area: true,
                color: "#4caf50",
                curve: "natural",
                showMark: false,
              },
            ]}
            margin={{
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
            sx={(theme) => ({
              "& .MuiLineElement-root": {
                strokeWidth: 2,
              },
              "& .MuiAreaElement-root": {
                fillOpacity: 0.15,
              },
              "& .MuiChartsAxis-tick": {
                display: "none",
              },
              "& .MuiChartsAxis-line": {
                display: "none",
              },
              "& .MuiChartsAxis-tickLabel": {
                fill: (theme.vars || theme).palette.text.secondary,
                fontSize: "0.75rem",
              },
            })}
            slotProps={{
              legend: {
                sx: { display: "none" },
              },
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
