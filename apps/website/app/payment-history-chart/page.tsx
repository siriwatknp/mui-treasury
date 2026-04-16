import { PreviewComponent } from '@/components/preview-page';
import { PaymentHistoryChart } from '@/registry/blocks/payment-history-chart/payment-history-chart';

export default function Page() {
  return (
    <PreviewComponent>
      <PaymentHistoryChart />
    </PreviewComponent>
  );
}
