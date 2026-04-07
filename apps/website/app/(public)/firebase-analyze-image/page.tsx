import FirebaseAnalyzeImage from "@/registry/firebase/firebase-analyze-image/firebase-analyze-image";
import Box from "@mui/material/Box";

export default function Page() {
  return (
    <Box sx={{ height: "calc(100vh - var(--jun-H-h))" }}>
      <FirebaseAnalyzeImage />
    </Box>
  );
}
