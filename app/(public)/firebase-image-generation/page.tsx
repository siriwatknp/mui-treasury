import FirebaseImageGeneration from "@/registry/firebase/firebase-image-generation/firebase-image-generation";
import Box from "@mui/material/Box";

export default function Page() {
  return (
    <Box sx={{ height: "calc(100vh - var(--jun-H-h))" }}>
      <FirebaseImageGeneration />
    </Box>
  );
}
