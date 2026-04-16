'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function HeaderNav() {
  const pathname = usePathname();

  const navItems = [
    { href: '/theme-preview', label: 'Theme' },
    { href: '/primitive', label: 'Primitive' },
    { href: '/block', label: 'Block' },
    { href: '/ai', label: 'AI' },
    { href: '/layout', label: 'Layout' },
  ];

  const getFirstSegment = (path: string) => {
    return path.split('/')[1] || '';
  };

  const currentSegment = getFirstSegment(pathname);

  return (
    <nav className="flex items-center space-x-1">
      {navItems.map((item) => {
        const itemSegment = getFirstSegment(item.href);
        const isActive = currentSegment === itemSegment;

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
  );
}
