import FirebaseStoryTelling from "@/registry/firebase/firebase-story-telling/firebase-story-telling";
import Box from "@mui/material/Box";

export default function Page() {
  return (
    <Box sx={{ height: "calc(100vh - var(--jun-H-h))" }}>
      <FirebaseStoryTelling />
    </Box>
  );
}
