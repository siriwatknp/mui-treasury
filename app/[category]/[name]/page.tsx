import { notFound } from "next/navigation";
import { getRegistryByName } from "@/lib/registry";
import { PreviewComponent } from "@/components/preview-page";
import { DynamicComponentLoader } from "@/components/dynamic-component-loader";

interface RegistryPageProps {
  params: Promise<{ category: string; name: string }>;
}

export async function generateStaticParams() {
  const { getRegistryItems } = await import("@/lib/registry");
  const allItems = getRegistryItems();

  const paths: Array<{ category: string; name: string }> = [];

  allItems.forEach((item) => {
    if (item.meta.category) {
      paths.push({
        category: item.meta.category,
        name: item.name,
      });
    }
  });

  return paths;
}

// Note: Dynamic component execution is commented out for now
// We're using direct imports from the registry instead

export default async function RegistryPage({ params }: RegistryPageProps) {
  const { category, name } = await params;

  // Get registry item
  const item = getRegistryByName(name);

  if (!item || item.meta.category !== category) {
    notFound();
  }

  // For now, let's use dynamic import to load the actual component from the registry
  // This is a more reliable approach than executing code from JSON
  try {
    return (
      <div>
        {/* Page Header */}
        <header className="border-b px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div>
              <nav className="text-sm text-muted-foreground mb-1">
                <a href={`/${category}`} className="hover:text-foreground">
                  {category}
                </a>
                {" / "}
                <span className="text-foreground">{item.title}</span>
              </nav>
              <h1 className="text-2xl font-semibold">{item.title}</h1>
              <p className="text-muted-foreground mt-1">{item.description}</p>
            </div>

            {/* Tags */}
            {item.meta.tags && item.meta.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {item.meta.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Component Preview */}
        <main className="p-6">
          <div className="max-w-7xl mx-auto">
            <PreviewComponent>
              <DynamicComponentLoader
                componentPath={item.path.replace(".tsx", "")}
              />
            </PreviewComponent>
          </div>
        </main>
      </div>
    );
  } catch (error) {
    console.error("Error loading component:", error);
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
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
