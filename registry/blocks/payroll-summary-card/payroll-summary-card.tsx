"use client";

import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const paymentData = [
  { id: 0, value: 234.2, label: "Payment", color: "#4A90E2" },
  { id: 1, value: 95.86, label: "Payment", color: "#B8A9F3" },
  { id: 2, value: 181.34, label: "Payment", color: "#73C7E8" },
  { id: 3, value: 37.13, label: "Payment", color: "#1E3A5F" },
];

const totalAmount = paymentData.reduce((sum, item) => sum + item.value, 0);
const largestPercentage = Math.round(
  (paymentData[0].value / totalAmount) * 100
);

export default function PayrollSummaryCard() {
  const [timeRange, setTimeRange] = React.useState("last30");

  return (
    <Card sx={{ mx: "auto" }}>
      <CardContent sx={{ p: 3 }}>
        <Stack spacing={3}>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 3,
            }}
          >
            <div>
              <Typography component="h2" variant="h5" fontWeight={600}>
                Payroll Summary
              </Typography>
              {/* Date Range */}
              <Typography variant="body2" color="text.secondary">
                From 1-31 March, 2022
              </Typography>
            </div>
            <Select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              variant="outlined"
              size="small"
              IconComponent={KeyboardArrowDownIcon}
              sx={{
                borderRadius: 2,
                minWidth: 140,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "divider",
                },
              }}
            >
              <MenuItem value="last30">Last 30 days</MenuItem>
              <MenuItem value="last60">Last 60 days</MenuItem>
              <MenuItem value="last90">Last 90 days</MenuItem>
            </Select>
          </Box>

          <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
            {/* Chart Section */}
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <PieChart
                series={[
                  {
                    data: paymentData.map((item) => ({
                      id: item.id,
                      value: item.value,
                      color: item.color,
                    })),
                    innerRadius: 60,
                    outerRadius: 90,
                    paddingAngle: 2,
                    cornerRadius: 4,
                    highlightScope: { fade: "global", highlight: "item" },
                    highlighted: { additionalRadius: 3 },
                  },
                ]}
                width={240}
                height={240}
                margin={{
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
                skipAnimation
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                }}
              >
                <Typography variant="h4" fontWeight={600}>
                  {largestPercentage}
                  <Typography component="span" variant="h5" fontWeight={400}>
                    %
                  </Typography>
                </Typography>
              </Box>
            </Box>
            {/* Payment Grid */}
            <Box
              component="ul"
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 2,
                listStyle: "none",
                p: 0,
                m: 0,
              }}
            >
              {paymentData.map((payment) => (
                <Box
                  component="li"
                  key={payment.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      width: 4,
                      height: "80%",
                      maxHeight: 56,
                      bgcolor: payment.color,
                      borderRadius: 1,
                    }}
                    aria-hidden="true"
                  />
                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      {payment.label}
                    </Typography>
                    <Typography variant="h6" fontWeight={600}>
                      ${payment.value.toFixed(2)}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Action Button */}
          <Box sx={{ display: "flex", justifyContent: "center", pt: 1 }}>
            <Button
              variant="outlined"
              startIcon={<VisibilityOutlinedIcon />}
              sx={{
                borderRadius: 99,
                px: 3,
                py: 1,
                fontSize: "0.9375rem",
                fontWeight: 500,
              }}
            >
              View Transactions
            </Button>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
