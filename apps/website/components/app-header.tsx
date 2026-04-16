'use client';

import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useColorScheme } from '@mui/material/styles';
import { Monitor, Moon, Sun } from 'lucide-react';
import Link from 'next/link';

import { HeaderNav } from '@/components/header-nav';
import Header from '@/registry/layout/layout-core/Header';

export function AppHeader() {
  const { mode, setMode } = useColorScheme();

  return (
    <Header
      clip
      className="justify-between px-6 py-3 bg-background gap-4 z-[1299]"
    >
      <Link href="/" className="text-xl font-semibold hover:opacity-80">
        MUI+
      </Link>
      <div className="flex items-center gap-2 min-w-0 overflow-auto">
        <HeaderNav />
        <Select
          value={mode || 'system'}
          onChange={(e) =>
            setMode(e.target.value as 'system' | 'light' | 'dark')
          }
          size="small"
          sx={{
            visibility: mode ? 'visible' : 'hidden',
            '& svg + span': { display: { xs: 'none', sm: 'inline-block' } },
          }}
        >
          <MenuItem value="system">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                height: '1lh',
              }}
            >
              <Monitor size={16} />
              <span>System</span>
            </Box>
          </MenuItem>
          <MenuItem value="light">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                height: '1lh',
              }}
            >
              <Sun size={16} />
              <span>Light</span>
            </Box>
          </MenuItem>
          <MenuItem value="dark">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                height: '1lh',
              }}
            >
              <Moon size={16} />
              <span>Dark</span>
            </Box>
          </MenuItem>
        </Select>
      </div>
    </Header>
  );
}
