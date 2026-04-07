import FirebaseGoogleSearch from "@/registry/firebase/firebase-google-search/firebase-google-search";
import Box from "@mui/material/Box";

export default function Page() {
  return (
    <Box sx={{ height: "calc(100vh - var(--jun-H-h))" }}>
      <FirebaseGoogleSearch />
    </Box>
  );
}
