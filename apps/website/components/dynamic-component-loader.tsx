"use client";

import dynamic from "next/dynamic";

interface DynamicComponentLoaderProps {
  componentPath: string;
  exportName?: string;
}

export function DynamicComponentLoader({
  componentPath,
  exportName,
}: DynamicComponentLoaderProps) {
  const Component = dynamic(
    () =>
      import(`@/registry/${componentPath}`).then((mod) => {
        if (exportName && mod[exportName]) return { default: mod[exportName] };
        if (mod.default) return mod;
        return {
          default: () => (
            <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
              Preview unavailable
            </div>
          ),
        };
      }),
    {
      loading: () => <div className="animate-pulse bg-muted h-full rounded" />,
      ssr: false,
    },
  );

  return <Component />;
}
