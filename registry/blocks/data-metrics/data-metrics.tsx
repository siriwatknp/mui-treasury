"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";

export default function DataMetrics() {
  const storageUsed = 1.85;
  const storageTotal = 10;
  const storagePercentage = (storageUsed / storageTotal) * 100;

  const revenueData = [30, 32, 28, 31, 33, 35, 32, 38, 36, 42, 40, 45];
  const revenueValue = 45.1;
  const revenueChange = 1.1;
  const revenueChangePercent = 9.1;

  const workspacesUsed = 1;
  const workspacesTotal = 5;
  const workspacesPercentage = (workspacesUsed / workspacesTotal) * 100;

  return (
    <Box sx={{ p: 3 }}>
      <Stack spacing={2.5} direction={{ xs: "column", md: "row" }}>
        {/* Storage Card */}
        <Card
          sx={(theme) => ({
            flex: 1,
            minWidth: 0,
            borderRadius: 3,
            boxShadow: theme.shadows[2],
          })}
        >
          <CardContent sx={{ p: 2.5 }}>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
              Storage used
            </Typography>
            <Typography
              variant="h3"
              component="div"
              sx={{ fontWeight: 700, mb: 1.5, fontSize: "1.75rem" }}
            >
              {storageUsed}GB
            </Typography>
            <Box sx={{ mb: 1 }}>
              <LinearProgress
                variant="determinate"
                value={storagePercentage}
                sx={{
                  height: 6,
                  borderRadius: 1,
                  bgcolor: "grey.200",
                  "& .MuiLinearProgress-bar": {
                    borderRadius: 1,
                  },
                }}
              />
            </Box>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ mt: 1 }}
            >
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                {storagePercentage.toFixed(1)}%
              </Typography>
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                {storageUsed} of {storageTotal}GB
              </Typography>
            </Stack>
          </CardContent>
        </Card>

        {/* Revenue Card */}
        <Card
          sx={(theme) => ({
            flex: 1,
            minWidth: 0,
            borderRadius: 3,
            boxShadow: theme.shadows[2],
          })}
        >
          <CardContent sx={{ p: 2.5 }}>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
              Acme Holding
            </Typography>
            <Stack
              direction="row"
              alignItems="baseline"
              spacing={2}
              sx={{ mb: 2, whiteSpace: "nowrap" }}
            >
              <Typography
                variant="h3"
                component="div"
                sx={{ fontWeight: 700, fontSize: "2rem" }}
              >
                ${revenueValue}K
              </Typography>
              <Typography variant="body2" sx={{ color: "success.main" }}>
                +${revenueChange}K +{revenueChangePercent}%
              </Typography>
            </Stack>
            <Box sx={{ height: 60, mt: 1 }}>
              <SparkLineChart
                data={revenueData}
                height={60}
                showTooltip
                showHighlight
                sx={{
                  "& .MuiChartsAxis-root": {
                    display: "none",
                  },
                }}
              />
            </Box>
          </CardContent>
        </Card>

        {/* Workspaces Card */}
        <Card
          sx={(theme) => ({
            flex: 1,
            minWidth: 0,
            borderRadius: 3,
            boxShadow: theme.shadows[2],
          })}
        >
          <CardContent sx={{ p: 2.5 }}>
            <Stack
              direction="row"
              flexWrap="wrap"
              justifyContent="space-between"
              alignItems="flex-start"
              spacing={2}
            >
              <Stack spacing={0.25}>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Data Workspaces
                </Typography>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  {workspacesUsed} of {workspacesTotal} used
                </Typography>
              </Stack>
              <Box
                sx={{
                  position: "relative",
                  display: "inline-flex",
                }}
              >
                <CircularProgress
                  variant="determinate"
                  value={100}
                  size={100}
                  thickness={4}
                  sx={{
                    color: "grey.200",
                    position: "absolute",
                  }}
                />
                <CircularProgress
                  variant="determinate"
                  value={workspacesPercentage}
                  size={100}
                  thickness={4}
                  sx={{
                    color: "primary.main",
                    "& .MuiCircularProgress-circle": {
                      strokeLinecap: "round",
                    },
                  }}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: 500 }}
                  >
                    {workspacesPercentage}%
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Stack>

      {/* Section Title */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1 }}>
          Data Bars, Spark Charts, and Progress Circles
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Micro visualizations to highlight even the smallest details better.
        </Typography>
      </Box>
    </Box>
  );
}
