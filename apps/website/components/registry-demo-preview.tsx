'use client';

import * as React from 'react';

import dynamic from 'next/dynamic';

import type { RegistryItem } from '@/lib/registry';
import { getModuleLoader } from '@/lib/registry-demos.generated';

interface RegistryDemoPreviewProps {
  item: RegistryItem;
  demoPath?: string;
}

export function RegistryDemoPreview({
  item,
  demoPath,
}: RegistryDemoPreviewProps) {
  const componentKey = item.path.replace(/\.tsx?$/, '');
  const demoKey =
    demoPath?.replace(/\.tsx?$/, '') ??
    item.demoFiles?.[0]?.path.replace(/\.tsx?$/, '');
  const exportName = item.meta.exportName;

  const Component = React.useMemo(() => {
    const demoLoader = demoKey ? getModuleLoader(demoKey) : null;
    const componentLoader = getModuleLoader(componentKey);

    return dynamic(
      () => {
        const tryDemo = demoLoader
          ? demoLoader().then((mod) => {
              if ('Demo' in mod && mod.Demo) {
                return { default: mod.Demo as React.ComponentType };
              }
              if ('default' in mod && mod.default) {
                return mod as { default: React.ComponentType };
              }
              return null;
            })
          : Promise.resolve(null);

        return tryDemo.then((result) => {
          if (result) return result;
          if (!componentLoader) return { default: PreviewUnavailable };
          return componentLoader()
            .then((mod) => {
              if (exportName && exportName in mod && mod[exportName]) {
                return { default: mod[exportName] as React.ComponentType };
              }
              if ('default' in mod && mod.default) {
                return mod as { default: React.ComponentType };
              }
              return { default: PreviewUnavailable };
            })
            .catch(() => ({ default: PreviewUnavailable }));
        });
      },
      {
        loading: Loading,
        ssr: false,
      },
    );
  }, [componentKey, demoKey, exportName]);

  return <Component />;
}

function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-pulse bg-muted rounded w-16 h-16" />
    </div>
  );
}

function PreviewUnavailable() {
  return (
    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
      <span className="text-sm">Preview unavailable</span>
    </div>
  );
}
