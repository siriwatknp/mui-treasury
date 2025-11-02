import * as React from "react";
import TicketStatusCard from "@/registry/blocks/ticket-status-card/ticket-status-card";
import { PreviewComponent } from "@/components/preview-page";

export default function TicketStatusCardPage() {
  return (
    <PreviewComponent>
      <TicketStatusCard />
    </PreviewComponent>
  );
}
