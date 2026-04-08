import { PreviewComponent } from "@/components/preview-page";
import { Demo as AIMessageDemo } from "@/registry/components/ai-message/ai-message.demo";

export default function Page() {
  return (
    <PreviewComponent>
      <AIMessageDemo />
    </PreviewComponent>
  );
}
