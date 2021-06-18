import React, { HTMLProps } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Container, { ContainerProps } from '@material-ui/core/Container';
import { useFullscreenCtx } from '../../contexts/FullscreenContext';

export type InsetContainerProps = {
  leftSidebar?: React.ReactNode;
  rightSidebar?: React.ReactNode;
  WrapperProps?: HTMLProps<HTMLDivElement>;
} & ContainerProps;

export default (styled: any) => {
  const Div = styled('div')`
    overflow: auto;
    flex-grow: 1;
  `;

  const useContainerStyles = makeStyles({
    root: {
      display: 'flex',
      flexFlow: 'row nowrap',
      flexGrow: 1,
    },
  });

  const InsetContainer: React.FC<InsetContainerProps> = ({
    children,
    leftSidebar,
    rightSidebar,
    WrapperProps,
    ...props
  }) => {
    const isFullscreen = useFullscreenCtx();
    const classes = useContainerStyles(props);
    return (
      <Container {...props} classes={classes}>
        {leftSidebar}
        {isFullscreen ? <Div {...WrapperProps}>{children}</Div> : children}
        {rightSidebar}
      </Container>
    );
  };

  return InsetContainer;
};
