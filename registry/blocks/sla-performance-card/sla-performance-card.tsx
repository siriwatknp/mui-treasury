"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { PieChart } from "@mui/x-charts/PieChart";
import { useTheme } from "@mui/material/styles";

export default function SlaPerformanceCard() {
  const theme = useTheme();
  const withinSLA = 83.3;
  const breached = 16.7;

  const data = [
    {
      id: 0,
      value: withinSLA,
      label: "Within SLA",
    },
    {
      id: 1,
      value: breached,
      label: "SLA Breached",
    },
  ];

  return (
    <Card
      sx={(theme) => ({
        borderRadius: 2,
        boxShadow: theme.shadows[1],
      })}
    >
      <CardContent sx={{ p: 2.5 }}>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 500,
            mb: 2,
          }}
        >
          SLA Performance
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Stack spacing={2}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: 0.5,
                    bgcolor: "primary.main",
                  }}
                  aria-hidden="true"
                />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Within SLA
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mt: 0.5,
                    }}
                  >
                    {withinSLA}%
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: 0.5,
                    bgcolor: "error.main",
                  }}
                  aria-hidden="true"
                />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    SLA Breached
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mt: 0.5,
                    }}
                  >
                    {breached}%
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Box>

          <Box
            sx={{
              width: 140,
              height: 140,
              position: "relative",
            }}
            role="img"
            aria-label={`SLA Performance chart: ${withinSLA}% within SLA, ${breached}% breached`}
          >
            <PieChart
              series={[
                {
                  data,
                  innerRadius: 40,
                  outerRadius: 60,
                  paddingAngle: 2,
                  cornerRadius: 4,
                  highlightScope: { fade: "global", highlight: "item" },
                  highlighted: { additionalRadius: 2 },
                  valueFormatter: (params) => `${params.value}%`,
                },
              ]}
              colors={[
                (theme.vars || theme).palette.primary.main,
                (theme.vars || theme).palette.error.main,
              ]}
              width={140}
              height={140}
              margin={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }}
              slotProps={{
                legend: {
                  sx: {
                    display: "none",
                  },
                },
              }}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
