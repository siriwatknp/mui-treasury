import Box from "@mui/material/Box";
import PortfolioValueChart from "@/registry/blocks/portfolio-value-chart/portfolio-value-chart";

export default function PortfolioValueChartPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
        bgcolor: "grey.50",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 800 }}>
        <PortfolioValueChart />
      </Box>
    </Box>
  );
}
