import Typography from "@mui/material/Typography";

import Content from "@/registry/layout/layout-core/Content";
import Footer from "@/registry/layout/layout-core/Footer";
import Header from "@/registry/layout/layout-core/Header";
import Root from "@/registry/layout/layout-core/Root";

export const meta = {
  title: "Root Standalone",
  description:
    "Standalone mode fits the layout to its height, useful for POS or chat apps.",
};

export function Demo() {
  return (
    <Root standalone height="350px" sx={{ minWidth: 200 }}>
      <Header sx={{ px: 2 }}>
        <Typography variant="caption" fontWeight="bold">
          Standalone
        </Typography>
      </Header>
      <Content sx={{ p: 2 }}>
        {Array.from({ length: 20 }, (_, i) => (
          <Typography key={i} variant="body2" color="text.secondary">
            Line {i + 1}
          </Typography>
        ))}
      </Content>
      <Footer sx={{ p: 2 }}>
        <Typography variant="caption" color="text.secondary">
          Footer
        </Typography>
      </Footer>
    </Root>
  );
}
