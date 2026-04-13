import Box from "@mui/material/Box";

import FirebaseStoryTelling from "@/registry/firebase/firebase-story-telling/firebase-story-telling";
import { layoutVariables } from "@/registry/layout/layout-core/layoutVariables";

export default function Page() {
  return (
    <Box sx={{ height: `calc(100vh - var(${layoutVariables.headerHeight}))` }}>
      <FirebaseStoryTelling />
    </Box>
  );
}
