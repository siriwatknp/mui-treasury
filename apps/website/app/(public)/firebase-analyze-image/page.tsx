import Box from '@mui/material/Box';

import FirebaseAnalyzeImage from '@/registry/firebase/firebase-analyze-image/firebase-analyze-image';
import { layoutVariables } from '@/registry/layout/layout-core/layoutVariables';

export default function Page() {
  return (
    <Box sx={{ height: `calc(100vh - var(${layoutVariables.headerHeight}))` }}>
      <FirebaseAnalyzeImage />
    </Box>
  );
}
