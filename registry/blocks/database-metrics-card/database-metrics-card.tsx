"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { LineChart } from "@mui/x-charts/LineChart";

// Generate mock data for the charts
const generateChartData = () => {
  const dates = [];
  const readCurrent = [];
  const readPrevious = [];
  const writeCurrent = [];
  const writePrevious = [];

  // Generate dates from Apr 16 to May 16
  const startDate = new Date(2024, 3, 16); // April 16
  const endDate = new Date(2024, 4, 16); // May 16

  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    const dayIndex = dates.length;
    dates.push(d.getTime());

    // Generate read data with upward trend
    const baseRead = 615752;
    const trendRead = dayIndex * 900;
    const noiseRead = Math.sin(dayIndex * 0.5) * 15000 + Math.random() * 5000;
    readCurrent.push(baseRead + trendRead + noiseRead);
    readPrevious.push(baseRead - 10000 + Math.random() * 8000);

    // Generate write data with slight downward trend
    const baseWrite = 86580;
    const trendWrite = -dayIndex * 100;
    const noiseWrite = Math.sin(dayIndex * 0.4) * 3000 + Math.random() * 2000;
    writeCurrent.push(baseWrite + trendWrite + noiseWrite);
    writePrevious.push(baseWrite + 5000 + Math.random() * 3000);
  }

  return {
    dates,
    readCurrent,
    readPrevious,
    writeCurrent,
    writePrevious,
  };
};

const { dates, readCurrent, readPrevious, writeCurrent, writePrevious } =
  generateChartData();

interface MetricCardProps {
  title: string;
  value: string;
  comparison: string;
  percentageChange: number;
  chartData: number[];
  previousData: number[];
}

function MetricCard({
  title,
  value,
  comparison,
  percentageChange,
  chartData,
  previousData,
}: MetricCardProps) {
  const isPositive = percentageChange > 0;

  return (
    <Stack spacing={2} sx={{ flex: 1 }}>
      <Box>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontWeight: 500,
            }}
          >
            {title}
          </Typography>
          <Chip
            label={`${isPositive ? "+" : ""}${percentageChange}%`}
            size="small"
            variant="filled"
            color={isPositive ? "success" : "error"}
            sx={{
              height: 20,
              fontSize: 12,
              fontWeight: 600,
              "& .MuiChip-label": {
                px: 0.75,
              },
            }}
            aria-label={`${percentageChange}% ${
              isPositive ? "increase" : "decrease"
            }`}
          />
        </Stack>
        <Box
          sx={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "text.primary",
              mb: 0.5,
            }}
          >
            {value}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: "text.secondary",
            }}
          >
            {comparison}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{ width: "100%", height: 140 }}
        role="img"
        aria-label={`${title} trend chart showing ${
          isPositive ? "growth" : "decline"
        } over time`}
      >
        <LineChart
          series={[
            {
              data: previousData,
              color: "#9CA3AF",
              curve: "linear",
              showMark: false,
              area: true,
              stack: "A",
            },
            {
              data: chartData,
              color: "#3B82F6",
              curve: "linear",
              showMark: false,
              area: true,
              stack: "B",
            },
          ]}
          xAxis={[
            {
              data: dates,
              scaleType: "time",
              tickLabelStyle: {
                fontSize: 11,
                fill: "var(--mui-palette-text-secondary)",
              },
              // tickNumber: 2,
              valueFormatter: (value) => {
                const date = new Date(value);
                return `${String(date.getDate()).padStart(2, "0")}/${String(
                  date.getMonth() + 1
                ).padStart(2, "0")}/${date.getFullYear()}`;
              },
            },
          ]}
          yAxis={[
            {
              position: "none",
              width: 0,
            },
          ]}
          margin={{
            left: -24,
            right: -32,
            top: 0,
            bottom: 0,
          }}
          height={140}
          sx={(theme) => ({
            "& .MuiLineElement-root": {
              strokeWidth: 2,
            },
            "& .MuiAreaElement-root": {
              fillOpacity: 0.15,
            },
            "& .MuiChartsAxis-line": {
              display: "none",
            },
            "& .MuiChartsAxis-tick": {
              display: "none",
            },
            ...theme.applyStyles("dark", {
              "& .MuiAreaElement-root": {
                fillOpacity: 0.1,
              },
            }),
          })}
        />
      </Box>
    </Stack>
  );
}

export default function DatabaseMetricsCard() {
  return (
    <Card
      sx={(theme) => ({
        p: 3,
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        boxShadow: "none",
        ...theme.applyStyles("dark", {
          borderColor: "divider",
        }),
      })}
    >
      <Stack direction="row" spacing={4}>
        <MetricCard
          title="Rows read"
          value="643,015"
          comparison="from 615,752"
          percentageChange={4.4}
          chartData={readCurrent}
          previousData={readPrevious}
        />
        <MetricCard
          title="Rows written"
          value="83,197"
          comparison="from 86,580"
          percentageChange={-3.9}
          chartData={writeCurrent}
          previousData={writePrevious}
        />
      </Stack>
    </Card>
  );
}
