import { notFound } from 'next/navigation';

import { PreviewCanvas } from '@/components/preview-page';
import { RegistryDemoPreview } from '@/components/registry-demo-preview';
import { getRegistryByName } from '@/lib/registry';

interface PreviewPageProps {
  params: Promise<{ name: string }>;
}

export async function generateMetadata({ params }: PreviewPageProps) {
  const { name } = await params;
  const item = getRegistryByName(name);
  const title = item?.title ?? name;
  const description = item?.description;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [`/og/${name}.png`],
    },
    twitter: {
      card: 'summary_large_image',
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

  if (item.meta.screenshot && item.meta.previewPath) {
    notFound();
  }

  const hasContent =
    item.files.length > 0 || (item.demoFiles && item.demoFiles.length > 0);
  if (!hasContent) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a]">
      {/* 630px is the visual regression viewport height */}
      <PreviewCanvas className="min-h-[min(100lvh,630px)]">
        <RegistryDemoPreview item={item} />
      </PreviewCanvas>
    </div>
  );
}
