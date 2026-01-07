import { notFound } from "next/navigation";
import { AppHeader } from "@/components/app-header";
import { CategorySidebar } from "@/components/category-sidebar";
import { getCategories, getRegistryByCategory } from "@/lib/registry";
import CarbonAds from "@/components/carbon-ads/CarbonAds";
import "@/components/carbon-ads/CarbonAds.css";

interface CategoryLayoutProps {
  children: React.ReactNode;
  params: Promise<{ category: string }>;
}

export default async function CategoryLayout({
  children,
  params,
}: CategoryLayoutProps) {
  const { category } = await params;

  // Validate category exists
  const categories = getCategories();
  const categoryInfo = categories.find((cat) => cat.name === category);
  if (!categoryInfo) {
    notFound();
  }

  // Get all items for sidebar
  const allCategoryItems = getRegistryByCategory(category);

  return (
    <div className="jun-layout bg-background">
      <AppHeader />
      <div className="jun-edgeSidebar jun-edgeSidebar-permanent-hidden jun-edgeSidebar-permanent-autoCollapse-__CSS_VALUES__ xl:jun-edgeSidebar-permanent-visible xl:jun-edgeSidebar-w-[200px] [--jun-ES-line-w:0px]">
        <div className="jun-edgeContent bg-transparent pb-4">
          <CategorySidebar
            allCategoryItems={allCategoryItems}
            categoryName={category}
          />
          <div className="px-2 mt-2">
            <CarbonAds vertical />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
