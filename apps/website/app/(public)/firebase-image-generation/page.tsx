import Box from "@mui/material/Box";

import FirebaseImageGeneration from "@/registry/firebase/firebase-image-generation/firebase-image-generation";
import { layoutVariables } from "@/registry/layout/layout-core/layoutVariables";

export default function Page() {
  return (
    <Box sx={{ height: `calc(100vh - var(${layoutVariables.headerHeight}))` }}>
      <FirebaseImageGeneration />
    </Box>
  );
}
