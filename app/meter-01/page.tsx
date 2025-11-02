import { PreviewComponent } from "@/components/preview-page";
import { Meter01 } from "@/registry/components/meter-01/meter-01";

export default function Page() {
  return (
    <PreviewComponent>
      <Meter01 label="Storage Used" value={24} />
    </PreviewComponent>
  );
}
