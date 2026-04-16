import * as React from 'react';

import { PreviewComponent } from '@/components/preview-page';
import { TicketStatusCard } from '@/registry/blocks/ticket-status-card/ticket-status-card';

export default function TicketStatusCardPage() {
  return (
    <PreviewComponent>
      <TicketStatusCard />
    </PreviewComponent>
  );
}
