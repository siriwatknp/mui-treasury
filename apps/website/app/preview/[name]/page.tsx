import { notFound } from "next/navigation";

import { DynamicComponentLoader } from "@/components/dynamic-component-loader";
import { getRegistryByName } from "@/lib/registry";

interface PreviewPageProps {
  params: Promise<{ name: string }>;
}

export async function generateMetadata({ params }: PreviewPageProps) {
  const { name } = await params;
  const item = getRegistryByName(name);
  const title = `${item?.title ?? name} — MUI Treasury`;
  const description = item?.description;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: `/og/${name}.png`, width: 2400, height: 1260 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/og/${name}.png`],
    },
  };
}

export default async function PreviewPage({ params }: PreviewPageProps) {
  const { name } = await params;

  const item = getRegistryByName(name);

  if (!item) {
    notFound();
  }

  const hasContent =
    item.files.length > 0 || (item.demoFiles && item.demoFiles.length > 0);
  if (!hasContent) {
    notFound();
  }

  const componentPath = item.path.replace(".tsx", "");
  const demoPath = item.demoFiles?.[0]?.path.replace(".tsx", "");

  try {
    return (
      <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a]">
        <div
          data-preview
          className="w-full h-full flex items-center justify-center p-4"
        >
          <DynamicComponentLoader
            componentPath={componentPath}
            exportName={item.meta.exportName}
            demoPath={demoPath}
          />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading component:", error);
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Component not found</h2>
          <p className="text-muted-foreground">
            The component &quot;{name}&quot; could not be loaded.
          </p>
        </div>
      </div>
    );
  }
}
