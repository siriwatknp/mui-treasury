import Stack from '@mui/material/Stack';

import { Slider01 } from '@/registry/components/slider-01/slider-01';

export const meta = {
  title: 'Slider 01',
  description:
    'Inline slider with label and live value badge styled as a dark control strip.',
};

export function Demo() {
  return (
    <Stack spacing={2} sx={{ width: '100%', maxWidth: 560 }}>
      <Slider01 label="Level" defaultValue={61} />
    </Stack>
  );
}
