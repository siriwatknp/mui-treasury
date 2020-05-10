import React from 'react';
import Container, { ContainerProps } from '@material-ui/core/Container';
import getFooter from '../Footer';
import getInsetAvoidingView from '../InsetAvoidingView';

export default (styled: any) => {
  const Footer = getFooter(styled);
  const InsetAvoidingView = getInsetAvoidingView(styled);

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
