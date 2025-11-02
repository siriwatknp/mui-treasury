import { PreviewComponent } from "@/components/preview-page";
import DatabaseMetricsCard from "@/registry/blocks/database-metrics-card/database-metrics-card";

export default function Page() {
  return (
    <PreviewComponent>
      <DatabaseMetricsCard />
    </PreviewComponent>
  );
}
