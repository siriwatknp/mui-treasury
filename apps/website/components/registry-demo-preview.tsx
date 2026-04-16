"use client";

import * as React from "react";

import dynamic from "next/dynamic";

import type { RegistryItem } from "@/lib/registry";

interface RegistryDemoPreviewProps {
  item: RegistryItem;
  demoPath?: string;
}

export function RegistryDemoPreview({
  item,
  demoPath,
}: RegistryDemoPreviewProps) {
  const componentPath = item.path.replace(".tsx", "");
  const resolvedDemoPath =
    demoPath ?? item.demoFiles?.[0]?.path.replace(".tsx", "");
  const exportName = item.meta.exportName;

  const Component = React.useMemo(
    () =>
      dynamic(
        () =>
          (resolvedDemoPath
            ? import(`@/registry/${resolvedDemoPath}`)
                .then((mod) => {
                  if (mod.Demo) return { default: mod.Demo };
                  if (mod.default) return mod;
                  return null;
                })
                .catch(() => null)
            : Promise.resolve(null)
          ).then((result) => {
            if (result) return result;
            return import(`@/registry/${componentPath}`)
              .then((mod) => {
                if (exportName && mod[exportName])
                  return { default: mod[exportName] };
                if (mod.default) return mod;
                return { default: PreviewUnavailable };
              })
              .catch(() => ({ default: PreviewUnavailable }));
          }),
        {
          loading: Loading,
          ssr: false,
        },
      ),
    [componentPath, exportName, resolvedDemoPath],
  );

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
