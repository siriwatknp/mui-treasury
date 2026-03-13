"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import ExpandMoreRounded from "@mui/icons-material/ExpandMoreRounded";
import AddRounded from "@mui/icons-material/AddRounded";

import { CollapsibleButton } from "@/registry/components/collapsible/collapsible-button";
import { CollapsibleContent } from "@/registry/components/collapsible/collapsible-content";
import { CollapsibleIcon } from "@/registry/components/collapsible/collapsible-icon";

export function Demo() {
  return (
    <Box sx={{ display: "flex", gap: 4 }}>
      <Box sx={{ width: 200 }}>
        <Typography
          sx={{ mb: 1, color: "text.secondary", typography: "caption" }}
        >
          rotate 180deg (default)
        </Typography>
        <CollapsibleButton
          defaultChecked
          sx={{ mb: 2 }}
          endIcon={
            <CollapsibleIcon>
              <ExpandMoreRounded />
            </CollapsibleIcon>
          }
        >
          Toggle
        </CollapsibleButton>
        <CollapsibleContent>
          <div>
            <Paper>
              <Typography variant="body2" sx={{ p: 2 }}>
                Content with default 180deg rotation on the icon.{" "}
                <Link href="#">Learn more</Link>
              </Typography>
            </Paper>
          </div>
        </CollapsibleContent>
      </Box>
      <Box sx={{ width: 200 }}>
        <Typography
          sx={{ mb: 1, color: "text.secondary", typography: "caption" }}
        >
          rotate 45deg
        </Typography>
        <CollapsibleButton
          defaultChecked
          endIcon={
            <CollapsibleIcon rotate="45deg">
              <AddRounded />
            </CollapsibleIcon>
          }
          sx={{ mb: 2 }}
        >
          Toggle
        </CollapsibleButton>
        <CollapsibleContent>
          <div>
            <Paper>
              <Typography variant="body2" sx={{ p: 2 }}>
                Content with 45deg rotation on the icon.{" "}
                <Link href="#">Learn more</Link>
              </Typography>
            </Paper>
          </div>
        </CollapsibleContent>
      </Box>
    </Box>
  );
}
