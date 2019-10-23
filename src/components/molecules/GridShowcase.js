import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useMetadata } from 'containers/Demo/context';

const GridShowcase = ({
  gridStyles,
  components,
  GridItemProps,
  renderComponentWrapper: Wrapper,
}) => {
  const { setComponent } = useMetadata();
  return (
    <Grid container classes={gridStyles}>
      {components.map(Component => {
        const {
          title: name = Component.name,
          frameProps,
          description,
        } = Component.metadata;
        return (
          <Grid key={name} item classes={gridStyles} {...GridItemProps}>
            <Wrapper
              name={name}
              description={description}
              frameProps={frameProps}
              height={'100%'}
              onClickCode={() => setComponent(Component)}
            >
              <Component />
            </Wrapper>
          </Grid>
        );
      })}
    </Grid>
  );
};

GridShowcase.defaultProps = {
  renderComponentWrapper: ({ children }) => <>{children}</>,
};

export default GridShowcase;
