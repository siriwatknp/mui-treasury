import { AppHeader } from '@/components/app-header';
import Content from '@/registry/layout/layout-core/Content';
import EdgeSidebar from '@/registry/layout/layout-core/EdgeSidebar';
import Root from '@/registry/layout/layout-core/Root';

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Root sx={{ bgcolor: 'background.default' }}>
      <AppHeader />
      <EdgeSidebar
        id="theme-preview-sidebar"
        variant={['permanent', { visibility: 'hidden' }]}
      />
      <Content>{children}</Content>
    </Root>
  );
}
