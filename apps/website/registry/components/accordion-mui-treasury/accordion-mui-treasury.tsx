'use client';

import * as React from 'react';

import {
  ExpandMore,
  InfoOutlined,
  LockOutlined,
  StarBorder,
} from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Stack,
  Typography,
} from '@mui/material';

export function AccordionMuiTreasury() {
  return (
    <Stack spacing={3} sx={{ width: '100%' }}>
      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Basic
        </Typography>
        <Stack>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography>Getting started</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">
                Install the MUI Treasury theme and wrap your app with the
                ThemeProvider to apply the styles globally.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography>Theming</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">
                Customize the palette, typography and shadows from a single
                token source.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography>Components</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">
                Pick from a curated set of MUI primitives styled with the
                Treasury system.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          With chips and icons
        </Typography>
        <Stack>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
                sx={{ width: '100%' }}
              >
                <StarBorder fontSize="small" />
                <Typography sx={{ flexGrow: 1 }}>Featured plan</Typography>
                <Chip label="New" size="small" color="primary" />
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">
                Highlighted plan with priority support and advanced analytics.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
                sx={{ width: '100%' }}
              >
                <InfoOutlined fontSize="small" />
                <Typography sx={{ flexGrow: 1 }}>Standard plan</Typography>
                <Chip label="Popular" size="small" variant="outlined" />
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">
                Everything you need to get a project off the ground.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Disabled
        </Typography>
        <Accordion disabled>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <LockOutlined fontSize="small" />
              <Typography>Locked section</Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary">
              Upgrade your plan to unlock this content.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Stack>
  );
}
