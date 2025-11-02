"use client";

import BarChartIcon from "@mui/icons-material/BarChart";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function PaymentOverviewCard() {
  return (
    <Card
      sx={{
        p: 3,
        display: "flex",
        alignItems: "stretch",
        gap: 3,
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      <Box
        component="section"
        aria-label="Total Outstanding"
        sx={{ flex: 1, display: "flex", gap: 2 }}
      >
        <BarChartIcon aria-hidden="true" sx={{ fontSize: 24 }} />
        <Stack spacing={0.5}>
          <Typography
            variant="body2"
            sx={(theme) => ({
              color: (theme.vars || theme).palette.text.secondary,
            })}
          >
            Total Outstanding
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={(theme) => ({
              fontWeight: 600,
              color: (theme.vars || theme).palette.text.primary,
            })}
          >
            $58,764.25
          </Typography>
        </Stack>
      </Box>

      <Divider orientation="vertical" flexItem />

      <Box
        component="section"
        aria-label="Upcoming Payment"
        sx={{ flex: 1, display: "flex", gap: 2 }}
      >
        <CalendarMonthIcon aria-hidden="true" sx={{ fontSize: 24 }} />
        <Stack spacing={0.5}>
          <Typography
            variant="body2"
            sx={(theme) => ({
              color: (theme.vars || theme).palette.text.secondary,
            })}
          >
            Upcoming Payment
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={(theme) => ({
              fontWeight: 600,
              color: (theme.vars || theme).palette.text.primary,
            })}
          >
            April 1st, 2022
          </Typography>
        </Stack>
      </Box>
    </Card>
  );
}
