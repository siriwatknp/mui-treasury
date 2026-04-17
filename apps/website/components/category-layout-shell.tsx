'use client';

import React from 'react';

import EdgeSidebar from '@/registry/layout/layout-core/EdgeSidebar';
import EdgeSidebarContent from '@/registry/layout/layout-core/EdgeSidebarContent';
import Root from '@/registry/layout/layout-core/Root';

export function CategoryLayoutShell({
  sidebar,
  children,
}: {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Root className="bg-background-default">
      {children}
      <EdgeSidebar
        permanentAutoCollapse="md"
        variant={{
          xs: ['drawer', { width: '232px', withoutOverlay: true }],
          md: ['permanent', { width: '200px' }],
          lg: ['permanent', { width: '256px' }],
        }}
        sx={{ '--jun-ES-line-w': '0px' }}
      >
        <EdgeSidebarContent className="bg-transparent">
          <div className="m-2 border shadow-xl rounded-lg md:shadow-none md:m-0 md:border-0 md:rounded-none bg-background-default flex flex-col">
            {sidebar}
          </div>
        </EdgeSidebarContent>
      </EdgeSidebar>
    </Root>
  );
}
