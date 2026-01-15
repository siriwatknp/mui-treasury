import FirebaseThinkingModel from "@/registry/firebase/firebase-thinking-model/firebase-thinking-model";
import Box from "@mui/material/Box";

export default function Page() {
  return (
    <Box sx={{ height: "calc(100vh - var(--jun-H-h))" }}>
      <FirebaseThinkingModel />
    </Box>
  );
}
