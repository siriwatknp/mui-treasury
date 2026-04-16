"use client";

import dynamic from "next/dynamic";

interface DynamicComponentLoaderProps {
  componentPath: string;
  exportName?: string;
  demoPath?: string;
}

export function DynamicComponentLoader({
  componentPath,
  exportName,
  demoPath,
}: DynamicComponentLoaderProps) {
  const Component = dynamic(
    () =>
      (demoPath
        ? import(`@/registry/${demoPath}`)
            .then((mod) => {
              if (mod.Demo) return { default: mod.Demo };
              if (mod.default) return mod;
              return null;
            })
            .catch(() => null)
        : Promise.resolve(null)
      ).then((result) => {
        if (result) return result;
        return import(`@/registry/${componentPath}`).then((mod) => {
          if (exportName && mod[exportName])
            return { default: mod[exportName] };
          if (mod.default) return mod;
          return {
            default: () => (
              <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                Preview unavailable
              </div>
            ),
          };
        });
      }),
    {
      loading: () => <div className="animate-pulse bg-muted h-full rounded" />,
      ssr: false,
    },
  );

  return <Component />;
}
