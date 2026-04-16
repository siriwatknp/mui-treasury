'use client';

import * as React from 'react';

import dynamic from 'next/dynamic';

import { getModuleLoader } from '@/lib/registry-demos.generated';

export function DemoDynamicLoader({ demoPath }: { demoPath: string }) {
  const Component = React.useMemo(() => {
    const key = demoPath.replace(/\.tsx?$/, '');
    const loader = getModuleLoader(key);
    if (!loader) return PreviewUnavailable;

    return dynamic(
      () =>
        loader().then((mod) => {
          if ('Demo' in mod && mod.Demo) {
            return { default: mod.Demo as React.ComponentType };
          }
          if ('default' in mod && mod.default) {
            return mod as { default: React.ComponentType };
          }
          return { default: PreviewUnavailable };
        }),
      {
        loading: () => (
          <div className="animate-pulse bg-muted h-full rounded" />
        ),
        ssr: false,
      },
    );
  }, [demoPath]);

  return <Component />;
}

function PreviewUnavailable() {
  return (
    <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
      Preview unavailable
    </div>
  );
}
