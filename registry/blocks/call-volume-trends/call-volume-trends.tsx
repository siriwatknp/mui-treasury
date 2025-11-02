"use client";

import { Box, Card, Stack, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

export default function CallVolumeTrends() {
  const timePoints = [
    "00:00",
    "02:00",
    "04:00",
    "06:00",
    "08:00",
    "10:00",
    "11:59",
  ];

  const todayData = [520, 510, 490, 510, 540, 580, 573];
  const yesterdayData = [440, 430, 420, 430, 450, 470, 451];

  return (
    <Card
      sx={{
        p: 3,
        borderRadius: 2,
      }}
    >
      <Stack spacing={3}>
        <Typography variant="h6" sx={{ color: "text.secondary" }}>
          Call Volume Trends
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
          <Stack spacing={1.5}>
            <Box>
              <Stack direction="row" spacing={1} alignItems="center" mb={0.5}>
                <Box
                  sx={{
                    width: 14,
                    height: 14,
                    borderRadius: 0.5,
                    bgcolor: "#2196f3",
                  }}
                />
                <Typography variant="body2" sx={{ color: "text.primary" }}>
                  Today
                </Typography>
              </Stack>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  fontSize: "3rem",
                  lineHeight: 1.2,
                }}
              >
                573
              </Typography>
            </Box>

            <Box>
              <Stack direction="row" spacing={1} alignItems="center" mb={0.5}>
                <Box
                  sx={{
                    width: 14,
                    height: 14,
                    borderRadius: 0.5,
                    bgcolor: "grey.400",
                  }}
                />
                <Typography variant="body2" sx={{ color: "text.primary" }}>
                  Yesterday
                </Typography>
              </Stack>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  fontSize: "3rem",
                  lineHeight: 1.2,
                }}
              >
                451
              </Typography>
            </Box>
          </Stack>

          <Box sx={{ position: "relative", mt: 1 }}>
            <LineChart
              height={160}
              series={[
                {
                  data: todayData,
                  color: "#2196f3",
                  curve: "monotoneX",
                  showMark: false,
                },
                {
                  data: yesterdayData,
                  color: "#9e9e9e",
                  curve: "monotoneX",
                  showMark: false,
                },
              ]}
              xAxis={[
                {
                  position: "bottom",
                  data: timePoints,
                  scaleType: "point",
                  disableTicks: true,
                  disableLine: true,
                  tickLabelPlacement: "middle",
                },
              ]}
              yAxis={[
                {
                  position: "none",
                },
              ]}
              margin={{
                left: 10,
                right: 10,
                top: 20,
                bottom: 40,
              }}
              sx={{
                ".MuiLineElement-root": {
                  strokeWidth: 2.5,
                },
                ".MuiChartsAxis-tickLabel": {
                  display: "none",
                },
                ".MuiChartsAxis-line": {
                  stroke: "transparent",
                },
                ".MuiChartsAxis-tick": {
                  display: "none",
                },
              }}
            />
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                position: "absolute",
                bottom: 10,
                left: 10,
                right: 10,
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", fontSize: "0.875rem" }}
              >
                0:00 AM
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", fontSize: "0.875rem" }}
              >
                11:59 AM
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Card>
  );
}
