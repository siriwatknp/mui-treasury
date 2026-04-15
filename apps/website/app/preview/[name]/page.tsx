import { notFound } from "next/navigation";

import { DynamicComponentLoader } from "@/components/dynamic-component-loader";
import { PreviewComponent } from "@/components/preview-page";
import { getRegistryByName } from "@/lib/registry";

import { PreviewStatic } from "./preview-static";

interface PreviewPageProps {
  params: Promise<{ name: string }>;
}

export async function generateMetadata({ params }: PreviewPageProps) {
  const { name } = await params;
  return {
    openGraph: { images: [`/og/${name}.png`] },
    twitter: { card: "summary_large_image", images: [`/og/${name}.png`] },
  };
}

export default async function PreviewPage({ params }: PreviewPageProps) {
  const { name } = await params;

  const item = getRegistryByName(name);

  if (!item) {
    notFound();
  }

  const componentPath = item.files[0].path.replace(".tsx", "");

  try {
    return (
      <div className="min-h-screen bg-background">
        <PreviewStatic>
          <PreviewComponent>
            <DynamicComponentLoader
              componentPath={componentPath}
              exportName={item.meta.exportName}
            />
          </PreviewComponent>
        </PreviewStatic>
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
