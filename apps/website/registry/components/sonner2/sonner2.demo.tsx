'use client';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Info } from 'lucide-react';

import { Sonner, toast } from '@/registry/components/sonner2/sonner2';

export function Demo() {
  return (
    <>
      <Sonner closeButton />
      <Stack
        direction="row"
        spacing={1}
        useFlexGap
        sx={{
          flexWrap: 'wrap',
        }}
      >
        <Button
          variant="outlined"
          onClick={() =>
            toast('Toast message', {
              icon: <Info />,
              action: { label: 'Button', onClick: () => {} },
            })
          }
        >
          Default
        </Button>
        <Button
          variant="outlined"
          color="success"
          onClick={() =>
            toast.success('Toast message', {
              action: { label: 'Button', onClick: () => {} },
            })
          }
        >
          Success
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() =>
            toast.error('Toast message', {
              action: { label: 'Button', onClick: () => {} },
            })
          }
        >
          Error
        </Button>
        <Button
          variant="outlined"
          color="warning"
          onClick={() =>
            toast.warning('Toast message', {
              action: { label: 'Button', onClick: () => {} },
            })
          }
        >
          Warning
        </Button>
        <Button
          variant="outlined"
          color="info"
          onClick={() =>
            toast.info('Toast message', {
              action: { label: 'Button', onClick: () => {} },
            })
          }
        >
          Info
        </Button>
      </Stack>
    </>
  );
}
