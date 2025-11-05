import { notFound } from "next/navigation";
import { getRegistryByCategory, getCategories, getTags } from "@/lib/registry";
import CategoryClient from "@/components/category-client";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ tags?: string }>;
}

export async function generateStaticParams() {
  const categories = getCategories();
  return categories.map((category) => ({
    category: category.name,
  }));
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { category } = await params;
  const { tags } = await searchParams;

  // Check if category exists
  const categories = getCategories();
  const categoryInfo = categories.find((cat) => cat.name === category);

  if (!categoryInfo) {
    notFound();
  }

  // Get all items for this category
  const allItems = getRegistryByCategory(category);

  // Filter by tags if provided
  const selectedTags = tags ? tags.split(",").filter(Boolean) : [];
  const filteredItems =
    selectedTags.length > 0
      ? allItems.filter((item) =>
          item.meta.tags?.some((tag) => selectedTags.includes(tag)),
        )
      : allItems;

  // Separate meta-only items (no implementation files) from regular items
  const metaOnlyItems = filteredItems.filter((item) => item.files.length === 0);
  const regularItems = filteredItems.filter((item) => item.files.length > 0);

  // Get all available tags for this category
  const availableTags = getTags(category);

  return (
    <CategoryClient
      categoryInfo={categoryInfo}
      allItems={allItems}
      availableTags={availableTags}
      selectedTags={selectedTags}
      metaOnlyItems={metaOnlyItems}
      regularItems={regularItems}
    />
  );
}
