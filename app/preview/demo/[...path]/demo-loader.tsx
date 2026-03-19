"use client";

import dynamic from "next/dynamic";

export function DemoDynamicLoader({ demoPath }: { demoPath: string }) {
  const Component = dynamic(
    () =>
      import(`@/registry/${demoPath}`).then((mod) => {
        if (mod.Demo) return { default: mod.Demo };
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
