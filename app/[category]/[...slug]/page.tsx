import { notFound } from "next/navigation";
import {
  getRegistryByName,
  getSubcategories,
  getRegistryBySubcategory,
  getCategories,
  getRegistryItems,
  getTags,
} from "@/lib/registry";
import { PreviewComponent } from "@/components/preview-page";
import { DynamicComponentLoader } from "@/components/dynamic-component-loader";
import CategoryClient from "@/components/category-client";
import { FirebaseConfigForm } from "@/components/firebase-config-form";

interface SlugPageProps {
  params: Promise<{ category: string; slug: string[] }>;
  searchParams: Promise<{ tags?: string }>;
}

export async function generateStaticParams() {
  const items = getRegistryItems();
  const paths: Array<{ category: string; slug: string[] }> = [];

  // Subcategory listing pages
  const categories = getCategories();
  for (const cat of categories) {
    const subcats = getSubcategories(cat.name);
    for (const subcat of subcats) {
      paths.push({ category: cat.name, slug: [subcat] });
    }
  }

  // Item detail pages
  for (const item of items) {
    if (item.meta.category) {
      if (item.meta.subcategory) {
        // With subcategory: /category/subcategory/name
        paths.push({
          category: item.meta.category,
          slug: [item.meta.subcategory, item.name],
        });
      } else {
        // Without subcategory: /category/name
        paths.push({
          category: item.meta.category,
          slug: [item.name],
        });
      }
    }
  }

  return paths;
}

export default async function SlugPage({
  params,
  searchParams,
}: SlugPageProps) {
  const { category, slug } = await params;
  const { tags } = await searchParams;

  // Validate category exists
  const categories = getCategories();
  const categoryInfo = categories.find((cat) => cat.name === category);
  if (!categoryInfo) {
    notFound();
  }

  if (slug.length === 1) {
    const param = slug[0];

    // Priority 1: Check if it's a subcategory
    const subcategories = getSubcategories(category);
    if (subcategories.includes(param)) {
      // Render subcategory listing page
      const allItems = getRegistryBySubcategory(category, param);

      // Filter by tags if provided
      const selectedTags = tags ? tags.split(",").filter(Boolean) : [];
      const filteredItems =
        selectedTags.length > 0
          ? allItems.filter((item) =>
              item.meta.tags?.some((tag) => selectedTags.includes(tag)),
            )
          : allItems;

      const metaOnlyItems = filteredItems.filter(
        (item) => item.files.length === 0,
      );
      const regularItems = filteredItems.filter(
        (item) => item.files.length > 0,
      );
      const availableTags = getTags(category);

      // Capitalize subcategory name for display
      const subcategoryLabel = param
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      return (
        <CategoryClient
          categoryInfo={{
            name: category,
            label: subcategoryLabel,
          }}
          availableTags={availableTags}
          selectedTags={selectedTags}
          metaOnlyItems={metaOnlyItems}
          regularItems={regularItems}
          breadcrumb={[{ label: categoryInfo.label, href: `/${category}` }]}
          headerContent={
            category === "ai" && param === "firebase" ? (
              <FirebaseConfigForm key="firebase-config-form" />
            ) : undefined
          }
        />
      );
    }

    // Priority 2: Check if it's a registry item (no subcategory)
    const item = getRegistryByName(param);
    if (item && item.meta.category === category && !item.meta.subcategory) {
      return <ItemDetailPage item={item} category={category} />;
    }

    // Neither subcategory nor item → 404
    notFound();
  }

  if (slug.length === 2) {
    const [subcategory, name] = slug;
    const item = getRegistryByName(name);

    // Validate: item exists, category matches, subcategory matches
    if (
      item &&
      item.meta.category === category &&
      item.meta.subcategory === subcategory
    ) {
      return (
        <ItemDetailPage
          item={item}
          category={category}
          subcategory={subcategory}
        />
      );
    }

    notFound();
  }

  // Invalid slug length
  notFound();
}

// Item Detail Page Component
function ItemDetailPage({
  item,
  category,
  subcategory,
}: {
  item: NonNullable<ReturnType<typeof getRegistryByName>>;
  category: string;
  subcategory?: string;
}) {
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
              {subcategory && (
                <>
                  {" / "}
                  <a
                    href={`/${category}/${subcategory}`}
                    className="hover:text-foreground"
                  >
                    {subcategory}
                  </a>
                </>
              )}
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
}
