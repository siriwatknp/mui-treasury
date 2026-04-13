import Box from "@mui/material/Box";

import FirebaseThinkingModel from "@/registry/firebase/firebase-thinking-model/firebase-thinking-model";
import { layoutVariables } from "@/registry/layout/layout-core/layoutVariables";

export default function Page() {
  return (
    <Box sx={{ height: `calc(100vh - var(${layoutVariables.headerHeight}))` }}>
      <FirebaseThinkingModel />
    </Box>
  );
}
