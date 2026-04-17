import { notFound } from 'next/navigation';

import { AppHeader } from '@/components/app-header';
import CarbonAds from '@/components/carbon-ads/CarbonAds';
import '@/components/carbon-ads/CarbonAds.css';
import { CategoryLayoutShell } from '@/components/category-layout-shell';
import { CategorySidebar } from '@/components/category-sidebar';
import {
  getCategories,
  getRegistryByCategory,
  isVisibleItem,
} from '@/lib/registry';

interface CategoryLayoutProps {
  children: React.ReactNode;
  params: Promise<{ category: string }>;
}

export default async function CategoryLayout({
  children,
  params,
}: CategoryLayoutProps) {
  const { category } = await params;

  const categories = getCategories();
  const categoryInfo = categories.find((cat) => cat.name === category);
  if (!categoryInfo) {
    notFound();
  }

  const allCategoryItems =
    getRegistryByCategory(category).filter(isVisibleItem);

  return (
    <CategoryLayoutShell
      sidebar={
        <>
          <CategorySidebar
            allCategoryItems={allCategoryItems}
            categoryName={category}
          >
            <div className="px-2 flex justify-center">
              <CarbonAds vertical />
            </div>
          </CategorySidebar>
        </>
      }
    >
      <AppHeader />
      {children}
    </CategoryLayoutShell>
  );
}
