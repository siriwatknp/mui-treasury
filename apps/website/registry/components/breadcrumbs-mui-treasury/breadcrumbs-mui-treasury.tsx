import * as React from 'react';

import Description from '@mui/icons-material/Description';
import Folder from '@mui/icons-material/Folder';
import Home from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const iconSx = { display: 'flex', alignItems: 'center', gap: 0.5 };

export function BreadcrumbsMuiTreasury() {
  return (
    <Stack spacing={4} sx={{ width: '100%', maxWidth: 720, mx: 'auto' }}>
      <Box>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          With icons
        </Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="#" sx={iconSx}>
            <Home fontSize="small" />
            Home
          </Link>
          <Link underline="hover" color="inherit" href="#" sx={iconSx}>
            <Folder fontSize="small" />
            Workspace
          </Link>
          <Link underline="hover" color="inherit" href="#" sx={iconSx}>
            <Folder fontSize="small" />
            Acme Inc
          </Link>
          <Typography color="text.primary" sx={iconSx}>
            <Description fontSize="small" />
            Q4 Roadmap
          </Typography>
        </Breadcrumbs>
      </Box>

      <Box>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Collapsed
        </Typography>
        <Breadcrumbs maxItems={3} aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="#">
            Files
          </Link>
          <Link underline="hover" color="inherit" href="#">
            Documents
          </Link>
          <Link underline="hover" color="inherit" href="#">
            Engineering
          </Link>
          <Link underline="hover" color="inherit" href="#">
            2026
          </Link>
          <Link underline="hover" color="inherit" href="#">
            Plans
          </Link>
          <Link underline="hover" color="inherit" href="#">
            Roadmap
          </Link>
          <Typography color="text.primary">Overview</Typography>
        </Breadcrumbs>
      </Box>
    </Stack>
  );
}
