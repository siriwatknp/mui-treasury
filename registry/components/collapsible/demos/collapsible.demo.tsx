"use client";

import { CollapsibleContent } from "../collapsible-content";
import { CollapsibleButton } from "../collapsible-button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

export function Demo() {
  return (
    <Box sx={{ width: 200 }}>
      <CollapsibleButton defaultChecked sx={{ mb: 2 }}>
        Toggle content
      </CollapsibleButton>
      <CollapsibleContent>
        <div>
          <Paper>
            <Typography variant="body2" sx={{ p: 2 }}>
              This is the content of the collapsible. It can be any element or
              React component you like. It will be shown or hidden when the
              collapsible is toggled. <Link href="#">Learn more</Link>
            </Typography>
          </Paper>
        </div>
      </CollapsibleContent>
    </Box>
  );
}
