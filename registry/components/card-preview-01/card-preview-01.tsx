"use client";

import * as React from "react";
import { PreviewCard } from "@base-ui-components/react/preview-card";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function CardPreview01() {
  return (
    <Box sx={{ maxWidth: 600, mx: "auto", p: 4 }}>
      <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
        The principles of good{" "}
        <PreviewCard.Root>
          <PreviewCard.Trigger
            aria-haspopup="dialog"
            render={<Link href="#" />}
          >
            typography
          </PreviewCard.Trigger>
          <PreviewCard.Portal>
            <PreviewCard.Positioner side="bottom" sideOffset={8}>
              <PreviewCard.Popup
                render={
                  <Box
                    sx={{
                      transformOrigin: "var(--transform-origin)",
                      "&[data-starting-style]": {
                        opacity: 0,
                        transform: "scale(0.95)",
                      },
                      "&[data-ending-style]": {
                        opacity: 0,
                        transform: "scale(0.95)",
                        transition: "opacity 150ms, transform 150ms",
                      },
                      transition: "opacity 150ms, transform 150ms",
                    }}
                  />
                }
              >
                <Card sx={{ maxWidth: 320 }}>
                  <CardMedia
                    component="img"
                    image="https://placehold.co/640x360"
                    alt="Typography example showing Station Hopplein signage"
                    sx={{
                      aspectRatio: "16/9",
                      objectFit: "cover",
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="subtitle1"
                      component="h3"
                      fontWeight="bold"
                      gutterBottom
                    >
                      Typography
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Typography is the art and science of arranging type to
                      make written language clear, visually appealing, and
                      effective in communication.
                    </Typography>
                  </CardContent>
                </Card>
              </PreviewCard.Popup>
            </PreviewCard.Positioner>
          </PreviewCard.Portal>
        </PreviewCard.Root>{" "}
        remain into
      </Typography>
    </Box>
  );
}
