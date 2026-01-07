import { notFound } from "next/navigation";
import {
  getCategories,
  getTags,
  getSubcategories,
  getUncategorizedItems,
  getRegistryBySubcategory,
} from "@/lib/registry";
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

  // Get subcategories for this category
  const subcategories = getSubcategories(category);

  // Build subcategory data with counts
  const subcategoryData = subcategories
    .sort((a, b) => a.localeCompare(b))
    .map((subcat) => ({
      name: subcat,
      label: subcat
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      count: getRegistryBySubcategory(category, subcat).length,
    }));

  // Get only uncategorized items (no subcategory) for this category page
  const uncategorizedItems = getUncategorizedItems(category);

  // Filter by tags if provided
  const selectedTags = tags ? tags.split(",").filter(Boolean) : [];
  const filteredItems =
    selectedTags.length > 0
      ? uncategorizedItems.filter((item) =>
          item.meta.tags?.some((tag) => selectedTags.includes(tag)),
        )
      : uncategorizedItems;

  // Separate meta-only items (no implementation files) from regular items
  const metaOnlyItems = filteredItems.filter((item) => item.files.length === 0);
  const regularItems = filteredItems.filter((item) => item.files.length > 0);

  // Get all available tags for this category
  const availableTags = getTags(category);

  return (
    <CategoryClient
      categoryInfo={categoryInfo}
      availableTags={availableTags}
      selectedTags={selectedTags}
      metaOnlyItems={metaOnlyItems}
      regularItems={regularItems}
      subcategoryData={subcategoryData}
    />
  );
}
