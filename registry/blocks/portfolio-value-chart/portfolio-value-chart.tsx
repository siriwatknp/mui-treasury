"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { LineChart } from "@mui/x-charts/LineChart";

// Generate mock data for the chart
const generateData = () => {
  // Simple x-axis points (0-32 for days)
  const xData = Array.from({ length: 33 }, (_, i) => i);

  // Generate EKG-like portfolio values with more dramatic variations
  const etfData = xData.map((day) => {
    // ETF: Multiple frequency waves for EKG-like pattern
    const base = 95000;
    const wave1 = Math.sin(day * 0.8) * 3000;
    const wave2 = Math.sin(day * 1.5) * 2000;
    const wave3 = Math.cos(day * 0.3) * 1500;
    const noise = Math.sin(day * 3) * 500;
    return base + wave1 + wave2 + wave3 + noise + day * 50;
  });

  const vitainvestData = xData.map((day) => {
    // Vitainvest: Strong upward trend with oscillations
    const base = 85000;
    const wave1 = Math.sin(day * 0.6) * 2500;
    const wave2 = Math.cos(day * 1.2) * 1500;
    const spike = day % 5 === 0 ? Math.random() * 1000 : 0;
    return base + wave1 + wave2 + spike + day * 600;
  });

  const ishareData = xData.map((day) => {
    // iShares: Volatile pattern with sharp movements
    const base = 115000;
    const wave1 = Math.sin(day * 0.4) * 5000;
    const wave2 = Math.cos(day * 0.9) * 3000;
    const wave3 = Math.sin(day * 2) * 2000;
    const trend = day < 16 ? -day * 400 : (day - 16) * 300;
    return base + wave1 + wave2 + wave3 + trend;
  });

  return { xData, etfData, vitainvestData, ishareData };
};

const { xData, etfData, vitainvestData, ishareData } = generateData();

// Format x-axis labels
const xAxisData = xData.map((_: number, index: number) => {
  if (index === 0) return "Aug 25";
  if (index === 4) return "Aug 29";
  if (index === 8) return "Sep 02";
  if (index === 12) return "Sep 06";
  if (index === 16) return "Sep 10";
  if (index === 20) return "Sep 14";
  if (index === 24) return "Sep 18";
  if (index === 28) return "Sep 22";
  if (index === 32) return "Sep 26";
  return "";
});

export default function PortfolioValueChart() {
  return (
    <Card
      sx={(theme) => ({
        p: 3,
        borderRadius: 2,
        border: `1px solid`,
        borderColor: "divider",
        bgcolor: "background.paper",
        boxShadow: "none",
        ...theme.applyStyles("dark", {
          borderColor: "divider",
        }),
      })}
    >
      <Stack spacing={3}>
        <Box>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              mb: 0.5,
            }}
          >
            Portfolio Value
          </Typography>
          <Typography
            variant="h4"
            component="div"
            sx={{
              fontWeight: 700,
              color: "text.primary",
            }}
          >
            $328,505.10
          </Typography>
        </Box>

        <Stack
          direction="row"
          spacing={2.5}
          sx={{ px: 1 }}
          role="list"
          aria-label="Portfolio legend"
        >
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            role="listitem"
          >
            <Box
              sx={{
                width: 24,
                height: 3,
                bgcolor: "#2196F3",
                borderRadius: 1,
              }}
              aria-hidden="true"
            />
            <Typography variant="body2" color="text.secondary">
              ETF Shares Vital
            </Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            role="listitem"
          >
            <Box
              sx={{
                width: 24,
                height: 3,
                bgcolor: "#00BCD4",
                borderRadius: 1,
              }}
              aria-hidden="true"
            />
            <Typography variant="body2" color="text.secondary">
              Vitainvest Core
            </Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            role="listitem"
          >
            <Box
              sx={{
                width: 24,
                height: 3,
                bgcolor: "#9C27B0",
                borderRadius: 1,
              }}
              aria-hidden="true"
            />
            <Typography variant="body2" color="text.secondary">
              iShares Tech Growth
            </Typography>
          </Stack>
        </Stack>

        <Box
          sx={{ width: "100%", height: 350 }}
          role="img"
          aria-label="Portfolio performance chart showing ETF Shares Vital, Vitainvest Core, and iShares Tech Growth from August 25 to September 26"
        >
          <LineChart
            series={[
              {
                data: etfData,
                color: "#2196F3",
                curve: "catmullRom",
                showMark: false,
              },
              {
                data: vitainvestData,
                color: "#00BCD4",
                curve: "catmullRom",
                showMark: false,
              },
              {
                data: ishareData,
                color: "#9C27B0",
                curve: "catmullRom",
                showMark: false,
              },
            ]}
            xAxis={[
              {
                data: xData,
                scaleType: "point",
                tickLabelStyle: {
                  fontSize: 12,
                  fill: "var(--mui-palette-text-secondary)",
                },
                tickNumber: 9,
                valueFormatter: (value) => {
                  const index = xData.indexOf(value);
                  return xAxisData[index] || "";
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
              left: 10,
              right: 10,
              top: 30,
              bottom: 40,
            }}
            height={350}
            grid={{
              horizontal: true,
              vertical: false,
            }}
            sx={(theme) => ({
              "& .MuiChartsAxis-line": {
                stroke: "var(--mui-palette-divider)",
                strokeOpacity: 0.3,
              },
              "& .MuiChartsAxis-tick": {
                stroke: "var(--mui-palette-divider)",
                strokeOpacity: 0.3,
              },
              "& .MuiChartsGrid-line": {
                stroke: "var(--mui-palette-divider)",
                strokeOpacity: 0.15,
              },
              "& .MuiLineElement-root": {
                strokeWidth: 2,
              },
              ...theme.applyStyles("dark", {
                "& .MuiChartsAxis-line": {
                  strokeOpacity: 0.2,
                },
                "& .MuiChartsAxis-tick": {
                  strokeOpacity: 0.2,
                },
                "& .MuiChartsGrid-line": {
                  strokeOpacity: 0.1,
                },
              }),
            })}
          />
        </Box>
      </Stack>
    </Card>
  );
}
