import React from 'react';
import SidebarLayout from 'components/layout/SidebarLayout';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { PKG } from 'constants/menus';
import FrontMatter from 'containers/FrontMatter';

const ComponentInstruction = () => (
  <SidebarLayout
    pkg={PKG.components}
    getOpenKeys={menus => menus.map(({ key }) => key)}
  >
    <Container maxWidth={'md'}>
      <Box py={4} px={8}>
        <h1>Instruction</h1>
        <FrontMatter match={'instruction'}>
          {({ html }) => <div dangerouslySetInnerHTML={{ __html: html }} />}
        </FrontMatter>
      </Box>
    </Container>
  </SidebarLayout>
);

export default ComponentInstruction;
