"use client";

import dynamic from "next/dynamic";

interface DynamicComponentLoaderProps {
  componentPath: string;
}

export function DynamicComponentLoader({
  componentPath,
}: DynamicComponentLoaderProps) {
  const Component = dynamic(() => import(`@/registry/${componentPath}`), {
    loading: () => <div className="animate-pulse bg-muted h-full rounded" />,
    ssr: false,
  });

  return <Component />;
}
