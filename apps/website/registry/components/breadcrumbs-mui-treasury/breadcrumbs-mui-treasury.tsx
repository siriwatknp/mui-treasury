'use client';

import * as React from 'react';

import {
  ChevronRight,
  Dashboard,
  Folder,
  Home,
  NavigateNext,
} from '@mui/icons-material';
import { Box, Breadcrumbs, Link, Stack, Typography } from '@mui/material';

export function BreadcrumbsMuiTreasury() {
  return (
    <Stack spacing={3} sx={{ width: '100%' }}>
      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Basic
        </Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="#">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="#">
            Library
          </Link>
          <Typography color="text.primary">Breadcrumbs</Typography>
        </Breadcrumbs>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          With icons
        </Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            href="#"
            sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
          >
            <Home fontSize="small" />
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="#"
            sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
          >
            <Dashboard fontSize="small" />
            Dashboard
          </Link>
          <Typography
            color="text.primary"
            sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
          >
            <Folder fontSize="small" />
            Projects
          </Typography>
        </Breadcrumbs>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Custom separator
        </Typography>
        <Stack spacing={1.5}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="#">
              Settings
            </Link>
            <Link underline="hover" color="inherit" href="#">
              Account
            </Link>
            <Typography color="text.primary">Profile</Typography>
          </Breadcrumbs>
          <Breadcrumbs
            separator={<NavigateNext fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link underline="hover" color="inherit" href="#">
              Workspace
            </Link>
            <Link underline="hover" color="inherit" href="#">
              Documents
            </Link>
            <Typography color="text.primary">Q4 Report</Typography>
          </Breadcrumbs>
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Collapsed
        </Typography>
        <Breadcrumbs
          maxItems={2}
          separator={<ChevronRight fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link underline="hover" color="inherit" href="#">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="#">
            Catalog
          </Link>
          <Link underline="hover" color="inherit" href="#">
            Accessories
          </Link>
          <Link underline="hover" color="inherit" href="#">
            Bags
          </Link>
          <Typography color="text.primary">Backpacks</Typography>
        </Breadcrumbs>
      </Box>
    </Stack>
  );
}
