import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const ReactNextArticle = () => (
  <Box bgcolor={"rgb(40, 44, 52)"}>
    <Container disableGutters>
      <Box
        mr={{ xs: 0, md: 10 }}
        py={5}
        px={{ xs: 2, sm: 3, md: 0 }}
        textAlign={"right"}
        color={"common.white"}
      >
        <Typography color={"secondary"} variant={"subtitle2"}>
          Next article
        </Typography>
        <Link
          href={"https://reactjs.org/docs/add-react-to-a-website.html"}
          target={"_blank"}
          rel={"noopener"}
          color={"inherit"}
          style={{ fontSize: 30 }}
        >
          Add React to a Website
        </Link>
      </Box>
    </Container>
  </Box>
);

export default ReactNextArticle;
