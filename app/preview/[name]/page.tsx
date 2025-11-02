import { notFound } from "next/navigation";
import { getRegistryByName } from "@/lib/registry";
import { PreviewComponent } from "@/components/preview-page";
import { DynamicComponentLoader } from "@/components/dynamic-component-loader";

interface PreviewPageProps {
  params: Promise<{ name: string }>;
}

export default async function PreviewPage({ params }: PreviewPageProps) {
  const { name } = await params;

  // Get registry item
  const item = getRegistryByName(name);

  if (!item) {
    notFound();
  }

  // Extract the component path from the first file
  const componentPath = item.files[0].path.replace(".tsx", "");

  try {
    return (
      <div className="min-h-screen bg-background">
        <PreviewComponent>
          <DynamicComponentLoader componentPath={componentPath} />
        </PreviewComponent>
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
