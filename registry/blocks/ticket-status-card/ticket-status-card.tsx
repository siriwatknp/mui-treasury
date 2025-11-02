import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function TicketStatusCard() {
  const totalTickets = 247;
  const resolved = 82;
  const inProgress = 13;
  const escalated = 5;

  return (
    <Card sx={{ borderRadius: 2 }}>
      <CardContent sx={{ p: 3 }}>
        <Stack spacing={2.5}>
          <Typography variant="body2" color="text.secondary">
            Current Tickets
          </Typography>

          <Typography variant="h2" component="div" fontWeight="bold">
            {totalTickets}
          </Typography>

          <Box
            role="progressbar"
            aria-label={`Ticket distribution: ${resolved}% resolved, ${inProgress}% in progress, ${escalated}% escalated`}
            aria-valuenow={totalTickets}
            sx={{
              display: "flex",
              height: 6,
              borderRadius: 1,
              overflow: "hidden",
              bgcolor: "grey.100",
            }}
          >
            <Box
              sx={{
                width: `${resolved}%`,
                bgcolor: "primary.main",
              }}
              aria-hidden="true"
            />
            <Box
              sx={{
                width: `${inProgress}%`,
                bgcolor: "grey.500",
              }}
              aria-hidden="true"
            />
            <Box
              sx={{
                width: `${escalated}%`,
                bgcolor: "error.main",
              }}
              aria-hidden="true"
            />
          </Box>

          <Box
            component="dl"
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 2,
              m: 0,
            }}
          >
            <Box sx={{ textAlign: "left" }}>
              <Typography
                component="dt"
                variant="body1"
                fontWeight="bold"
                sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
              >
                <Box
                  component="span"
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: 0.5,
                    bgcolor: "primary.main",
                    display: "inline-block",
                  }}
                  aria-hidden="true"
                />
                {resolved}%
              </Typography>
              <Typography
                component="dd"
                variant="body2"
                color="text.secondary"
                sx={{ m: 0, mt: 0.5 }}
              >
                Resolved
              </Typography>
            </Box>

            <Box sx={{ textAlign: "left" }}>
              <Typography
                component="dt"
                variant="body1"
                fontWeight="bold"
                sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
              >
                <Box
                  component="span"
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: 0.5,
                    bgcolor: "grey.500",
                    display: "inline-block",
                  }}
                  aria-hidden="true"
                />
                {inProgress}%
              </Typography>
              <Typography
                component="dd"
                variant="body2"
                color="text.secondary"
                sx={{ m: 0, mt: 0.5 }}
              >
                In Progress
              </Typography>
            </Box>

            <Box sx={{ textAlign: "left" }}>
              <Typography
                component="dt"
                variant="body1"
                fontWeight="bold"
                sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
              >
                <Box
                  component="span"
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: 0.5,
                    bgcolor: "error.main",
                    display: "inline-block",
                  }}
                  aria-hidden="true"
                />
                {escalated}%
              </Typography>
              <Typography
                component="dd"
                variant="body2"
                color="text.secondary"
                sx={{ m: 0, mt: 0.5 }}
              >
                Escalated
              </Typography>
            </Box>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
