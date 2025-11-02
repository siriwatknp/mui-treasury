"use client";

import {
  Artifact,
  ArtifactHeader,
  ArtifactTitle,
  ArtifactDescription,
  ArtifactActions,
  ArtifactAction,
  ArtifactClose,
  ArtifactContent,
} from "./ai-artifact";
import { CopyIcon, ShareIcon, DownloadIcon, ExpandIcon } from "lucide-react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function AIArtifactDemo() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4, p: 4 }}>
      {/* Basic Artifact */}
      <Box sx={{ maxWidth: 600 }}>
        <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
          Basic Artifact
        </Typography>
        <Artifact>
          <ArtifactHeader>
            <Box>
              <ArtifactTitle>Generated Code</ArtifactTitle>
              <ArtifactDescription>
                Python function to calculate fibonacci
              </ArtifactDescription>
            </Box>
            <ArtifactActions>
              <ArtifactAction
                tooltip="Copy to clipboard"
                icon={CopyIcon}
                onClick={() => console.log("Copy clicked")}
              />
              <ArtifactAction
                tooltip="Share"
                icon={ShareIcon}
                onClick={() => console.log("Share clicked")}
              />
              <ArtifactClose onClick={() => console.log("Close clicked")} />
            </ArtifactActions>
          </ArtifactHeader>
          <ArtifactContent>
            <Box
              component="pre"
              sx={{
                m: 0,
                p: 2,
                bgcolor: "grey.50",
                borderRadius: 1,
                overflow: "auto",
                fontSize: "0.875rem",
                fontFamily: "monospace",
              }}
            >
              {`def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Example usage
for i in range(10):
    print(f"F({i}) = {fibonacci(i)}")`}
            </Box>
          </ArtifactContent>
        </Artifact>
      </Box>

      {/* Artifact with Rich Content */}
      <Box sx={{ maxWidth: 600 }}>
        <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
          Artifact with Rich Content
        </Typography>
        <Artifact>
          <ArtifactHeader>
            <Box>
              <ArtifactTitle>Data Visualization</ArtifactTitle>
              <ArtifactDescription>
                Monthly sales chart for Q4 2024
              </ArtifactDescription>
            </Box>
            <ArtifactActions>
              <ArtifactAction
                tooltip="Download"
                icon={DownloadIcon}
                onClick={() => console.log("Download clicked")}
              />
              <ArtifactAction
                tooltip="Expand"
                icon={ExpandIcon}
                onClick={() => console.log("Expand clicked")}
              />
              <ArtifactClose onClick={() => console.log("Close clicked")} />
            </ArtifactActions>
          </ArtifactHeader>
          <ArtifactContent>
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Sales Performance
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                The chart shows a steady increase in sales throughout Q4, with a
                notable spike during the holiday season.
              </Typography>
              <Box
                sx={{
                  height: 200,
                  bgcolor: "action.hover",
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  [Chart Placeholder]
                </Typography>
              </Box>
            </Box>
          </ArtifactContent>
        </Artifact>
      </Box>

      {/* Compact Artifact */}
      <Box sx={{ maxWidth: 600 }}>
        <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
          Compact Artifact (No Description)
        </Typography>
        <Artifact>
          <ArtifactHeader>
            <ArtifactTitle>Quick Note</ArtifactTitle>
            <ArtifactActions>
              <ArtifactAction
                tooltip="Copy"
                icon={CopyIcon}
                onClick={() => console.log("Copy clicked")}
              />
              <ArtifactClose onClick={() => console.log("Close clicked")} />
            </ArtifactActions>
          </ArtifactHeader>
          <ArtifactContent>
            <Typography variant="body2">
              This is a simple note artifact without a description, showing a
              more compact header layout.
            </Typography>
          </ArtifactContent>
        </Artifact>
      </Box>
    </Box>
  );
}
