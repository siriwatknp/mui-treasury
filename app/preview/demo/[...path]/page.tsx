import { PreviewComponent } from "@/components/preview-page";

import { DemoDynamicLoader } from "./demo-loader";

interface DemoPreviewPageProps {
  params: Promise<{ path: string[] }>;
}

export default async function DemoPreviewPage({
  params,
}: DemoPreviewPageProps) {
  const { path } = await params;
  const demoPath = path.join("/");

  return (
    <div className="min-h-screen bg-background">
      <PreviewComponent>
        <DemoDynamicLoader demoPath={demoPath} />
      </PreviewComponent>
    </div>
  );
}
