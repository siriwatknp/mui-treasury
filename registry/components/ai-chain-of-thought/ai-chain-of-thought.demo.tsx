"use client";

import {
  ChainOfThought,
  ChainOfThoughtHeader,
  ChainOfThoughtContent,
  ChainOfThoughtStep,
  ChainOfThoughtSearchResults,
  ChainOfThoughtSearchResult,
  ChainOfThoughtImage,
} from "./ai-chain-of-thought";
import {
  SearchIcon,
  FileTextIcon,
  CheckCircleIcon,
  CodeIcon,
} from "lucide-react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function AIChainOfThoughtDemo() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4, p: 4 }}>
      {/* Basic Chain of Thought */}
      <Box>
        <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
          Basic Chain of Thought (Collapsed by Default)
        </Typography>
        <ChainOfThought>
          <ChainOfThoughtHeader>Analyzing your request</ChainOfThoughtHeader>
          <ChainOfThoughtContent>
            <ChainOfThoughtStep
              icon={SearchIcon}
              label="Searching for relevant information"
              description="Looking through documentation and examples"
              status="complete"
            >
              <ChainOfThoughtSearchResults>
                <ChainOfThoughtSearchResult label="React Hooks" />
                <ChainOfThoughtSearchResult label="useState" />
                <ChainOfThoughtSearchResult label="useEffect" />
              </ChainOfThoughtSearchResults>
            </ChainOfThoughtStep>

            <ChainOfThoughtStep
              icon={FileTextIcon}
              label="Reading documentation"
              description="Found 3 relevant articles"
              status="complete"
            />

            <ChainOfThoughtStep
              icon={CodeIcon}
              label="Generating solution"
              description="Creating optimized code based on best practices"
              status="active"
            />

            <ChainOfThoughtStep
              icon={CheckCircleIcon}
              label="Verifying output"
              status="pending"
            />
          </ChainOfThoughtContent>
        </ChainOfThought>
      </Box>

      {/* Chain of Thought Open by Default */}
      <Box>
        <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
          Chain of Thought (Open by Default)
        </Typography>
        <ChainOfThought defaultOpen>
          <ChainOfThoughtHeader>Processing image analysis</ChainOfThoughtHeader>
          <ChainOfThoughtContent>
            <ChainOfThoughtStep
              icon={SearchIcon}
              label="Analyzing image content"
              description="Identifying objects and patterns"
              status="complete"
            >
              <ChainOfThoughtSearchResults>
                <ChainOfThoughtSearchResult label="Dashboard UI" />
                <ChainOfThoughtSearchResult label="Charts" />
                <ChainOfThoughtSearchResult label="Data Table" />
              </ChainOfThoughtSearchResults>
            </ChainOfThoughtStep>

            <ChainOfThoughtStep
              icon={FileTextIcon}
              label="Extracting text elements"
              description="Found title, labels, and data points"
              status="complete"
            />

            <ChainOfThoughtStep
              icon={CheckCircleIcon}
              label="Complete"
              description="Analysis finished successfully"
              status="complete"
            />
          </ChainOfThoughtContent>
        </ChainOfThought>
      </Box>

      {/* Chain of Thought with Image */}
      <Box>
        <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
          Chain of Thought with Image
        </Typography>
        <ChainOfThought defaultOpen>
          <ChainOfThoughtHeader>Generating visualization</ChainOfThoughtHeader>
          <ChainOfThoughtContent>
            <ChainOfThoughtStep
              icon={SearchIcon}
              label="Gathering data"
              description="Collecting metrics from the last 30 days"
              status="complete"
            >
              <ChainOfThoughtSearchResults>
                <ChainOfThoughtSearchResult label="Sales Data" />
                <ChainOfThoughtSearchResult label="User Activity" />
                <ChainOfThoughtSearchResult label="Performance Metrics" />
              </ChainOfThoughtSearchResults>
            </ChainOfThoughtStep>

            <ChainOfThoughtStep
              icon={CodeIcon}
              label="Creating chart"
              description="Generating interactive visualization"
              status="complete"
            >
              <ChainOfThoughtImage caption="Monthly sales performance chart">
                <Box
                  sx={{
                    width: "100%",
                    height: 200,
                    bgcolor: "background.paper",
                    borderRadius: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: 1,
                    borderColor: "divider",
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    [Chart Visualization]
                  </Typography>
                </Box>
              </ChainOfThoughtImage>
            </ChainOfThoughtStep>

            <ChainOfThoughtStep
              icon={CheckCircleIcon}
              label="Visualization ready"
              description="Chart has been generated successfully"
              status="complete"
            />
          </ChainOfThoughtContent>
        </ChainOfThought>
      </Box>

      {/* Custom Header Text */}
      <Box>
        <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
          Custom Header Text
        </Typography>
        <ChainOfThought>
          <ChainOfThoughtHeader>
            Advanced Reasoning Process
          </ChainOfThoughtHeader>
          <ChainOfThoughtContent>
            <ChainOfThoughtStep label="Step 1: Initialize" status="complete" />
            <ChainOfThoughtStep
              label="Step 2: Process"
              description="Processing complex algorithms"
              status="active"
            />
            <ChainOfThoughtStep label="Step 3: Finalize" status="pending" />
          </ChainOfThoughtContent>
        </ChainOfThought>
      </Box>
    </Box>
  );
}
