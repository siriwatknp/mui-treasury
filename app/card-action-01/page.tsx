import { PreviewComponent } from "@/components/preview-page";
import CardAction01 from "@/registry/components/card-action-01/card-action-01";
import Box from "@mui/material/Box";

export default function Page() {
  return (
    <PreviewComponent>
      <Box sx={{ maxWidth: 405 }}>
        <CardAction01 />
      </Box>
    </PreviewComponent>
  );
}
