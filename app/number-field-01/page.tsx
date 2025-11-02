import { PreviewComponent } from "@/components/preview-page";
import NumberField01 from "@/registry/components/number-field-01/number-field-01";

export default function Page() {
  return (
    <PreviewComponent>
      <NumberField01 label="Amount" />
    </PreviewComponent>
  );
}
