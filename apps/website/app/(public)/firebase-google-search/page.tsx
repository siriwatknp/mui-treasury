import Box from "@mui/material/Box";

import FirebaseGoogleSearch from "@/registry/firebase/firebase-google-search/firebase-google-search";
import { layoutVariables } from "@/registry/layout/layout-core/layoutVariables";

export default function Page() {
  return (
    <Box sx={{ height: `calc(100vh - var(${layoutVariables.headerHeight}))` }}>
      <FirebaseGoogleSearch />
    </Box>
  );
}
