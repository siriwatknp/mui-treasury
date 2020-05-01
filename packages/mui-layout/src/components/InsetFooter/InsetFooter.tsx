import React from 'react';
import Container, { ContainerProps } from '@material-ui/core/Container';
import { createFooter } from '../Footer';
import { createInsetAvoidingView } from '../InsetAvoidingView';

export const createInsetFooter = (Div?: any, StyledFooter?: any) => {
  const Footer = createFooter(StyledFooter);
  const InsetAvoidingView = createInsetAvoidingView(Div);

  const InsetFooter: React.FC<{
    ContainerProps?: ContainerProps;
    InsetAvoidingViewProps?: { className?: string };
  }> = ({ children, ContainerProps, InsetAvoidingViewProps, ...props }) => (
    <Footer {...props}>
      <Container {...ContainerProps}>
        <InsetAvoidingView {...InsetAvoidingViewProps}>
          {children}
        </InsetAvoidingView>
      </Container>
    </Footer>
  );
  return InsetFooter;
};

export default createInsetFooter();
