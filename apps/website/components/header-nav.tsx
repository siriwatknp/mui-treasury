'use client';

import * as React from 'react';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const navItems = [
  { href: '/theme-preview', label: 'Theme' },
  { href: '/primitive', label: 'Primitive' },
  { href: '/block', label: 'Block' },
  { href: '/ai', label: 'AI' },
  { href: '/layout', label: 'Layout' },
];

const getFirstSegment = (path: string) => path.split('/')[1] || '';

export function HeaderNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const currentSegment = getFirstSegment(pathname);
  const activeItem = navItems.find(
    (item) => getFirstSegment(item.href) === currentSegment,
  );

  return (
    <>
      <Button
        onClick={(e) => setAnchorEl(e.currentTarget)}
        size="small"
        disableRipple
        className="sm:!hidden"
        aria-controls={open ? 'nav-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        endIcon={<ChevronDown size={16} />}
      >
        {activeItem?.label ?? 'Navigate'}
      </Button>
      <Menu
        id="nav-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        slotProps={{
          paper: {
            variant: 'outlined',
            sx: { my: '4px' },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {navItems.map((item) => (
          <MenuItem
            key={item.href}
            selected={getFirstSegment(item.href) === currentSegment}
            onClick={() => {
              router.push(item.href);
              setAnchorEl(null);
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>

      <nav className="items-center space-x-1 hidden sm:flex">
        {navItems.map((item) => {
          const isActive = getFirstSegment(item.href) === currentSegment;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-1.5 rounded-md text-sm transition-colors text-nowrap ${
                isActive ? 'bg-muted text-foreground' : 'hover:bg-muted/50'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
