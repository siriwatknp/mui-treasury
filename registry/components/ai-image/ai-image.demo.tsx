"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Image } from "./ai-image";

export default function AIImageDemo() {
  // Example base64 placeholder image (400x300 gray rectangle with "AI Image" text)
  const placeholderBase64 =
    "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";

  return (
    <Box sx={{ width: "100%", maxWidth: 672, mx: "auto", p: 4 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 }}>
            AI Generated Image Display
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            This component displays AI-generated images from base64 data.
          </Typography>
        </Box>

        <Box sx={{ display: "grid", gap: 3 }}>
          <Box>
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", display: "block", mb: 1 }}
            >
              Default styling
            </Typography>
            <Image
              base64={placeholderBase64}
              mediaType="image/jpeg"
              alt="AI generated placeholder"
              uint8Array={new Uint8Array(0)}
            />
          </Box>

          <Box>
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", display: "block", mb: 1 }}
            >
              Custom size
            </Typography>
            <Image
              base64={placeholderBase64}
              mediaType="image/jpeg"
              alt="AI generated placeholder"
              uint8Array={new Uint8Array(0)}
              sx={{ width: 128, height: 128, objectFit: "cover" }}
            />
          </Box>

          <Box>
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", display: "block", mb: 1 }}
            >
              With border
            </Typography>
            <Image
              base64={placeholderBase64}
              mediaType="image/jpeg"
              alt="AI generated placeholder"
              uint8Array={new Uint8Array(0)}
              sx={{ border: 2, borderColor: "primary.main", p: 1 }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
