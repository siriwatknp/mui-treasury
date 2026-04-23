import Stack from '@mui/material/Stack';
import { ArrowBigUpIcon, CommandIcon, OptionIcon } from 'lucide-react';

import { Keycap01 } from '@/registry/components/keycap-01/keycap-01';

export const meta = {
  title: 'Keycap',
  description: 'Mechanical keyboard keycap-style button with pressed state.',
};

export function Demo() {
  return (
    <Stack direction="row" spacing={1.5}>
      <Keycap01>C</Keycap01>
      <Keycap01>S</Keycap01>
      <Keycap01 aria-label="Command">
        <CommandIcon size={16} />
      </Keycap01>
      <Keycap01 aria-label="Shift">
        <ArrowBigUpIcon size={16} />
      </Keycap01>
      <Keycap01 aria-label="Option">
        <OptionIcon size={16} />
      </Keycap01>
    </Stack>
  );
}
