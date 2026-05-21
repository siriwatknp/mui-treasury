import Box from '@mui/material/Box';

import { PreviewComponent } from '@/components/preview-page';
import { Slider01 } from '@/registry/components/slider-01/slider-01';

export default function Page() {
  return (
    <PreviewComponent>
      <Box sx={{ width: '100%', maxWidth: 560 }}>
        <Slider01 label="Level" defaultValue={61} />
      </Box>
    </PreviewComponent>
  );
}
