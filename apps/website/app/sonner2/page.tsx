'use client';

import { PreviewComponent } from '@/components/preview-page';
import { Demo as Sonner2Demo } from '@/registry/components/sonner2/sonner2.demo';

export default function Page() {
  return (
    <PreviewComponent>
      <Sonner2Demo />
    </PreviewComponent>
  );
}
