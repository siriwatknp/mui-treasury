import * as React from "react";
import { Suspense } from "react";
import {
  Box,
  Typography,
  Button,
  Chip,
  Stack,
  CircularProgress,
} from "@mui/material";
import { AppHeader } from "@/components/app-header";
import { GettingStartedContent } from "@/components/getting-started-content";
import Link from "next/link";

export default function Home() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <AppHeader />

      {/* Hero Section */}
      <Box
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "max(calc(60vh - 73px), 560px)",
          px: 3,
          textAlign: "center",
        }}
      >
        {/* MUI Plus Chip */}
        <Chip
          label="MUI Plus"
          variant="outlined"
          sx={{
            mb: 3,
            borderColor: "text.secondary",
            color: "text.secondary",
            fontWeight: 500,
          }}
        />

        {/* Main Title */}
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
            fontWeight: 700,
            lineHeight: 1.1,
            mb: 3,
            maxWidth: "12ch",
            color: "text.primary",
          }}
        >
          All you need for MUI project
        </Typography>

        {/* Description */}
        <Typography
          variant="h6"
          component="p"
          sx={{
            fontSize: { xs: "1.1rem", sm: "1.25rem" },
            fontWeight: 400,
            lineHeight: 1.5,
            color: "text.secondary",
            mb: 4,
            maxWidth: "60ch",
          }}
        >
          Hand-crafted MUI theme that isn&apos;t outdated. Build modern,
          accessible interfaces with our carefully designed components and
          thoughtful customizations.
        </Typography>

        {/* Action Buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <Button
            component={Link}
            href="/theme-preview"
            variant="contained"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              fontSize: "1rem",
            }}
          >
            See theme
          </Button>
          <Button
            component={Link}
            href="/authentication"
            variant="outlined"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              fontSize: "1rem",
            }}
          >
            Blocks
          </Button>
        </Stack>
      </Box>

      {/* Getting Started Section */}
      <Suspense
        fallback={
          <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
            <CircularProgress />
          </Box>
        }
      >
        <GettingStartedContent />
      </Suspense>
    </Box>
  );
}
